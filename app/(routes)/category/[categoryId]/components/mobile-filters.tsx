"use client";

import Filter from "./filter";
import { FC, useState } from "react";
import { Plus, X } from "lucide-react";
import { IColor, ISize } from "@/types";
import { Dialog } from "@headlessui/react";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";

const MobileFilters: FC<{ sizes: ISize[]; colors: IColor[] }> = ({
  sizes,
  colors,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        title="Filters"
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden"
      >
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className={"relative z-40 lg:hidden"}
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25">
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel
              className={
                "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
              }
            >
              <div className="flex items-center justify-end px-4">
                <IconButton onClick={onClose} title="Close">
                  <X size={15} />
                </IconButton>
              </div>
              <div className="p-4">
                <Filter data={sizes} name="Sizes" valueKey="sizeId" />
                <Filter data={colors} name="Colors" valueKey="colorId" />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
