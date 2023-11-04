import { IProduct } from "@/types";

interface IQuery {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: IQuery): Promise<IProduct[]> => {
  const queryString = new URLSearchParams();
  for (let [key, value] of Object.entries(query)) {
    queryString.append(key, value);
  }
  queryString.toString();
  const url = queryString ? `${URL}/?${queryString}` : URL;
  const response = await fetch(url);

  return response.json();
};

export default getProducts;
