import React, {  useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaTag } from "react-icons/fa";
import appwriteServices from "../../Appwrite/Config";
import "./About.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import about1 from '/public/Images/about1.png'
import about2 from '/public/Images/about2.png'
const About = () => {
  const mode=useSelector((state)=> state.auth.mode)
  const [i, setI] = useState(false)
  const images={
    about_1:appwriteServices.getFilePreview('6683dc9d00327500f20e'),
    about_2:appwriteServices.getFilePreview('6683dcb4001b2e308601'),
    about_3:appwriteServices.getFilePreview('66895f97001b4fd5ebbe'),
    about_4:appwriteServices.getFilePreview('66895fa0001c1192bad4'),
  }
  const icons = [
    { mark: <FaHtml5 />, hover: "hover:text-[#f06529]", text: "HTML-5" },
    { mark: <FaCss3Alt />, hover: "hover:text-[#2965f1]", text: "CSS3" },
    {
      mark: <i class="fa-brands fa-js"></i>,
      hover: "hover:text-[#f0db4f]",
      text: "JavaScript",
    },
    { mark: <FaReact />, hover: "hover:text-[#61dafb]", text: "React" },
    {mark:<svg className="tailwind-icon" xmlns="http://www.w3.org/2000/svg" fill={mode ? '#f6f6f6':'#7d848e'} width="60" height="70" viewBox="0 0 24 24" xmlSpace="preserve"><path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>,

      text: "Tailwind",
    }
    ,

    {
      mark:<svg xmlns="http://www.w3.org/2000/svg" id="app" class="u-max-width-100-percent" width="60" height="70" viewBox="0 0 112 98" fill="none"> <path d="M111.1 73.4729V97.9638H48.8706C30.7406 97.9638 14.9105 88.114 6.44112 73.4729C5.2099 71.3444 4.13229 69.1113 3.22835 66.7935C1.45387 62.2516 0.338421 57.3779 0 52.2926V45.6712C0.0734729 44.5379 0.189248 43.4135 0.340647 42.3025C0.650124 40.0227 1.11768 37.7918 1.73218 35.6232C7.54544 15.0641 26.448 0 48.8706 0C71.2932 0 90.1935 15.0641 96.0068 35.6232H69.3985C65.0302 28.9216 57.4692 24.491 48.8706 24.491C40.272 24.491 32.711 28.9216 28.3427 35.6232C27.0113 37.6604 25.9782 39.9069 25.3014 42.3025C24.7002 44.4266 24.3796 46.6664 24.3796 48.9819C24.3796 56.0019 27.3319 62.3295 32.0653 66.7935C36.4515 70.9369 42.3649 73.4729 48.8706 73.4729H111.1Z" fill={mode ? '#f6f6f6':'#7d848e'}/> <path d="M111.1 42.3027V66.7937H65.6759C70.4094 62.3297 73.3616 56.0021 73.3616 48.9821C73.3616 46.6666 73.041 44.4268 72.4399 42.3027H111.1Z" fill={mode ? '#f6f6f6':'#7d848e'}/> </svg>,

      
      text: "AppWrite",
    },
  ];

  return (
    <>
      <motion.div
       initial={{ opacity: 0, scaleX: 0.5 }}
       animate={{ opacity: 1, scaleX: 1 }}
       transition={{ duration: 1.3 }} 
      className={`p-9 w-[100%] about ${mode ? 'bg-[#2b3035]':'bg-white'}`} >
        <h2
          id="head"
          className=" text-center mb-6 text-4xl lg:tex-6xl uppercase text-[#0db4c7d6] font-bold"
        >
          About
        </h2>
        <div
          className="flex flex-col lg:flex-row gap-14 w-full Name items-center justify-between"
          onMouseEnter={() => setI(!i)}
        >
          {" "}
          <div className="lg:w-[55%] w-full flex justify-center items-center" onMouseEnter={() => setI(!i)}>
           {mode ? (
             i ? (
              <img src={about1} className="w-[520px]" alt="" />
            ) : (
              <img src={about2} className="w-[520px]" alt="" />
            )
           ) : (
             i ? (
              <img src={about1} className="w-[520px]" alt="" />
            ) : (
              <img src={about2} className="w-[520px]" alt="" />
            )
           )}
          </div>
          <div
            className=" flex  flex-col justify-center items-center px-4 lg:w-[45%] w-[100%] "
            onMouseEnter={() => setI(!i)}
          >
            {/* ======================
            skills div
        ==========================*/}
            <h3 className="text-2xl lg:text-[30px] font-semibold text-center line-clamp-2 mb-4">
              Skills
            </h3>
            {/* ======================
            para div
        ==========================*/}
            <div>
              <p className={` text-[16px] text-center mb-2 font-semibold ${mode ? 'text-[#f6f6f6]':'text-[#868e96]'}`}>
                Crazy full stack developer who wants to explore every tech stack
              </p>
            </div>
            {/* ======================
            Icons div
        ==========================*/}

            <div className="flex   justify-center items-center py-4">
              <ul
                className="flex flex-wrap justify-center gap-2 items-center"
                key={icons}
              >
                {icons.map((val, idx) => (
                  <li
                    className={`  text-[50px]   ${mode ? ' text-[#f6f6f6]':' text-[#7d848e]'} ${val.hover}`}
                    key={idx}
                  >
                    <div className="flex flex-col justify-center items-center mx-4 ">
                      {val.mark}

                      <p className={`text-[14px] mb-1  font-semibold ${mode ? 'text-[#f6f6f6]':'text-[#868e96]'}`}>
                        {val.text}
                      </p>
                    </div>
                  </li>
                ))}
               
              </ul >
            </div>
            {/* ======================
            3-para div
        ==========================*/}
            <div Name="text-[19px]">
              <div className="flex justify-center items-center gap-x-4">
                <FaTag className="text-yellow-500" />
                <p className="mb-4 pt-3">
                  Develop highly interactive Front end / User Interfaces for
                  your websites.
                </p>
              </div>
              <div className="flex  items-center gap-x-4">
                <FaTag className="text-yellow-500" />
                <p className="mb-4">
                  Integration of third party services such as Firebase.
                </p>
              </div>
              <div className="flex  items-center gap-x-4">
                <FaTag className="text-yellow-500" />
                <p>Easily create responsive sites.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
