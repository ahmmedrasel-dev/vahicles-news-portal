
import RelatedArticles from '@/app/components/RelatedArticles/RelatedArticles'
import ArticlesHeading from '@/app/components/Shared/ArticlesHeading'
import { getSingleArticles } from '@/app/utils/getSingleArticles'
import dateFormat from "dateformat";
import { readingTime } from '@/app/utils/CalculateReadingTime'
import Link from 'next/link'
import SocialShare from '@/app/utils/SocialShare'
import { getAllArticles } from '@/app/utils/getAllArticles';
import NewsImageSlider from '@/app/components/NewsImage/NewsImageSlider';

export function generateImageMetadata({params}) {
  return [
    {
      contentType: 'image/png',
      size: { width: 48, height: 48 },
      id: params.slug,
    }
  ]
}

export async function generateMetadata({params}){
  const {data: article} = await getSingleArticles(params.slug)
  return {
    title: article.title,
    description: article.content,
    openGraph:{
      images: article.thumbnail
    }
  }
}



const News = async ({params}) => {
  const {data: article} = await getSingleArticles(params.slug)
  return (
    <main className='xl:container mx-auto'>
      <div className='w-full md:h-[500px] h-[175px] overflow-hidden'>
        <NewsImageSlider newsimages={article.newsimages} />
      </div>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 my-8 md:p-0 p-4'>
        <div className='col-span-2'>
          <div>
            <h1 className='text-3xl'>{article.title}</h1>

            <div className='flex justify-between py-6'>
              <h4 className='text-xl font-semibold'>{article.author.name}</h4>
              <div><p className='text-sm'>{dateFormat(article.created_at, 'mmm d')} - {readingTime(article.content)}m read time</p>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: article.content}}></div>
          <div className='flex gap-4 my-8 flex-wrap'>
            {
              article?.tags.map(item => (
                <Link href={'/'} key={item.tags}><button className='px-6 py-2 font-bold bg-gray-100 text-gray-800 rounded-sm hover:bg-gray-200'>{item.tags}</button></Link>
              ))
            }
          </div>

          <div>
            <SocialShare title={article.title} />
          </div>
        </div>
        <div className="popular-articles-container sticky top-40">
          <ArticlesHeading title="Related Articles" />
          <RelatedArticles article={article} />
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams(){
  const {data: articles} = await getAllArticles();
  return articles.map(item => ({
    slug: item.slug
  }))
}

export default News