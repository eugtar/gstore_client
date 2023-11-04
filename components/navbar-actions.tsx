"use client";

import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import useCartStore from "@/hooks/use-cart";
import { FC, useEffect, useState } from "react";

const NavbarActions: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { items } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        title="Cart"
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
