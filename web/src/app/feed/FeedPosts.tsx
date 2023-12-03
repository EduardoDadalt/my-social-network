import PostController from "@/controller/PostController";
import FeedPost from "./feedPost";
import { FilterPost } from "@/interfaces/FilterPost";

export async function FeedPosts(filterPost: FilterPost) {
  const posts = await PostController.getPosts(filterPost);
  return (
    <>
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </>
  );
}
