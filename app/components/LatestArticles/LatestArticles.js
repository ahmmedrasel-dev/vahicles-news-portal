import React from 'react'
import Articles from './Articles'
import { getAllArticles } from '@/app/utils/getAllArticles'

const LatestArticles = async () => {
  const {data} = await getAllArticles();
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-8'>
      {
        data.map((item) => <Articles key={item.id} article={item} />)
      }
    </div>
  )
}

export default LatestArticles