import { roboto } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dateFormat from "dateformat";
import { readingTime } from '@/app/utils/CalculateReadingTime';

const FeatureSecondary = ({article}) => {
  return (
    <div className='grid grid-cols-4 gap-4 mb-4'>
        <div className='col-1'>
          <Link href={`articles/${article?.slug}`}><Image src={article?.thumbnail} className='w-full' alt={article.title} width={400} height={400} /></Link>
        </div>
        
        <div className='col-span-3'>
          <Link href={`articles/${article?.slug}`}><h3 className={`${roboto.className} text-xl text-heading_color`}>{article?.title}</h3></Link>
          <h4 className={`font-semibold text-base mt-6`}>{article?.author?.name}</h4>
          <p className={`text-base text-text_color text-sm`}>{dateFormat(article?.created_at, 'mmm d')} - {readingTime(article.content)} min read</p>
        </div>
    </div>
  )
}

export default FeatureSecondary