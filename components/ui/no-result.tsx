import { FC } from "react";

const NoResult: FC = () => {
  return (
    <article
      aria-label="no result found"
      className="flex h-full w-full items-center justify-center text-neutral-500"
    >
      No results found.
    </article>
  );
};

export default NoResult;
