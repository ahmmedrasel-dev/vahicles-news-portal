
import { getAllArticles } from "@/app/utils/getAllArticles";
import Navbar from "./Navbar";
import { getCategories } from "@/app/utils/getCategories";

export default async function Header() {
  const {data: categories} = await getCategories();
  const {data: articles} = await getAllArticles();
  return (
    <>
      <Navbar categories={categories} articles={articles}/>
    </>
  );
}
