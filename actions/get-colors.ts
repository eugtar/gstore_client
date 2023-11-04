import { IColor } from "@/types";
import getProducts from "./get-products";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (categoryId: string): Promise<IColor[]> => {
  const response = await fetch(URL);
  const result: IColor[] = await response.json();
  const products = (await getProducts({ categoryId: categoryId })).map(
    (product) => product.color.name
  );
  const colors = result.filter((color) => products.includes(color.name));

  return colors;
};

export default getColors;
