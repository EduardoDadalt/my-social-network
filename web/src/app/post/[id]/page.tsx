import PostController from "@/controller/PostController";
import Image from "next/image";
export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await PostController.getPost(id);
  if (post === null) return <div>404</div>;
  return (
    <main className="flex bg-gray-950 min-h-screen flex items-start p-4 pt-12 md:px-12 lg:px-24">
      <div className="border shadow-xl rounded-xl w-full p-2 bg-slate-100 max-w-2xl">
        <div className="flex flex-row space-x-2">
          <Image
            src={`/image/${post.author.avatarId}`}
            alt={`Avatar of ${post.author.name}`}
            height={20}
            width={20}
            className="rounded-full aspect-square object-cover"
          />
          <div className="text-sm">{post.author.name}</div>
        </div>
        <h1 className="text-lg font-bold">{post.title}</h1>
        <div className="space-y-1">
          {post.content.split("\\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div>{post._count.likes} likes</div>
      </div>
    </main>
  );
}
export async function generateStaticParams() {
  const ids = await PostController.getPostsIds();

  return ids.map((id) => ({ id }));
}
