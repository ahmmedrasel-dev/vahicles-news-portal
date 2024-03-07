
import Navbar from "./Navbar";
import { getCategories } from "@/app/utils/getCategories";

export default async function Header() {
  const {data: categories} = await getCategories();
  return (
    <>
      <Navbar categories={categories} />
    </>
  );
}
