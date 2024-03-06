import React from 'react'
import PArticles from './PArticles'
import { getPopularArticles } from '@/app/utils/getPopularArticles'

const PopularArticles = async () => {
  const {data: popular} = await getPopularArticles();
  
  return (
    <div className='mt-8'>
      {
        popular.map((item) => <PArticles key={item.id} article={item} />)
      }
    </div>
  )
}

export default PopularArticles