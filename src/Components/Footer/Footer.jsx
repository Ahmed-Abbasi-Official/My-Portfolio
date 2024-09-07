import React from "react";
import { FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import {Link} from 'react-scroll'
const Footer = () => {
  const mode = useSelector((state) => state.auth.mode);

  return (
    <>
      <div
        className={`lg:px-4 lg:py-14 w-full  py-14 lg:mt-[2rem] overflow-x-hidden ${
          mode ? "bg-[#2b3035]" : "bg-[#000A2D]"
        }`}
      >
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 lg:gap-[9rem] gap:[6rem] gap-y-8 ">
          <div className="flex flex-col  items-center  text-white ">
            <h3 className="text-[1.7rem] font-semibold lg:pl-0 lg:mt-0 mt-9 ">
              About
            </h3>
            <p
              className={`text-center ${
                mode ? "text-[#f6f6f6]" : "text-[#adadad]"
              }    mt-6 lg:pl-0 pl-8 `}
            >
              I'm a frontend developer specializing in responsive design using
              Tailwind CSS and React Icons. I prefer clean, minimalistic
              aesthetics with a light black and white color scheme.
            </p>
          </div>
          <div className="flex flex-col   items-center text-white ">
            <h3 className="text-[1.7rem] lg:mt-[0.25rem] mt-9 lg:mb-4 mb-7 font-semibold">
              Links
            </h3>
            <ul 
              className={`${
                mode ? "text-[#f6f6f6]" : "text-[#adadad]"
              }  lg:text-xl space-y-2 cursor-pointer  flex flex-col items-center justify-center`}
            >
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li>Home</li>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li>About</li>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li>Contact</li>
              </Link>
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <li>Services</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col  items-center text-white">
            <h3 className="text-[1.7rem]  font-semibold ">Services</h3>
            <ul
              className={`mt-6 ${
                mode ? "text-[#f6f6f6]" : "text-[#adadad]"
              }  lg:text-xl space-y-2 cursor-pointer flex flex-col items-center`}
            >
               <Link 
      activeClass="active" 
      to="web design" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
      
              <li>Web Designing</li>
    </Link>
    <Link 
      activeClass="active" 
      to="web dev" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
      
      <li>Website Development</li>
    </Link>
    <Link 
      activeClass="active" 
      to="frontend" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
      
      <li>Frontend Developmet</li>
    </Link>
    <Link 
      activeClass="active" 
      to="hosting" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
      
      <li>Web Hosting</li>
    </Link>
              
              
              
            </ul>
          </div>
          <div className="flex flex-col  justify-center  text-white ">
            <h3 className="text-[1.7rem] font-semibold  lg:pl-0 lg:mb-9 text-center">
              Have a Question<span className="lg:text-2xl text-2xl">?</span>
            </h3>
            <ul
              className={`${
                mode ? "text-[#f6f6f6]" : "text-[#adadad]"
              }  lg:text-xl space-y-4 mt-2 lg:mt-0 cursor-pointer flex flex-col items-center`}
            >
              <li>Karachi,Pakistan</li>
              <li>+923231835011</li>
              <li>aymi.coding@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center my-16 w-full ">
          <ul className="flex justify-center items-center space-x-4 cursor-pointer">
            <li
              className={`p-3 text-xl lg:text-2xl  animate-water-wave border boder-[#777]   ${
                mode ? "text-[#fff]" : "text-[#fff] bg-[#212529]"
              }`}
            >
              <a
                class="service-icon"
                href="https://www.instagram.com/aymii.coding/"
                target="_blank"
              >
                <FaInstagramSquare  />
              </a>
            </li>
            <li
              className={`p-3 text-xl lg:text-2xl  animate-water-wave border boder-[#777]  ${
                mode ? "text-[#fff]" : "text-[#fff] bg-[#212529]"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/ahmed-abbasi-9419012b2/"
                target="?blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li
              className={`p-3 text-xl lg:text-2xl  animate-water-wave border boder-[#777]  ${
                mode ? "text-[#fff]" : "text-[#fff] bg-[#212529]"
              }`}
            >
              <FaTwitter />
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center w-full text-center text-[#777]">
          <p>
            Copyright 2024 All rights reserved | This template is made ❤ by
            <span className="text-white"> Ahmed Abbasi</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
