import { PrismaClient } from "@prisma/client";

export class ImageController {
  static async getBinaryImage(id: string): Promise<Buffer | null> {
    const database = new PrismaClient();
    const image = await database.image.findUnique({
      where: { id: id },
      select: { data: true },
    });

    if (!image) {
      return null;
    }

    return image.data;
  }
}
