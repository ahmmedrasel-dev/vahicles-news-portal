import React from 'react'
import thumbnail from '@/app/assets/thumbnail/main_thumb1.png'
import RArticles from '../Sidebar/RArticles'
import { getRelatedCateogoryArticles } from '@/app/utils/getRelatedCategoryArticles'

const RelatedArticles = async ({article}) => {
  const randomIndex = Math.floor(Math.random() * article.categories.length);
  const category = article.categories[randomIndex].name;
  const {data: relatedArticles} = await getRelatedCateogoryArticles(category, article.id)
  return (
    <div className='mt-8'>
    {
      relatedArticles.map((item) => <RArticles key={item.id} article={item} />)
    }
    </div>
  )
}

export default RelatedArticles