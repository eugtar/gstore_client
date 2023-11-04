import { ISize } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (categoryName: string): Promise<ISize[]> => {
  const response = await fetch(URL);
  const result = await response.json();
  const sizes = result
    .filter((size: ISize) => size.name === categoryName)
    .map((size: ISize) => ({
      id: size.id,
      name: size.value,
      value: size.name,
    }));

  return sizes;
};

export default getSizes;
