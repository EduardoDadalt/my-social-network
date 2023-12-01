import { ImageController } from "@/controller/ImageController";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const buffer = await ImageController.getBinaryImage(id);
  if (!buffer) {
    return NextResponse.json(
      {
        message: "Image not found",
      },
      {
        status: 404,
      }
    );
  }
  const response = new NextResponse(buffer);
  response.headers.set("Content-Type", "image/jpeg");
  return response;
}
