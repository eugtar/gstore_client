import { IProduct } from "@/types";

interface IQuery {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<IProduct> => {
  const url = `${URL}/${id}`;
  const response = await fetch(url);

  return response.json();
};

export default getProduct;
