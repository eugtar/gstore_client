import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC } from "react";

interface IIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton: FC<IIconButton> = ({
  title,
  onClick,
  children,
  className,
  type = "button",
  ...props
}) => (
  <button
    className={cn(
      "flex scale-110 items-center justify-center rounded-full border bg-white p-2 shadow-md transition",
      className,
    )}
    onClick={onClick}
    title={title}
    {...props}
  >
    {children}
  </button>
);

export default IconButton;
