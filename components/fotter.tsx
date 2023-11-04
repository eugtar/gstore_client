import { FC } from "react";

const Footer: FC = () => {
  const date = new Date().getFullYear();
  const storeName = "Store Name";
  return (
    <div className="mx-auto py-10">
      <p className="text-center text-xs text-black">
        {storeName}, Inc. All rights reserved.<sup>&copy;</sup> {date}
      </p>
    </div>
  );
};

export default Footer;
