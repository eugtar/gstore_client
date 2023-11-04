"use client";

import Summary from "./components/summary";
import useCartStore from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import { FC, useEffect, useState } from "react";
import Container from "@/components/ui/container";

const CartPage: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { items } = useCartStore();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <section aria-label="cart" className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {items.length === 0 ? (
                <p className="text-neutral-500">No items added to cart</p>
              ) : (
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              )}
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CartPage;
