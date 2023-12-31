"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { IImage } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

const GalleryTab: FC<IImage> = ({ id, url }) => {
  return (
    <Tab
      className={
        "relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
      }
    >
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
            <Image
              fill
              src={url}
              alt="product_img"
              className="object-cover object-center"
            />
            <span
              className={cn(
                "absolute inset-0 rounded-md ring-2 ring-offset-2",
                selected ? "ring-black" : "ring-transparent",
              )}
            />
          </span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
