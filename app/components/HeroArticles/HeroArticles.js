import { getAllArticles } from "@/app/utils/getAllArticles";
import Slider from "./Slider";


export default async function HeroArticles() {
  const {data} = await getAllArticles();
  const leadNews = data.filter(item => item.lead_news !== null);
  return (
    <div className='mt-4'>
      <Slider leadNews={leadNews} />
    </div>
  )
}
