import { Profile } from "@/interfaces/Profile";
import { PrismaClient } from "@prisma/client";

export default class UserController {
  static async getProfileByUsername(username: string): Promise<Profile | null> {
    const database = new PrismaClient();
    const profile = await database.user.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        name: true,
        avatarId: true,
        bio: true,
      },
    });

    return profile;
  }

  static async getNames(): Promise<string[]> {
    const database = new PrismaClient();
    const names = await database.user.findMany({
      select: { name: true },
    });

    return names.map(({ name }) => name);
  }
}
