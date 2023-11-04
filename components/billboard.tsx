"use client";

import { FC } from "react";
import { IBillboard } from "@/types";

const Billboard: FC<{ data: IBillboard }> = ({ data }) => {
  return (
    <article
      aria-label="billboard"
      className="overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8"
    >
      <div
        className="relative aspect-square overflow-hidden rounded-xl bg-cover md:aspect-[2.4/1]"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
          <div className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl">
            <div className="rounded-md bg-slate-400 p-4 opacity-80">
              {data.label}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Billboard;
