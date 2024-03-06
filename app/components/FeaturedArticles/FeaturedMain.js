import Image from 'next/image'
import React from 'react'
import { roboto } from '@/app/fonts'
import Link from 'next/link'
import { getMainArticles } from '@/app/utils/getMainFeatureArticles'
import dateFormat from "dateformat";
import { readingTime } from '@/app/utils/CalculateReadingTime'
const FeaturedMain = async () => {
  const {data: article} = await getMainArticles();
  let content;
  if(article!= null){
    content = <>
        <Link href={`articles/${article?.slug}`}><Image src={article?.thumbnail} alt={article?.title} width={800} height={800} className='w-full' /></Link>
        <Link href={`articles/${article?.slug}`}><h3 className={`${roboto.className} text-xl text-heading_color py-4`}>{article?.title}</h3></Link>
        <div className={'text-text_color text-base'}>
          {article?.content.split(' ').slice(0, 20).join(' ')}
          {article?.content.split(' ').length > 20 && ' ...'}
        </div>
        <div className='flex justify-between mt-4'>
          <h4 className={`font-semibold text-base`}>{article?.author?.name}</h4>
          <p className={`text-base text-text_color text-sm`}>{dateFormat(article?.created_at, 'mmm d')} - {readingTime(article?.content)}m read time</p>
        </div>
    </>
  }else{
    content = <div className='flex items-center h-full justify-center border text-2xl text-red-500'><h2>Article Not Found!</h2></div>
  }

  return (
    <>
        {content}
    </>
  )
}

export default FeaturedMain