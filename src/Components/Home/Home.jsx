import React, { useEffect, useState } from "react";
import appwriteServices from "../../Appwrite/Config";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import Main from "../Navbar/Main";
import home2 from '/public/Images/home2.png'
import { useSelector } from "react-redux";

const Home = () => {
  const mode = useSelector((state) => state.auth.mode);
  const [showImage, setShowImage] = useState(true);
  const [text] = useTypewriter({
    words: ["FRONTEND DEVELOPER", "FREELANCER"],
    loop: {},
  });

  const [file, setFile] = useState([
    appwriteServices.getFilePreview("66804f1200142d2d5d4d"),
    appwriteServices.getFilePreview("6683dcde000accc88a7f"),
    appwriteServices.getFilePreview("6683dce7000b8a714b1c"),
    appwriteServices.getFilePreview("66895fb00020da8eb652"),
    appwriteServices.getFilePreview("66895fba001a1755eec9"),
  ]);

  useEffect(() => {
    // Set a timer to change the state after 3 seconds
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 5000);

    // Cleanup the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }} 
        
        className={`p-2 px-4 lg:p-1 lg:px-6 flex flex-col Home justify-center lg:gap-28 gap-14 lg:flex-row max-1300:flex-col  overflow-hidden ${
          mode ? "bg-[#2b3035] text-white" : "bg-[#f6f6f6]"
        }`}
      >
        <motion.div 
        
          a className="flex flex-col items-centers justify-center-col p-4 ">
          {/*============================
                    Hello Div
          ===============================*/}
          <div>
            <div className="flex justify-center  ">
              {file && (
                <img
                  src={file[0]}
                  className="pl-24 lg:mb-1"
                  alt="hello_image"
                />
              )}
            </div>
            <div className="text-center">
            <p
              className={`px-4 py-2 inline text-center ${
                mode ? "border border-[#f6f6f6]" : "border border-black"
              }  rounded-full font-semibold`}
            >
              Hello!
            </p>
            </div>
          </div>
          {/*============================
                    Main Div
          ===============================*/}
          <Main />
          {/*============================
                    Animation Div
          ===============================*/}
          <div>
            <div className="flex justify-center pb-[50px] ">
              <h2
                className={` lg:text-[24px] text-[21px] pt-[20px] font-bold ${
                  mode ? "text-[#f6f6f6]" : "text-black"
                }`}
              >
                I'm a <span className="text-[#0db4c7d6] font-extrabold">{text}</span>
                <Cursor />
              </h2>
            </div>
            <div className="flex justify-center ">
              <h3
                className={`px-6 py-4 text-[14px] uppercase font-semibold  ${mode ?'text-[#0db3c7]':'text-[#0db3c7]'} bg-[#0db3c71f]`}
                style={{ letterSpacing: "6px" }}
              >
                I create eye-catching websites
              </h3>
            </div>
          </div>
          {/*===============================
              Button Div
          ==================================*/}
          <div className="flex justify-center gap-4 flex-wrap  ">
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Button
                children={"Portfolio"}
                className="text-white font-semibold py-[10px] px-[36px] text-[20px] mt-5 "
              />
            </Link>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Button
                children={"Hire me"}
                className="text-white font-semibold py-[10px] px-[36px] text-[20px] mt-5 "
              />
            </Link>

            
          </div>
        </motion.div>

        {/*============================
            Pic Div
        ===============================*/}
        <div className=" relative    flex justify-center items-center ">
          {mode ? (
            showImage ? (
              <img src={home2} className="w-[510px] -mt-[25px]" alt="" />
            ) : (
              <img src={home2} className="w-[510px] -mt-[25px]" alt="" />
            )
          ) : showImage ? (
            <img src={home2} className="w-[510px] -mt-[25px]" alt="" />
          ) : (
            <img src={home2} className="w-[510px] -mt-[25px]" alt="" />
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Home;
