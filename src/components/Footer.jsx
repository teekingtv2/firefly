import React from "react";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full z-30 px-2 md:px-0 bg-fireflyYellow text-black py-2 md:py-2">
      <div className="container grid grid-cols-5 px-2 md:px-0 items-center">
        <div className="col-span-3 text-[12px] md:text-[14px] font-medium lg:font-semibold">
          © 2025 {import.meta.env.VITE_APP_NAME}. All rights reserved
          <br />
          {/* ATTENTION: We dont sell any products through the website. */}
        </div>
        <div className="col-span-2 flex gap-2 justify-end">
          <Link
            to="https://x.com/"
            className="rounded-full shadow-md shadow-fireflyDarkGrey p-2 lg:p-3 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <FaTelegram />
          </Link>
          <Link
            to="https://x.com/"
            className="rounded-full shadow-md shadow-fireflyDarkGrey p-2 lg:p-3 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <FaTwitter />
          </Link>
          <Link
            to="https://x.com/"
            className="rounded-full shadow-md shadow-fireflyDarkGrey p-2 lg:p-3 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <FaDiscord />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
