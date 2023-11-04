import { FC } from "react";
import Info from "@/components/info";
import Gallery from "@/components/gallery";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const ProductPage: FC<{ params: { productId: string } }> = async ({
  params,
}) => {
  const product = await getProduct(params.productId);
  const products = await getProducts({
    categoryId: product.category.id,
  });

  const similarProducts = products.filter(({ id }) => id !== product.id);

  return (
    <section aria-label="product page" className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info {...product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Products" items={similarProducts} />
        </div>
      </Container>
    </section>
  );
};

export default ProductPage;
