import React from 'react'
import { roboto } from "@/app/fonts";
import Link from 'next/link';

const NavLink = ({categories}) => {
  return (
    <ul>
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
    </ul>
  )
}

export default NavLink