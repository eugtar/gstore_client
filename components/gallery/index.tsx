"use client";

import { FC } from "react";
import Image from "next/image";
import { IImage } from "@/types";
import GalleryTab from "./gallery-tab";
import { Tab } from "@headlessui/react";

const Gallery: FC<{ images: IImage[] }> = ({ images }) => {
  return (
    <article aria-label="gallery">
      <Tab.Group as={"div"} className={"flex flex-col-reverse"}>
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <Tab.List className={"grid grid-cols-4 gap-6"}>
            {images.map((image) => (
              <GalleryTab key={image.id} {...image} />
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className={"aspect-square w-full"}>
          {images.map(({ id, url }) => (
            <Tab.Panel key={id}>
              <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
                <Image
                  fill
                  src={url}
                  alt="product_img"
                  className="object-cover object-center"
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </article>
  );
};

export default Gallery;
