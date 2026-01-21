"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Roadmap", url: "/roadmap" },
  { title: "Pricing", url: "/pricing" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <div className="flex justify-between items-center px-15">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={76} height={43} />
        <span className="text-white text-[32px] font-semibold leading-4">
          VaultX
        </span>
      </div>
      <nav className="flex gap-5">
        {NAV_ITEMS.map(({ title, url }) => (
          <Link
            key={title}
            className="text-white font-medium leading-4"
            href={url}
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
};
