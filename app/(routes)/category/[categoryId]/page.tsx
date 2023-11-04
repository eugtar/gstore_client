import { FC } from "react";
import Filter from "./components/filter";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import NoResult from "@/components/ui/no-result";
import getCategory from "@/actions/get-category";
import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";

interface ICategoryPage {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export const revalidate = 0;

const CategoryPage: FC<ICategoryPage> = async ({ params, searchParams }) => {
  const products = await getProducts({
    ...searchParams,
    categoryId: params.categoryId,
  });
  const category = await getCategory(params.categoryId);
  const colors = await getColors(category.id);
  const sizes = await getSizes(category.name);

  return (
    <section aria-label="category page">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey={"sizeId"} name={"Size"} data={sizes} />
              <Filter valueKey={"colorId"} name={"Color"} data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {products.map((item) => (
                  <ProductCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CategoryPage;
