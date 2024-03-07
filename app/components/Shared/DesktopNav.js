import Link from 'next/link'
import React from 'react'
import { roboto } from "@/app/fonts";
const DesktopNav = ({categories}) => {
  return (
   <ul
   className={`lg:flex lg:space-x-4 mt-4 lg:mt-0 hidden`}
 >
     {
          categories.map(item => <li key={item.id} className='ml-3'>
          <Link
            href={`/categories/article?category=${item.name.toLowerCase()}`}
            className={`hover:text-heading_color text-xl text-menu_item_color ${roboto.className}`}
          >
              {item.name}
            </Link>
          </li>)
        }
   </ul>
  )
}

export default DesktopNav