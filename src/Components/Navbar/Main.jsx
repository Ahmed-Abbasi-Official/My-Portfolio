import React,{useState} from 'react'
import Bubble from '../Bubble/Bubble'
import appwriteServices from "../../Appwrite/Config";

const Main = () => {

    const [file, setFile] = useState([
        
        appwriteServices.getFilePreview("66804f1d00381dbac038")
       
      ]);
  return (
    <>
     <div className="mt-1 lg:text-[50px] text-[40px]  font-bold ">
            <div className="relative ">
              <div className="absolute top-2 left-16 -z-0  ">
                <Bubble className="bg-[#fca349a3] w-8 h-8 animate-scale-up-down  " />
              </div>
              <div className="absolute top-20 right-56 -z-0">
                <Bubble className="bg-[#ff9398] w-8 h-8 animate-scale-up-down " />
              </div>
              <div className="absolute -top-14 right-6 -z-0">
                <Bubble className="bg-[#d27dfa] w-2 h-2 animate-scale-up-down " />
              </div>
              <div className="absolute top-36 -right-2 -z-0">
                <Bubble className="bg-[#f1d53b] w-4 h-4 animate-bounce-up-down " />
              </div>
            </div>
            <h1 className="relative  text-center">
              I'm <span className="text-[#0db4c7d6] ">Ahmed Abbasi</span>,
            </h1>
            <div className="flex relative lg:flex-row flex-col  justify-center gap-4 lg:gap-x-6 -mt-4 ">
              <p className="tracking-widest text-center">Frontend</p>
              <p className="tracking-widest text-center -mt-4 lg:-mt-0">DEVELOPER</p>
            </div>
          </div>
    </>
  )
}

export default Main