"use client";

import { FC } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useCartStore from "@/hooks/use-cart";
import Button from "@/components/ui/button";
import Currency from "@/components/currency";
import { useSearchParams } from "next/navigation";

const Summary: FC = () => {
  const searchParams = useSearchParams();
  const { items, removeAll } = useCartStore();

  const totalPrice = items.reduce((total, item) => {
    total = (Number(total) + Number(item.price)).toFixed(2);
    return total;
  }, "0");

  const onCheckout = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productIds: items.map((item) => item.id),
        }),
      },
    );
    const result = await response.json();

    window.location = result.url;
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  return (
    <article
      aria-label="total"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        title="Checkout"
        disabled={items.length === 0}
        onClick={onCheckout}
        className="mt-6 w-full"
      >
        Checkout
      </Button>
    </article>
  );
};

export default Summary;
