import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { roboto } from "@/app/fonts";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const DesktopNav = ({ categories }) => {
  const [showDropdown, setShowDropdown] = useState({});
  const dropdownRef = useRef(null);

  const toggleDropdown = (categoryId) => {
    setShowDropdown(prevState => ({
      ...prevState,
      [categoryId]: !prevState[categoryId] 
    }));
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown({});
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul className={`lg:flex lg:space-x-4 mt-4 lg:mt-0 hidden`}>
      {categories.map(category => (
        <li key={category.id} className='ml-3'>
          <div className="relative" ref={dropdownRef}>
            <Link
              href="#"
              className={`hover:text-heading_color text-xl text-menu_item_color ${roboto.className} flex items-center gap-2`}
              onClick={() => toggleDropdown(category.id)}
            >
              <h2>{category.name}</h2>
              {category.subcategories.length > 0 && showDropdown[category.id] && <FaCaretUp /> }
              {category.subcategories.length > 0 && !showDropdown[category.id] && <FaCaretDown /> }
            </Link>
            {category.subcategories.length > 0 && showDropdown[category.id] && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {category.subcategories.map(subcategory => (
                  <li key={subcategory.id} className="py-2 px-4 hover:bg-gray-100">
                    <Link
                      href={`/categories/${subcategory.name.toLowerCase().split(' ').join('-')}`}
                      className="text-gray-800 hover:text-heading_color"
                    >
                      {subcategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
