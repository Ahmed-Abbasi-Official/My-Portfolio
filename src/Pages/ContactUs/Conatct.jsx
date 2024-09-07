import React from "react";
import Button from '../../Components/Button/Button'
import { useForm } from "react-hook-form";
import Conf from '../../Conf/Conf'
import appwriteServices from '../../Appwrite/Config'
import { useSelector } from "react-redux";
const Conatct = () => {
  const mode=useSelector((state)=>state.auth.mode)
  const { register, handleSubmit, reset } = useForm();
 

  const handleFormSubmit = async (data) => {
    try {
      const response = await appwriteServices.getContact(data);
      console.log('Form submitted successfully:', response);
      reset(); // Clear form inputs
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <>
      <div className="lg:px-[200px] px-9 sm:px-16 py-14 contact">
        <h3 className={`text-4xl lg:text-6xl font-bold text-center ${mode ? 'text-[#f6f6f6]':'text-[#272727]'}`}>
          Contact Us
        </h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex justify-center items-center mt-24  flex-col gap-6">
            <div className=" lg:space-x-2 grid lg:grid-cols-2 w-full grid-cols-1">
              <input
                type="text"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
                className="lg:px-4 lg:py-2 px-2 py-3   lg:text-lg text-sm rounded  border border-[#c9c9c9] outline-none"
                required
              />
              <input
                type="text"
                placeholder="demo@gmail.com"
                {...register("email", { required: true })}
                className="lg:px-4 lg:py-2 px-2 py-3 mt-6 lg:mt-0 text-lg rounded  border border-[#c9c9c9] outline-none"
                required
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <input
                type="text"
                placeholder="Subject"
                {...register("Subject", { required: true })}
                className="lg:px-4 lg:py-2 px-2 py-3  w-full text-lg rounded  border border-[#c9c9c9] outline-none"
                required
                
              />
            </div>
            <div className="w-full  flex justify-center">
              <textarea {...register("message", { required: true })} className="w-full border  boder-[#c9c9c9] rounded px-4 py-2 outline-none" cols='30' rows='10' ></textarea>
            </div>
            <button type="text" className="text-white lg:px-14 lg:py-4 text-xl px-9 py-4 font-semibold rounded" style={{
                    background: "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)"
                  }}>SEND</button>
          </div>
          
        </form>
      </div>
    </>
  );
};

export default Conatct;
