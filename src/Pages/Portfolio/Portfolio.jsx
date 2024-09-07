import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Page from "../../Components/Pagination/Page";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const mode=useSelector((state)=>state.auth.mode)
  const [seeAll, setSeeAll] = useState(false);

  return (
    <>
      <div
      
        className={`px-6 py-8  lg:px-32 lg:py-14 project ${mode ? 'bg-[#2b3035]':'bg-[#fff]'}`}
        
      >
        <div className="flex justify-center items-center  ">
          <div className="flex flex-col">
            <h3 className="font-bold mt-2 ">
              <span className={` lg:text-6xl text-4xl ${mode ? 'text-[#f6f6f6]':'text-[#344054]'}`}>My </span>{" "}
              <span className="text-[#0db4c7] lg:text-6xl text-4xl">
                {" "}
                Portfolio
              </span>
            </h3>
          </div>
          
        </div>

            <Page/>
        {/* 
         */}
      </div>
    </>
  );
};

export default Portfolio;
