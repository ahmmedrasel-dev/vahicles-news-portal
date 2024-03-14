import React from 'react'
import RArticles from '../Sidebar/RArticles'
import { getRelatedCateogoryArticles } from '@/app/utils/getRelatedCategoryArticles'

const RelatedArticles = async ({article}) => {

  const randomIndex = Math.floor(Math.random() * article.subcategories.length);
  const category = article.subcategories[randomIndex].name;
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