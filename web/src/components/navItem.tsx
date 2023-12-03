import Image from "next/image";
import Link from "next/link";

export function NavItem({
  href,
  iconSrc,
  text,
  expanded,
}: {
  href: string;
  iconSrc: string;
  text: string;
  expanded: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex flex-row items-center rounded-full hover:bg-primary-800 p-2 mx-2 gap-2 transition-all"
    >
      <Image src={iconSrc} alt={`Icon from ${text}`} height={45} width={45} />
      {expanded && <span className="text-lg font-bold">{text}</span>}
    </Link>
  );
}
