import PostController from "@/controller/PostController";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json(
      {
        message: "No post id provided",
      },
      {
        status: 400,
      }
    );
  }
  const post = await PostController.getPost(id);

  return NextResponse.json(post);
}
