import React from 'react'
import { roboto } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import dateFormat from "dateformat";
import { readingTime } from '@/app/utils/CalculateReadingTime';

const RArticles = ({article}) => {
  return (
   <div className='grid md:grid-cols-4 grid-cols-1 md:gap-4 mb-4'>
      <div className='col-1'>
      <Image src={article.thumbnail} placeholder='blur' quality={80} width={500} height={500} className='w-full' alt={article.title} />
      </div>
      
      <div className='col-span-3'>
      <Link href={`/articles/${article.slug}`}><h3 className={`${roboto.className} text-xl text-heading_color`}>{article.title}</h3></Link>

      <h4 className={`font-semibold text-base mt-4`}>{article.author.name}</h4>
      <p className={`text-base text-text_color text-sm`}>{dateFormat(article.created_at, 'mmm d')} - {readingTime(article.content)}m read time</p>
      </div>
   </div>
  )
}

export default RArticles