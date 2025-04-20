import React from "react";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full bg-blue-400 h-[40px] flex justify-end items-center px-[300px] space-x-5">
      {/* Facebook */}
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook className="text-white w-4 h-4 hover:text-gray-200 transition duration-200" />
      </a>

      {/* YouTube */}
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <Youtube className="text-white w-4 h-4 hover:text-gray-200 transition duration-200" />
      </a>

      {/* Twitter */}
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <Twitter className="text-white w-4 h-4 hover:text-gray-200 transition duration-200" />
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="text-white w-4 h-4 hover:text-gray-200 transition duration-200" />
      </a>
    </div>
  );
};

export default Header;
