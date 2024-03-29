import { roboto } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dateFormat from "dateformat";
import { readingTime } from '@/app/utils/CalculateReadingTime';
import { getSingleArticles } from '@/app/utils/getSingleArticles';


export function generateImageMetadata({params}) {
  return [
    {
      metadataBase: new URL(`${window.location.origin}`),
      contentType: 'image/png',
      size: { width: 48, height: 48 },
      id: params.slug,
    }
  ]
}

export async function generateMetadata({params}){
  const {data: article} = await getSingleArticles(params.slug)
  return {
    metadataBase: new URL(`${window.location.origin}`),
    title: article.title,
    description: article.content,
    openGraph:{
      images: article.thumbnail
    }
  }
}


const Articles = ({article}) => {
 

  return (
    <div>
      <Link href={`/articles/${article.slug}`}><Image src={article.thumbnail} alt={article.title} placeholder='blur' quality={80} width={500} height={500} className='w-full' /></Link>
        <Link href={`/articles/${article.slug}`}><h3 className={`${roboto.className} text-xl text-heading_color py-4`}>{article.title}</h3></Link>
        <div className={'text-text_color text-base'}>
          {article?.content.split(' ').slice(0, 20).join(' ')}
          {article?.content.split(' ').length > 20 && ' ...'}
        </div>
        <div className='flex justify-between mt-4'>
          <h4 className={`font-semibold text-base`}>{article.author.name}</h4>
          <p className={`text-base text-text_color text-sm`}>{dateFormat(article.created_at, 'mmm d')} - {readingTime(article.content)}m read time</p>
        </div>
    </div>
  )
}

export default Articles