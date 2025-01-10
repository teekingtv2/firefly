import React, { useState } from "react";
import {
  FaArrowCircleDown,
  FaArrowCircleRight,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleNavToggle = () => {
    setNav(!nav);
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed w-full shadow-lg z-[100] bg-black lg:bg-black">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center w-full h-full px-5 lg:px-0 py-2 lg:py-0">
          <div className="flex items-center gap-14">
            <AnchorLink
              href="#home"
              className="flex gap-2 items-center justify-center"
            >
              <img
                src="/assets/images/logo.png"
                alt=""
                className="w-[50px] md:w-[60px]"
              />
              {/* <div className="flex flex-col items-start gap-0 text-white">
                <span className="text-[11px] md:text-[12px] font-bold uppercase p-0 m-0 leading-[0.9em] text-start">
                  Firefly
                </span>
                <span className="text-[8px] md:text-[8px] font-medium uppercase">
                  AI
                </span>
              </div> */}
            </AnchorLink>
            <div
              // style={{ color: `${linkColor}` }}
              className="hidden md:flex gap-10 text-[14px] font-medium items-center"
            >
              <AnchorLink
                href="#about"
                className={activeLink === "home" ? "active" : "menu-link"}
                onClick={() => onUpdateActiveLink("home")}
              >
                About
              </AnchorLink>
              {/* <AnchorLink
                href="#features"
                className={activeLink === "about" ? "active" : "menu-link"}
                onClick={() => onUpdateActiveLink("about")}
              >
                Firefly AI Agent
              </AnchorLink> */}
              <AnchorLink
                href="#design"
                className={activeLink === "media" ? "active" : "menu-link"}
                onClick={() => onUpdateActiveLink("media")}
              >
                Design Implementation
              </AnchorLink>

              <AnchorLink
                href="#utility"
                className={activeLink === "markets" ? "active" : "menu-link"}
                onClick={() => onUpdateActiveLink("markets")}
              >
                Utility
              </AnchorLink>
              <AnchorLink
                href="#roadmap"
                className={activeLink === "markets" ? "active" : "menu-link"}
                onClick={() => onUpdateActiveLink("markets")}
              >
                Roadmap
              </AnchorLink>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <AnchorLink
              href="#features"
              className="flex btnn1 py-[8px] px-4 text-[12px] font-medium justify-center items-center ease-in duration-300"
            >
              <span className="mr-2">Firefly AI Agent</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </AnchorLink>
          </div>
          <div onClick={handleNavToggle} className="md:hidden">
            <AiOutlineMenu className="text-gray-100" size={22} />
          </div>

          {/* Mobile menu */}
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed z-[150] left-0 top-0 w-full h-screen bg-black/70 "
              : ""
          }
          style={{ zIndex: "11111" }}
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 ease-in duration-500 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#000000fa] py-10 px-5"
                : "fixed left-[-130%] top-0 ease-in duration-500 py-10"
            }
          >
            <div>
              <div className="flex w-full justify-end items-center">
                <div
                  onClick={handleNavToggle}
                  className="rounded-full shadow-md shadow-fireflyYellow p-2 cursor-pointer text-gray-300"
                >
                  <AiOutlineClose size={20} />
                </div>
              </div>
              <div className="border-b border-gray-500 my-5"></div>
            </div>
            <div className="py-4 flex flex-col mt-20">
              <ul className="flex flex-col gap-7">
                <AnchorLink
                  href="#about"
                  className={activeLink === "about" ? "about" : "menu-link"}
                  onClick={() => onUpdateActiveLink("about")}
                >
                  About
                </AnchorLink>
                <AnchorLink
                  href="#design"
                  className={activeLink === "design" ? "active" : "menu-link"}
                  onClick={() => onUpdateActiveLink("design")}
                >
                  Design Implementation
                </AnchorLink>

                <AnchorLink
                  href="#utility"
                  className={activeLink === "utility" ? "active" : "menu-link"}
                  onClick={() => onUpdateActiveLink("utility")}
                >
                  Utility
                </AnchorLink>
                <AnchorLink
                  href="#roadmap"
                  className={activeLink === "roadmap" ? "active" : "menu-link"}
                  onClick={() => onUpdateActiveLink("roadmap")}
                >
                  Roadmap
                </AnchorLink>
              </ul>
              <div className="pt-48">
                <p className="uppercase tracking-widest text-[#a1a1a1] text-center">
                  Connect with us
                </p>
                <div className="flex items-center justify-center gap-5 my-4 w-full sm:w-[80%] text-gray-200">
                  <Link
                    to="https://instagram.com/"
                    className="rounded-full shadow-md shadow-fireflyYellow p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    to="https://youtube.com/@"
                    className="rounded-full shadow-md shadow-fireflyYellow p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    target="_blank"
                  >
                    <FaYoutube />
                  </Link>
                  <Link
                    to="https://youtube.com/@"
                    className="rounded-full shadow-md shadow-fireflyYellow p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    target="_blank"
                  >
                    <FaYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
