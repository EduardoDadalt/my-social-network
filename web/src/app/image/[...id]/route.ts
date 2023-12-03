import { ImageController } from "@/controller/ImageController";
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function GET(
  request: NextRequest,
  {
    params: {
      id: [id],
    },
  }: { params: { id: string[] } }
) {
  const buffer = await ImageController.getBinaryImage(id);
  if (!buffer) {
    return new NextResponse(undefined, { status: 404 });
  }
  const response = new NextResponse(buffer);
  response.headers.set("Content-Type", "image/webp");
  return response;
}

export async function POST(request: NextRequest) {
  const blob = await request.blob();
  const buffer = await blob.arrayBuffer();
  const bufferOutput = await sharp(buffer).webp({ quality: 80 }).toBuffer();
  return new NextResponse(bufferOutput, {
    headers: { "Content-Type": "image/webp" },
  });
}
