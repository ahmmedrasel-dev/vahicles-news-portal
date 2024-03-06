import React from 'react'
import Menu, { mainMenu } from "./Menu";
import Link from 'next/link';
import { roboto } from "@/app/fonts";

const DesktopNav = () => {
  return (
   <ul
   className={`lg:flex lg:space-x-4 mt-4 lg:mt-0 hidden`}
 >
     <Menu />
   </ul>
  )
}

export default DesktopNav