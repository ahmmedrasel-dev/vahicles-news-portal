import { getCategories } from '@/app/utils/getCategories'
import Link from 'next/link';
import React from 'react'
import { roboto } from "@/app/fonts";

const Menu = async () => {
  const {data: categories} = await getCategories();

  return (
      <>
        {
          categories.map(item => <li key={item.id} className='ml-3'>
          <Link
            href={`/categories/news?category=${item.name.toLowerCase()}`}
            className={`hover:text-heading_color text-xl text-menu_item_color ${roboto.className}`}
          >
              {item.name}
            </Link>
          </li>)
        }
      </>
  )
}

export default Menu