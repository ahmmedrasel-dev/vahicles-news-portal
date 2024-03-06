import Image from 'next/image'
import React from 'react'
import dateFormat from "dateformat";
import { roboto } from '@/app/fonts'
import Link from 'next/link'
import { readingTime } from '@/app/utils/CalculateReadingTime';

const FeaturedPrimary = ({article}) => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mb-8'>
        <div className=''>
          <Link href="/"><Image src={article?.thumbnail} alt={article.title} width={400} height={400} /></Link>
        </div>
        
        <div className='mb-8'>
          <Link href={`articles/${article?.slug}`}><h3 className={`${roboto.className} text-xl text-heading_color`}>{article?.title}</h3></Link>
          <h4 className={`font-semibold text-base mt-6`}>{article?.author?.name}</h4>
          <p className={`text-base text-text_color text-sm`}>{dateFormat(article?.created_at, 'mmm d')} - {readingTime(article.content)} min read</p>
        </div>
    </div>
  )
}

export default FeaturedPrimary