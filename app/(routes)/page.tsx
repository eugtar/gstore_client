import { FC } from "react";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage: FC = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("87c5ffe7-9638-446e-b6ef-e48f9da9faec");

  return (
    <Container>
      <section aria-label="home page">
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title={"Featured Products"} items={products} />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HomePage;
