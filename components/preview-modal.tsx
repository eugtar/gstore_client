"use client";

import Info from "./info";
import { FC } from "react";
import Modal from "./ui/modal";
import Gallery from "./gallery";
import usePreviewModal from "@/hooks/use-preview-modal";

const PreviewModal: FC = () => {
  const { isOpen, onClose, onOpen, data: product } = usePreviewModal();

  if (!product) return null;

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info {...product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
