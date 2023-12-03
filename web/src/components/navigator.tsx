"use client";

import Image from "next/image";
import { useState } from "react";
import { NavItem } from "./navItem";

export default function Navigator() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="flex-col sticky top-0 bg-primary-950 hidden md:flex">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex flex-row gap-4"
      >
        <Image src="/icons/arrow.svg" alt="Arrow Icon" height={30} width={30} />
      </button>
      <NavItem
        href="/"
        iconSrc="/icons/home.svg"
        text="Home"
        expanded={isExpanded}
      />
      <NavItem
        href="/profile"
        iconSrc="/icons/user.svg"
        text="Profile"
        expanded={isExpanded}
      />
    </nav>
  );
}
