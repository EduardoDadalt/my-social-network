import PostController from "@/controller/PostController";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const cursor = request.nextUrl.searchParams.get("cursor");
  const posts = await PostController.getPosts(cursor);
  return NextResponse.json(posts);
}
