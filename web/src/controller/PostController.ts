import { PrismaClient } from "@prisma/client";
import { type Post } from "../interfaces/Post";

export default class PostController {
  static async getPost(id: string): Promise<Post | null> {
    const database = new PrismaClient();
    const post = await database.post.findUnique({
      where: { id: id },
      include: {
        author: { select: { id: true, name: true, avatarId: true } },
        images: true,
        _count: { select: { likes: true } },
      },
    });

    return post;
  }

  static async getPosts(cursor?: string | null): Promise<Post[]> {
    const database = new PrismaClient();
    const posts: Post[] = await database.post.findMany({
      take: 10,
      skip: cursor ? 1 : undefined,
      orderBy: { createdAt: "desc" },
      cursor: cursor ? { id: cursor } : undefined,
      include: {
        author: { select: { id: true, name: true, avatarId: true } },
        images: true,
        _count: { select: { likes: true } },
      },
      where: { published: true },
    });

    return posts;
  }

  static async getPostsIds(): Promise<string[]> {
    const database = new PrismaClient();
    const posts = await database.post.findMany({
      select: { id: true },
      where: { published: true },
    });

    return posts.map((post) => post.id);
  }
}
