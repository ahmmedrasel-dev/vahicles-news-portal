
import React, { useState } from 'react'
import { abril } from "@/app/fonts";
import { FaCaretDown, FaCaretUp, FaTimes } from "react-icons/fa";
import Link from 'next/link';
import { roboto } from "@/app/fonts";

const MobileNav = ({ isOpen, toggleMenu, categories }) => {
  const [showDropdown, setShowDropdown] = useState({});
  const toggleDropdown = (categoryId) => {
    setShowDropdown(prevState => ({
      ...prevState,
      [categoryId]: !prevState[categoryId] 
    }));
  };
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
     {
  categories.map((item, index) => (
    <li key={item.id} className={`ml-3 mb-3 ${index === categories.length - 1 ? '' : 'border-b-2 border[#ebedf1] pb-2'}`}>
      <Link
        href="#"
        className={`hover:text-heading_color  text-xl text-menu_item_color ${roboto.className} flex justify-between items-center`}
        onClick={() => toggleDropdown(item.id)}
      >
        <h2>{item.name}</h2>
        {item.subcategories.length > 0 && showDropdown[item.id] && <FaCaretUp /> }
        {item.subcategories.length > 0 && !showDropdown[item.id] && <FaCaretDown /> }
      </Link>

      {item.subcategories.length > 0 && showDropdown[item.id] && (
        <ul className="mt-2">
          {item.subcategories.map(subcategory => (
            <li key={subcategory.id} className="py-2 px-4 mb-3 border-b-2 border[#ebedf1] pb-2">
              <Link
                href={`/categories/${subcategory.name.toLowerCase().split(' ').join('-')}`}
                className="text-gray-800 hover:text-heading_color"
              >
                <h2>{subcategory.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))
}

    </ul>
   </nav>
  );
};

export default MobileNav;
