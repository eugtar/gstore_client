"use client";

import { priceFormatter } from "@/lib/utils";
import { FC, useEffect, useState } from "react";

const Currency: FC<{ value: string }> = ({ value }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <div aria-label="product price" className="font-semibold">
      {priceFormatter.format(Number(value))}
    </div>
  );
};

export default Currency;
