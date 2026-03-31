import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="pt-30 bg-[#101727]  pb-7.5">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-20">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-4xl font-bold text-white mb-7">DigiTools</h2>
            <p className="text-[16px] text-gray-300 leading-6">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex flex-row lg:gap-5 gap-15 lg:justify-evenly justify-start">
            <div>
              <h2 className="text-xl font-medium text-white">Product</h2>
              <ul className="space-y-4 text-gray-300 mt-6">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-medium text-white">Company</h2>
              <ul className="space-y-4 text-gray-300 mt-6">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-15 lg:gap-5 justify-start lg:justify-evenly mt-6 lg:mt-0 ">
            <div>
              <h2 className="text-xl font-medium text-white">Resources</h2>
              <ul className="space-y-4 text-gray-200 mt-6">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-medium text-white">Social Links</h2>
              <div className="flex gap-3 mt-6">
                <div className="h-10 w-10 p-3 rounded-full bg-white">
                  <RiInstagramFill className="text-slate-900 " />
                </div>
                <div className="h-10 w-10 p-3 rounded-full bg-white">
                  <FaFacebookSquare className="text-slate-900 " />
                </div>
                <div className="h-10 w-10 p-3 rounded-full bg-white">
                  <FaXTwitter className="text-slate-900 " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider  h-0.5 m-0 bg-gray-700"></div>
        <div className="mt-7.5">
          <div className="flex md:justify-between flex-col md:flex-row  justify-center items-center gap-5 md:gap-0">
            <p className="text-gray-300">
              &copy; 2026 Digitools. All rights reserved.
            </p>
            <ul className="flex gap-5 text-gray-300">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
