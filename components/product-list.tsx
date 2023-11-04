"use client";

import { FC } from "react";
import { IProduct } from "@/types";
import NoResult from "./ui/no-result";
import ProductCard from "./ui/product-card";

const ProductList: FC<{ title: string; items: IProduct[] }> = ({
  title,
  items,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {items.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
