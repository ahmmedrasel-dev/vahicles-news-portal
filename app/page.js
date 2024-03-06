import ArticleSections from "./components/ArticleSection/ArticleSections";
import { FeaturedOnArticles } from "./components/FeaturedArticles/FeaturedOnArticles";
import HeroArticles from "./components/HeroArticles/HeroArticles";
import { getAllArticles } from "./utils/getAllArticles";

export default async function Home() {
  const {data} = await getAllArticles();
  const leadNews = data.filter(item => item.lead_news !== null)
  return (
    <main className="xl:container mx-auto">
      <HeroArticles leadNews={leadNews} />
      <FeaturedOnArticles />
      <ArticleSections />
    </main>
  );
}


export const metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
}

