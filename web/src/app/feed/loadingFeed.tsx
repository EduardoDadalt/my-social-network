import FeedPost from "./feedPost";

export default function LoadingFeed() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <FeedPost key={i} />
      ))}
    </>
  );
}
