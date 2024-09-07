import React from "react";
import { FaBars } from "react-icons/fa";
import { toggle ,toggleMode} from "../../Store/AuthSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { Link } from "react-scroll";
import { FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const MobileNavbar = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const mode = useSelector((state) => state.auth.mode);
  const variants = {
    open: { opacity: 1, right: 0 },
    closed: { opacity: 0, right: "-100%" },
  }
  const navbarItems = [
    { element: "Home", path: "Home" },
    { element: "About", path: "about" },
    { element: "Service", path: "services" },
    { element: "Project", path: "project" },
    { element: "Contact", path: "contact" },
  ];

  return (
    <>
      <div className={`fixed top-0 w-full z-40 `}>
        <div className={`pointer py-6 px-9 lg:hidden w-full ${mode ?'bg-[#2b3035]':'bg-white'} z-20`}>
          <button onClick={() => dispatch(toggle())}>
            <FaBars className="text-[#0db4c7d6]  w-9 h-9 fixed top-5 mr-4 right-0" />
          </button>
        </div>
        <motion.div
        animate={status ? "open" : "closed"}
        variants={variants}
          className={` fixed  w-full z-20 p-2 px-10 text-black uppercase tracking-wide 
          } transition-all duration-500 ease-linear ${mode ?'bg-[#2b3035] text-white':'bg-white'}`}
        >
          <ul>
            {navbarItems.map((navItem) => (
              <li key={navItem.element} className="py-2 text-xl cursor-pointer">
                <Link
                className="hover-link"
                onClick={() => dispatch(toggle())}
                  to={navItem.path}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {navItem.element}
                </Link>
              </li>
            ))}
            <li onClick={()=>{
              dispatch(toggleMode())
              dispatch(toggle())
            }}><FaMoon className={`w-8 h-8 ml-4 my-2 text-black cursor-pointer ${mode ? 'text-white':'text-[#2b3035]'}`}  /></li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default MobileNavbar;
