import React from "react";
import { FaReact } from "react-icons/fa";
import "./Service.css";
import { useSelector } from "react-redux";
const Service = () => {
  const mode=useSelector((state)=>state.auth.mode)
  const myServices = [
    {
      service: (
        <>
          <div
            className={`p-2 mb-2 lg:mb-4 text-2xl  lg:text-4xl lg:p-4 border ${mode ? 'border-[#fff]' : 'border-[#171717]'} w-20 h-20 flex justify-center items-center bg-[#73747529] animate-water-wave web dev `}
            style={{
              borderRadius: " 56% 44% 70% 30% /30% 54% 46% 70%",
            }}
          >
            <i class="ri-computer-fill"></i>
          </div>
          <h3 className="text-[20px] mb-2 font-semibold ">
            Web Design
          </h3>
          <p className={`w-[80%]  ${mode ?'text-[#f6f6f6]' :'text-[#868e96]' }`}>
          Transform your online presence with our custom web design services. We specialize in creating visually appealing, user-friendly websites that are responsive and optimized for all devices. Connect effectively with your audience and achieve your digital goals with our expert solutions
          </p>
        </>
      ),
    },
    {
      service: (
        <>
          <div
            className={`p-2 mb-2 lg:mb-4 text-2xl lg:text-4xl lg:p-4 border ${mode ? 'border-[#fff]' : 'border-[#171717]'} w-20 h-20 flex justify-center items-center bg-[#73747529] animate-water-wave frontend`}
            style={{
              borderRadius: " 56% 44% 70% 30% /30% 54% 46% 70%",
            }}
          >
            <i class="ri-pages-line"></i>
          </div>
          <h3 className="text-[20px] mb-2 font-semibold">
            Website Development
          </h3>
          <p className={`w-[80%]  ${mode ?'text-[#f6f6f6]' :'text-[#868e96]' }`}>
            Create responsive and interactive websites for individuals,
            businesses, or organizations using your skills in HTML5, CSS3,
            JavaScript, and Tailwind. Ensure that the websites are
            mobile-friendly and optimized for various devices and screen sizes.
          </p>
        </>
      ),
    },
    {
      service: (
        <>
          <div
            className={`hosting p-2 mb-2 lg:mb-4 text-2xl lg:text-4xl lg:p-4 border ${mode ? 'border-[#fff]' : 'border-[#171717]'} w-20 h-20 flex justify-center items-center bg-[#73747529] animate-water-wave `}
            style={{
              borderRadius: " 56% 44% 70% 30% /30% 54% 46% 70%",
            }}
          >
            <FaReact />
          </div>
          <h3 className="text-[20px] mb-2 font-semibold ">
            Frontend Development
          </h3>
          <p className={`w-[80%]  ${mode ?'text-[#f6f6f6]' :'text-[#868e96]' }`}>
            Specialize in frontend development by building user interfaces (UIs)
            and user experiences (UX) using HTML5, CSS3, JavaScript, and
            React.js. Develop single-page applications (SPAs) and ensure they
            are fast, responsive, and accessible.
          </p>
        </>
      ),
    },
    {
      service: (
        <>
          <div
            className={` p-2 mb-2 lg:mb-4 text-2xl lg:text-4xl lg:p-4 border ${mode ? 'border-[#fff]' : 'border-[#171717]'} w-20 h-20 flex justify-center items-center bg-[#73747529] animate-water-wave `}
            style={{
              borderRadius: " 56% 44% 70% 30% /30% 54% 46% 70%",
            }}
          >
           <i class="fa-brands fa-usps"></i>
          </div>
          <h3 className="text-[20px] font-semibold mb-2 ">
            Web Hosting and Deployment
          </h3>
          <p className={`w-[80%]  ${mode ?'text-[#f6f6f6]' :'text-[#868e96]' }`}>
            Assist clients in deploying their websites and web applications to
            hosting platforms such as Firebase Hosting, Netlify, or traditional
            web servers. Optimize website performance and ensure secure
            connections (HTTPS).
          </p>
        </>
      ),
    },
    {
      service: (
        <>
          <div
            className={`p-2 mb-2 lg:mb-4 text-2xl lg:text-4xl lg:p-4 border ${mode ? 'border-[#fff]' : 'border-[#171717]'} w-20 h-20 flex justify-center items-center bg-[#73747529] animate-water-wave `}
            style={{
              borderRadius: " 56% 44% 70% 30% /30% 54% 46% 70%",
            }}
          >
            <i class="fa-regular fa-wrench"></i>
          </div>
          <h3 className="text-[20px] font-semibold mb-2 ">
            Maintenance and Updates
          </h3>
          <p className={`w-[80%]  ${mode ?'text-[#f6f6f6]' :'text-[#868e96]' }`}>
            Offer maintenance services to keep websites and web applications
            up-to-date with security patches, performance improvements, and
            feature enhancements. Provide regular backups and monitoring for
            uptime.
          </p>
        </>
      ),
    },
    {
      service: (
        <>
          <div
            className={`p-2 mb-2 lg:mb-4 text-2xl lg:text-4xl lg:p-4 border ${mode ? 'border-[#fff]' : 'border-[#171717]'} w-20 h-20 flex justify-center items-center bg-[#73747529] animate-water-wave `}
            style={{
              borderRadius: " 56% 44% 70% 30% /30% 54% 46% 70%",
            }}
          >
            <i class="fa-regular fa-window-restore"></i>
          </div>
          <h3 className="text-[20px] font-semibold mb-2 ">
            Responsive Design Audits
          </h3>
          <p className={`w-[80%]  ${mode ?'text-[#f6f6f6]' :'text-[#868e96]' }`}>
            Evaluate existing websites for responsiveness across devices and
            browsers. Provide recommendations and implement improvements using
            CSS3 media queries and responsive design principles.
          </p>
        </>
      ),
    },
  ];
  return (
    <>
    
      <div className={`px-6 lg:px-24 py-8   lg:py-14 lg:pb-24  services w-full ${mode ? 'bg-[#2b3035] ':'bg-[#f6f6f6]'}`}>
        <h3 className="text-center lg:pb-14 pb-8 text-[#0db4c7d6] font-bold text-4xl lg:text-6xl ">Services</h3>
      <div className="   grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-14">
      
      {myServices.map((children) => (
        <div
          id="scale_up"
          className= {` cursor-pointer px-3 py-6  flex-col  flex justify-center items-center ${mode ? 'shadow shadow-[#fff] bg-[#2b3035] ' :'shadow-lg shadow-[#0db4c736] bg-white'}`}
        >
          {children.service}
        </div>
      ))}
    </div>
      </div>
    </>
  );
};

export default Service;
