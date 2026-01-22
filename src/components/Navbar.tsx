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
        {NAV_ITEMS.map(({ title, url }) => {
          const isActiveItem = isActive(url);
          return (
            <Link
              key={title}
              className={`relative font-medium leading-4 transition-colors duration-400 ${isActiveItem ? "text-active" : "text-white"} hover:text-active group`}
              href={url}
            >
              {title}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2  w-0 h-[1px] bg-active transition-all duration-400 group-hover:w-[50%]" />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
