"use client";

import { FC } from "react";
import Button from "./ui/button";
import Currency from "./currency";
import { IProduct } from "@/types";
import { ShoppingCart } from "lucide-react";

const Info: FC<IProduct> = ({
  category,
  color,
  id,
  images,
  isFeatured,
  name,
  price,
  size,
}) => {
  return (
    <article aria-label="product info">
      <h1 className="text-3xl font-bold capitalize text-gray-900">{name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{size.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div>{color.name}</div>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: color.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button title="Add" className="flex items-center gap-x-2 capitalize">
          add to cart
          <ShoppingCart />
        </Button>
      </div>
    </article>
  );
};

export default Info;
