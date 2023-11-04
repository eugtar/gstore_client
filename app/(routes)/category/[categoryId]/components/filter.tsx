"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { IColor, ISize } from "@/types";
import Button from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter: FC<{
  valueKey: string;
  name: string;
  data: (ISize | IColor)[];
}> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = Object.fromEntries(
      new URLSearchParams(searchParams.toString()),
    );
    const query = {
      ...current,
      [valueKey]: id,
    };
    if (current[valueKey] === id) {
      delete query[valueKey];
    }
    const url = `${path}?${new URLSearchParams(query)}`;
    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div className="flex items-center" key={filter.id}>
            <Button
              title={filter.name}
              onClick={() => onClick(filter.id)}
              className={cn(
                "rounded-md border border-gray-300 bg-white p-2 text-sm text-gray-800",
                selectedValue === filter.id && "bg-black text-white",
              )}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
