export type Post = {
  author: {
    id: string;
    name: string;
    avatarId: string | null;
  };
  images: {
    id: string;
    data: Buffer;
    height: number;
    width: number;
    ownerId: string;
  }[];
  _count: {
    likes: number;
  };
} & {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
};
