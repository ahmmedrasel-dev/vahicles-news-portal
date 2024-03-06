import { poppins, roboto } from '@/app/fonts'
import React from 'react'

const ArticlesHeading = ({title}) => {
  return (
    <div className=''>
      <h3 className={`mb-3 text-2xl relative inline-block  after:w-full after:h-1 after:content-[""] after:absolute after:-bottom-3 after:left-0 after:bg-slate-500 ${poppins.className}`}>{title}</h3>
      <div className='border-b-2 border-gray-500'></div>
    </div>
  )
}

export default ArticlesHeading