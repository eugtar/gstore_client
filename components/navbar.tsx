import { FC } from "react";
import Link from "next/link";
import MainNav from "./main-nav";
import { Leaf } from "lucide-react";
import Container from "./ui/container";
import NavbarActions from "./navbar-actions";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const Navbar: FC = async () => {
  const categories = await getCategories();

  console.log(categories);

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href={"/"} className="ml-4 gap-x-2 lg:ml-0" title="Home">
            <p className="text-xl font-bold">
              <Leaf />G<span className="text-slate-500">|</span>STORE
            </p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
