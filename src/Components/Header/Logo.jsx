import React from 'react'
import appwriteServices from '../../Appwrite/Config'
import { useSelector } from 'react-redux'
const Logo = ({className=''}) => {
  const mode=useSelector((state)=>state.auth.mode)
  const file=[
    appwriteServices.getFilePreview('668960bc00274d67b2eb'),
    appwriteServices.getFilePreview('668985bb0031d1a20d3c'),
    
  ]
  return (
    <button className={`${className} lg:font-bold text-[#0db4c7d6]  rounded-full   transition-all duration-500 ease-out lg:text-4xl `}> {mode ? (
      <img src={file[1]} alt="" className='home fixed top-1 left-1 w-40 transition-all duration-700 ease-out ml-5' srcset="" />
    ):(
      <img src={file[0]} className='w-[150px] transition-all duration-700 ease-out' alt="" srcset="" />
    )}  </button>
  )
}

export default Logo