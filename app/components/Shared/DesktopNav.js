import React from 'react'
import { mainMenu } from "./Menu";
import Link from 'next/link';
import { roboto } from "@/app/fonts";

const DesktopNav = () => {
  return (
   <ul
   className={`lg:flex lg:space-x-4 mt-4 lg:mt-0 hidden`}
 >
     {mainMenu.map((item, index) => (
       <li key={index}>
         <Link
           href={item.link}
           className={`hover:text-heading_color  text-xl text-menu_item_color ${roboto.className}`}
         >
           {item.name}
         </Link>
       </li>
     ))}
   </ul>
  )
}

export default DesktopNav