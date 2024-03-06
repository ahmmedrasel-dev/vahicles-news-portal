"use client";
import { abril } from "@/app/fonts";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useSticky from "@/app/hooks/useSticky";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { FaAlignJustify } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const { sticky } = useSticky();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${sticky ? "header-sticky" : ""}`}>
      <div className="xl:container mx-auto p-4 bg-white">
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
            isOpen ? <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} /> : <DesktopNav />
          }
          
        </nav>

        <div className={`relative mt-4 ${
              isOpen ? "hidden" : "block"
            }`}>
          <input
            type="search"
            placeholder="Search Here..."
            className="w-full border border-[#757575] px-6 py-3 rounded-full focus:outline-none focus:border-blue-500"
          />
          <div className="absolute right-6 top-3">
            <FaSearch size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
