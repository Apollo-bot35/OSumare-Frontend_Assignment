import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => (
  <footer className="bg-gray-100 py-12 px-6 md:px-24 text-gray-700">
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
      

      <div className="pr-6">
        <h3 className="text-xl font-semibold flex items-center gap-2">📋 doList</h3>
        <p className="mt-4 text-sm leading-relaxed">
          Subscribe to our newsletter for the latest features and updates delivered to you.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="email"
            placeholder="Your email here"
            className="px-4 py-2 border rounded-md focus:outline-none w-full"
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition w-full sm:w-auto">
            Join
          </button>
        </div>

        <h6 className="text-xs mt-3 text-gray-500">
          By subscribing, you consent to our Privacy Policy and agree to receive updates.
        </h6>
      </div>

      <div className="pl-2">
        <h4 className="font-semibold mb-3">Useful Links</h4>
        <ul className="space-y-1 text-sm">
          <li>Home Page</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Blog Posts</li>
          <li>FAQs</li>
        </ul>
      </div>

     
      <div className="pl-2">
        <h4 className="font-semibold mb-3">Resources</h4>
        <ul className="space-y-1 text-sm">
          <li>Help Center</li>
          <li>User Guide</li>
          <li>Community Forum</li>
          <li>Feedback</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="pl-2">
        <h4 className="font-semibold mb-3">Connect With Us</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <FaFacebookF className="text-red-500" /> Facebook
          </li>
          <li className="flex items-center gap-2">
            <FaInstagram className="text-red-500" /> Instagram
          </li>
          <li className="flex items-center gap-2">
            <FaXTwitter className="text-red-500" /> X (Twitter)
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedinIn className="text-red-500" /> LinkedIn
          </li>
          <li className="flex items-center gap-2">
            <FaYoutube className="text-red-500" /> YouTube
          </li>
        </ul>
      </div>
    </div>

    
    <div className="flex flex-col sm:flex-row justify-between items-center mt-10 border-t border-gray-200 pt-5 text-sm text-gray-500 text-center sm:text-left">
     <p>© 2025 doList. All rights reserved.</p>

      
      <div className="flex flex-wrap justify-center sm:justify-end gap-4 mt-3 sm:mt-0">
        <p className="hover:text-gray-700 underline cursor-pointer">Privacy Policy</p>
        <p className="hover:text-gray-700 underline cursor-pointer">Terms of Service</p>
        <p className="hover:text-gray-700 underline cursor-pointer">Cookies Settings</p>
      </div>
    </div>
  </footer>
);

export default Footer;
