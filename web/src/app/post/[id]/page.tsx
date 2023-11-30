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
    <main className="flex items-center justify-center">
      <div className="border shadow-xl rounded-xl min-w-[50%] p-2">
        <div className="flex flex-row">
          <Image
            src={`/image/${post.author.avatarId}`}
            alt={`Avatar of ${post.author.name}`}
            height={10}
            width={10}
          />
          <div className="text-sm"> {post.author.name}</div>
        </div>
        <h1 className="text-lg font-bold">{post.title}</h1>
        <p>{post.content}</p>
        <div></div>
      </div>
    </main>
  );
}
export async function generateStaticParams() {
  const ids = await PostController.getPostsIds();

  return ids.map((id) => ({ id }));
}
