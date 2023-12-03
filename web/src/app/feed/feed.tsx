import { Suspense } from "react";
import LoadingFeed from "./loadingFeed";
import { FeedPosts } from "./FeedPosts";

export default async function Feed({ cursor }: { cursor?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <Suspense fallback={<LoadingFeed />}>
        <FeedPosts />
      </Suspense>
    </div>
  );
}
