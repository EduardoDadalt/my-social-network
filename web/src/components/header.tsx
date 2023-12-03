import { Playfair_Display } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

const font = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default async function Header() {
  return (
    <header className="flex m-4 h-16 items-center justify-center lg:justify-normal">
      <Link
        href="/"
        className={clsx(font.className, "text-3xl font-bold  text-primary-50")}
      >
        My Social Network
      </Link>
    </header>
  );
}
