import Link from 'next/link'
import React from 'react'
import { roboto,abril } from "@/app/fonts";
import { mainMenu } from "./Menu";
import { FaTimes } from "react-icons/fa";


const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
   <nav className='absolute bg-slate-100 w-full h-[100vh] p-4 right-0 z-10 top-0'>
      <div className='flex justify-between items-center'>
      <div className={`text-4xl text-heading_color ${abril.className}`}>
              VH News.
            </div>
            <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-500 hover:text-heading_color focus:text-heading_color focus:outline-none"
            >
               {
                  isOpen && <FaTimes size={28} />
               }
             
            </button>
          </div>
      </div>
    <ul
      className="lg:hidden mt-10"
    >
      {mainMenu.map((item, index) => (
        <li key={index} className='border-b p-2'>
          <Link
            href={item.link}
            className={`hover:text-heading_color text-xl text-menu_item_color ${roboto.className}`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
   </nav>
  );
};

export default MobileNav;
