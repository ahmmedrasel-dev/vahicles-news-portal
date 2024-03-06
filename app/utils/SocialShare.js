'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const SocialShare = ({title}) => {
   const pathname = usePathname()
   let url = `${window.location.origin}${pathname}`

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return (
    <div className='flex gap-4'>
      <a
         className='flex gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 items-center px-5 py-5 rounded-md'
        href={`https://www.facebook.com/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
         <FaFacebook size={32} />
        Share on Facebook
      </a>
      <a
         className='flex gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 items-center px-5 py-5 rounded-md'
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
         <FaSquareXTwitter size={32} />
        Share on Twitter
      </a>
      <a
         className='flex gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 items-center px-4 py-5 rounded-md'
        href={`https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
         <FaLinkedin size={32} />
        Share on LinkedIn
      </a>
    </div>
  );
};

export default SocialShare;