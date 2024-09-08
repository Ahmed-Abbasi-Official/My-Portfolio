import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import appwriteServices from "../../Appwrite/Config";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Page1.css"; // Ensure your custom CSS is imported
import { useSelector } from "react-redux";

const Page = () => {
  
  const mode=useSelector((state)=>state.auth.mode)
  const totalPage=3;
  const [file, setFile] = useState({
    bloging: [
      appwriteServices.getFilePreview("6687c6ab0028fb068a79"),
      appwriteServices.getFilePreview("6687c6b500070cd2e416"),
      appwriteServices.getFilePreview("6687c6c10023fb0d2240"),
      appwriteServices.getFilePreview("6687c6ca0011d90c2d2a"),
      appwriteServices.getFilePreview("6687c6d20021094422d5"),
    ],
    portfolio: [
      appwriteServices.getFilePreview("6687c6530017514158fc"),
      appwriteServices.getFilePreview("6687c65c001de73d31d9"),
      appwriteServices.getFilePreview("6687c668000d8180994c"),
      appwriteServices.getFilePreview("6687c670001ca3bda817"),
      appwriteServices.getFilePreview("6687c678002b885fc5ae"),
      appwriteServices.getFilePreview("6687c6830020e04cb05a"),
      appwriteServices.getFilePreview("6687c68d0034c3452b5f"),
    ],
    Todo: [
      appwriteServices.getFilePreview("6687c631003bb269f369"),
      appwriteServices.getFilePreview("6687c63e0009522837b8"),
      appwriteServices.getFilePreview("6687c6480019a1309b80"),
    ],
    Scramble: [
      appwriteServices.getFilePreview("6687c606000b65c237c4"),
      appwriteServices.getFilePreview("6687c61200152177456e"),
      appwriteServices.getFilePreview("6687c61b0007851d2179"),
      appwriteServices.getFilePreview("6687c623002085d48a9a"),
    ],
  });
  const [next, setNext] = useState({
    start: 0,
    end: 2,
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      const documentIds = [
        "668707450018f5c1c0aa",
        "668707450019076cb25f",
        "66870745001921432dc7",
        "6687c3e4001fe9ccc524",
      ];
      const documents = await Promise.all(
        documentIds.map((id) => appwriteServices.getDocument(id))
      );
      setData((prev) => [...prev, documents[0].AhmedPortfolio]);
      setData((prev) => [...prev, documents[1].AhmedPortfolio]);
      setData((prev) => [...prev, documents[2].AhmedPortfolio]);
      setData((prev) => [...prev, documents[3].AhmedPortfolio]);

      setLoading(false);
    };
    fetchDocuments();
  }, []);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setTimeout(() => {
      if (page >= 3) {
        setNext({
          start: 0,
          end: 2,
        });
        setPage(1);
      } else {
        setNext((prev) => ({
          ...prev,
          start: prev.start + 2,
          end: prev.end + 2,
        }));
        setPage((prev) => prev + 1);
      }
    }, 500);
    
  };

  const prevPage = () => {
    setTimeout(() => {
      if (page > 1) {
        setNext((prev) => ({
          ...prev,
          start: prev.start - 2,
          end: prev.end - 2,
        }));
        setPage((prev) => prev - 1);
      }
    }, 500);
    
  };
  useEffect(() => {
    const interval = setInterval(nextPage, 15000); // Change page every 2 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [page]);

  // useEffect(() => {
  //   if (!loading) {
  //     console.log(data);
  //   }
  // }, [loading, data]);

  const pages = [
    {
      page: (
        <>
          <div
            className="lg:py-6  flex flex-col justify-center items-center p-8  lg:w-[500px] max-1337:w-full max-1337:text-xl "
            style={{
              backgroundImage:
                "linear-gradient(to bottom left, #90c4ca3a, #d29e7f54, #90c4ca3a)",
              // Full width of the container
            }}
          >
            <div className="flex justify-center items-center">
              <Swiper
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
                modules={[Navigation, Pagination, Autoplay]}
                className="rounded lg:w-[30vw] w-[70vw] lg:h-[12vw] h-[50vw]"
              >
                <SwiperSlide>
                  <img
                    src="./Images/1.png"
                    className="rounded    "
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./Images/2.png"
                    className="rounded    "
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./Images/3.png"
                    className="rounded    "
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./Images/4.png"
                    className="rounded    "
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./Images/5.png"
                    className="rounded    "
                    alt="Slide 1"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <h3 className="font-semibold text-2xl py-3">Chat App</h3>
              <p className=" ">
              Developed a real-time chat application using React and Firebase. Integrated various libraries including Redux Toolkit for state management, Appwrite for backend services, and React-Toastify for notifications. The app features user authentication, real-time messaging, and a responsive design.
              </p>
            </div>
            <a href="https://abbasi-chatapp.netlify.app/" target="_blank" rel="noopener noreferrer">
              <Button
                className="px-6 mt-8 py-3 bg-[#0db4c7d6] text-white font-semibold text-sm"
                children={"Visit Website"}
              />
            </a>
          </div>
        </>
      ),
    },
    
    {
      page: (
        <>
          <div
            className="lg:py-6  flex flex-col justify-center items-center p-8  lg:w-[500px] max-1337:w-full max-1337:text-xl "
            style={{
              backgroundImage:
                "linear-gradient(to bottom left, #90c4ca3a, #d29e7f54, #90c4ca3a)",
              // Full width of the container
            }}
          >
            <div className="flex justify-center items-center">
              <Swiper
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
                modules={[Navigation, Pagination, Autoplay]}
                className="rounded lg:w-[30vw] w-[70vw] lg:h-[12vw] h-[50vw]"
              >
                <SwiperSlide>
                  <img
                    src={file.bloging[0]}
                    className="rounded    "
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.bloging[1]}
                    className="rounded    "
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.bloging[2]}
                    className="rounded    "
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.bloging[3]}
                    className="rounded    "
                    alt="Slide 1"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <h3 className="font-semibold text-2xl py-3">Blogging Website</h3>
              <p className=" ">
              I've developed a responsive blog website using React for seamless data operations. The site prioritizes security to ensure user data is protected at all times. A key focus is on delivering a precise and reliable blogging experience. The user-friendly interface enhances ease of use.
              </p>
            </div>
            <a href={data[3]} target="_blank" rel="noopener noreferrer">
              <Button
                className="px-6 mt-8 py-3 bg-[#0db4c7d6] text-white font-semibold text-sm"
                children={"Visit Website"}
              />
            </a>
          </div>
        </>
      ),
    },
    {
      page: (
        <>
          <div
            className="lg:py-6  flex flex-col justify-center items-center p-8  w-[500px] max-1337:w-full max-1337:text-xl "
            style={{
              backgroundImage:
                "linear-gradient(to bottom left, #90c4ca3a, #d29e7f54, #90c4ca3a)",
              // Full width of the container
            }}
          >
            <div className="flex justify-center items-center">
              <Swiper
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
                modules={[Navigation, Pagination, Autoplay]}
                className="rounded lg:w-[30vw] w-[70vw] lg:h-[12vw] h-[50vw]"
              >
                <SwiperSlide>
                  <img
                    src={file.portfolio[0]}
                    className="rounded    "
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.portfolio[1]}
                    className="rounded   "
                    alt="Slide 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.portfolio[2]}
                    className="rounded   "
                    alt="Slide 3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.portfolio[3]}
                    className="rounded  "
                    alt="Slide 3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.portfolio[4]}
                    className="rounded   "
                    alt="Slide 3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.portfolio[5]}
                    className="rounded   "
                    alt="Slide 3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.portfolio[6]}
                    className="rounded   "
                    alt="Slide 3"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <h3 className="font-semibold text-2xl py-3">Portfolio Website</h3>
              <p className=" ">
                I have developed a fully responsive Amazon clone website using
                HTML, CSS, and JavaScript. It replicates core functionalities,
                including product listings, a shopping cart, and a checkout
                process, ensuring optimal performance on all devices.
              </p>
            </div>
            <a href={data[0]} target="_blank" rel="noopener noreferrer">
              <Button
                className="px-6 mt-8 py-3 bg-[#0db4c7d6] text-white font-semibold text-sm"
                children={"Visit Website"}
              />
            </a>
          </div>
        </>
      ),
    },
    {
      page: (
        <>
          <div
            className="lg:py-6  flex flex-col justify-center items-center p-8  w-[500px] max-1337:w-full max-1337:text-xl"
            style={{
              backgroundImage:
                "linear-gradient(to bottom left, #90c4ca3a, #d29e7f54, #90c4ca3a)",
              // Full width of the container
            }}
          >
            <div className="flex justify-center items-center">
              <Swiper
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
                modules={[Navigation, Pagination, Autoplay]}
                className="rounded lg:w-[30vw] w-[70vw] lg:h-[12vw] h-[50vw]"
              >
                <SwiperSlide>
                  <img src={file.Todo[0]} className="rounded " alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={file.Todo[1]} className="rounded " alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={file.Todo[2]} className="rounded " alt="Slide 3" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <h3 className="font-semibold text-2xl py-3">Todo Website</h3>
              <p className=" ">
                I have developed a fully responsive todo website that
                efficiently stores data for each user, and authentication is
                implemented using Local Storage,Security is a top priority Users
                can perform CRUD operations on todos within the website,
                enhancing productivity within the platform.
              </p>
            </div>
            <a href={data[1]} target="_blank" rel="noopener noreferrer">
              <Button
                className="px-6 mt-8 py-3 bg-[#0db4c7d6] text-white font-semibold text-sm"
                children={"Visit Website"}
              />
            </a>
          </div>
        </>
      ),
    },
    {
      page: (
        <>
          <div
            className="lg:py-6  flex flex-col justify-center items-center p-8  w-[500px] max-1337:w-full max-1337:text-xl"
            style={{
              backgroundImage:
                "linear-gradient(to bottom left, #90c4ca3a, #d29e7f54, #90c4ca3a)",
              // Full width of the container
            }}
          >
            <div className="flex justify-center items-center">
              <Swiper
                spaceBetween={30}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
                modules={[Navigation, Pagination, Autoplay]}
                className="rounded lg:w-[30vw] w-[70vw] lg:h-[12vw] h-[50vw]"
              >
                <SwiperSlide>
                  <img
                    src={file.Scramble[0]}
                    className="rounded    "
                    alt="Slide 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.Scramble[1]}
                    className="rounded   "
                    alt="Slide 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.Scramble[2]}
                    className="rounded   "
                    alt="Slide 3"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={file.Scramble[3]}
                    className="rounded  "
                    alt="Slide 3"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <h3 className="font-semibold text-2xl py-3">Scramble Website</h3>
              <p className=" ">
                I have developed a responsive scramble game using HTML, CSS, and
                JavaScript. It includes word scrambling, interactive features,
                and score tracking. The game ensures a seamless experience
                across all devices. User interactions are intuitive and
                engaging.{" "}
              </p>
            </div>
            <a href={data[2]} target="_blank" rel="noopener noreferrer">
              <Button
                className="px-6 mt-8 py-3 bg-[#0db4c7d6] text-white font-semibold text-sm"
                children={"Visit Website"}
              />
            </a>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-evenly max-1337:flex-col  gap-0">
        {pages.slice(next.start, next.end).map((val, idx) => (
          <div className={`mt-14 ${mode ? 'shadow shadow-[#fff]' :'shadow-md shadow-[#0db4c7b6]'}`} key={idx}>
            {val.page}
          </div>
        ))}
      </div>

      <div className="mt-12 flex item justify-evenly">
        <div onClick={nextPage}>
          <Button
            type={"text"}
            children={"Next"}
            className="text-[#fff] bg-[#0db4c7b6] font-semibold px-6 py-1"
          />
        </div>
        <p>{page}/{totalPage}</p>
        <div onClick={prevPage}>
          <Button
            type={"text"}
            children={"Prev"}
            className="text-[#fff] bg-[#0db4c7b6] font-semibold px-6 py-1"
          />
        </div>
      </div>
    </>
  );
};

export default Page;

