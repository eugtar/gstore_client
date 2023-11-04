"use client";

import { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ICategory } from "@/types";
import { usePathname } from "next/navigation";

const MainNav: FC<{ data: ICategory[] }> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map(({ href, label, active }) => (
        <Link
          key={href}
          href={href}
          title={label}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            active ? "text-black" : "text-neutral-500",
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
