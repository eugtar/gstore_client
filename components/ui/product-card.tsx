"use client";

import Image from "next/image";
import { IProduct } from "@/types";
import Currency from "../currency";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import useCartStore from "@/hooks/use-cart";
import { FC, MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import usePreviewModal from "@/hooks/use-preview-modal";

const ProductCard: FC<IProduct> = ({
  category,
  id,
  images,
  name,
  price,
  color,
  isFeatured,
  size,
}) => {
  const router = useRouter();
  const { onOpen } = usePreviewModal();
  const { addItem } = useCartStore();

  const handleClick = () => {
    router.push(`/product/${id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onOpen({ category, id, images, name, price, color, isFeatured, size });
  };

  const onProductAdd: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    addItem({ category, id, images, name, price, color, isFeatured, size });
  };

  return (
    <article
      onClick={handleClick}
      aria-label="product card"
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          alt="Image"
          src={images[0].url}
          fill
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton title="Preview" onClick={onPreview} className="">
              <Expand size={20} className={"text-gray-600"} />
            </IconButton>
            <IconButton title="Add" onClick={onProductAdd} className="">
              <ShoppingCart size={20} className={"text-gray-600"} />
            </IconButton>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={price} />
      </div>
    </article>
  );
};

export default ProductCard;
