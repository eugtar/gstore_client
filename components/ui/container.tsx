import { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="mx-auto max-w-7xl">{children}</div>
);

export default Container;
