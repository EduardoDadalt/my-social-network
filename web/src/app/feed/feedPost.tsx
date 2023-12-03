import { Post } from "@/interfaces/Post";
import Image from "next/image";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NoAvatar from "../../../public/icons/user.svg";

export default async function FeedPost({ post }: { post?: Post }) {
  const feedPost = (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#ccc">
      <div className="rounded-2xl shadow flex flex-col overflow-clip">
        <div className="rounded-b-2xl p-4 z-0 bg-gray-50">
          <div className="flex flex-row gap-1">
            {!!post ? (
              <Image
                src={
                  !!post.author.avatarId
                    ? `/image/${post.author.avatarId}`
                    : NoAvatar
                }
                alt="Avatar of Author"
                className="rounded-full w-5 h-5 border border-black"
                height={20}
                width={20}
              />
            ) : (
              <Skeleton circle={true} height={20} width={20} />
            )}
            <h3>{post?.author.name || <Skeleton />}</h3>
          </div>
          <h2 className="text-lg font-semibold">
            {post?.title || <Skeleton width={"50%"} />}
          </h2>
          <p>{post?.content || <Skeleton count={3} />}</p>
          <time dateTime={post?.updatedAt.toISOString()} />
        </div>
        <div className="bg-gray-300 flex flex-row -mt-4 pt-4 px-2">
          {post?._count.likes ?? <Skeleton width={20} />} Likes |{" "}
          {post?._count.comments ?? <Skeleton width={20} />} Comments
        </div>
      </div>
    </SkeletonTheme>
  );
  if (!!post) return <Link href={`/post/${post.id}`}>{feedPost}</Link>;
  return feedPost;
}
