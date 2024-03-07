import Articles from '@/app/components/LatestArticles/Articles';
import ArticlesHeading from '@/app/components/Shared/ArticlesHeading';
import { getCateogoryArticles } from '@/app/utils/getCategoryArticles'

const CategoryArticles = async ({ searchParams}) => {
   const {data} = await getCateogoryArticles(searchParams.category);
   const title = `Latest ${searchParams.category} Articles Published`
  return (
   <main className='xl:container mx-auto'>
      <ArticlesHeading title={title} />
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 my-8'>
      {
        data?.map((item) => <Articles key={item.id} article={item} />)
      }
    </div>
   </main>
  )
}

export default CategoryArticles