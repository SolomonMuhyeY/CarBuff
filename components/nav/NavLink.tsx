"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }: { href: string; children: string }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${
        path.startsWith(href) ? "border-2  text-red-400" : undefined
      } hover:text-red-500 px-3 py-1 md:px-3`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
