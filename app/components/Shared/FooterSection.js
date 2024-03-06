import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-slate-100 text-gray py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 2: Social Media */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <ul className="flex items-center space-x-4">
            <li><a href="#"><FaFacebookF /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p>Email: info@vhnews.com</p>
          <p>Phone: +1234567890</p>
        </div>

        {/* Column 4: Newsletter */}
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <form>
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-sm mb-2" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-sm">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p>&copy; 2024 VH News. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
