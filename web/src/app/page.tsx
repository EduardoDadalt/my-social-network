import { Metadata } from "next";
import Feed from "./feed/feed";

export const metadata: Metadata = {
  title: "Feed",
};

export default function Home() {
  return (
    <main>
      <div className="mx-8">
        <Feed />
      </div>
    </main>
  );
}
