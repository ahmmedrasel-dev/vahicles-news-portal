"use client";
import { abril } from "@/app/fonts";
import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { FaAlignJustify } from "react-icons/fa";
import Link from "next/link";
import Headroom from "react-headroom";
import Articles from "../LatestArticles/Articles";

export default function Navbar({categories, articles}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSetSearchResult] = useState([]);
  const inputRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event) => {
    
    setKeyword(event.target.value);
    const reuslt = articles.filter((article) =>
      article.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setSetSearchResult([...reuslt])
  };
  const handleFocus = () => {
    setIsSearchOpen(true);
  };

  const handleBlur = () => {
    
    setTimeout(()=>{
      setIsSearchOpen(false);
      setSetSearchResult([])
    }, 100)
  };

  return (
    <Headroom  pinOnEnter={false}
    unpinDelay={300}
    tolerance={{ up: 10, down: 20 }}
    className={`transition-all duration-300`}
    style={{ zIndex: 2 }}>
      <div className="xl:container mx-auto p-4 bg-white relative">
          <nav className={`flex items-center justify-between`}>
              <Link href={'/'}>
                <div className={`text-4xl text-heading_color ${abril.className}`}>
                  VH News.
                </div>
              </Link>
              <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="block text-gray-500 hover:text-heading_color focus:text-heading_color focus:outline-none"
              >
                {
                  !isOpen && <FaAlignJustify size={28} />
                }
              </button>
            </div>

            {
              isOpen ? <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} categories={categories} /> : <DesktopNav categories={categories} />
            }
            
          </nav>

          <div className={`relative mt-4 ${
                isOpen ? "hidden" : "block"
              }`}>
            <input
              type="text"
              placeholder="Search Here..."
              className="w-full border border-[#757575] px-6 py-3 rounded-full focus:outline-none focus:border-blue-500"
              onChange={handleSearchChange}
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <div className="absolute right-6 top-3">
              <FaSearch size={30} />
            </div>
          </div>

          {isSearchOpen &&  (
            <div className="search-results-container p-4 rounded-md">
              {keyword.length > 0 && <h2 className="text-2xl py-3">Showing {searchResult.length} results for "{keyword}"</h2>}
              <div className="grid grid-cols-4 gap-4">
              {
                searchResult.map( article => <Articles article={article} />)
              }
              </div>
            </div>
          )}
        </div>
    </Headroom>
  );
}
