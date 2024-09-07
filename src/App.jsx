import react, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Conatct from "./Pages/ContactUs/Conatct";
import Footer from "./Components/Footer/Footer";
import { useSelector,useDispatch } from "react-redux";
import { toggleMode } from "./Store/AuthSlice";
import './App.css'
import Loader from "./Components/Loader/Loader";

function App() {
  const mode=useSelector((state)=>state.auth.mode)
  const [loading, setLoading] = useState(true);
  // const projects = {
  //   project1: {
  //     name: "Ahmed Portfolio",
  //     Description: "Ahmed Portfolio by JS",
  //     AhmedPortfolio: "https://ahmedabbasiportfolio.netlify.app/#",
  //     email:'aymi.coding@gmail.com',
  //     Messages: 'abbasi',
  //     Subject:'web',
  //   },
  //   project2: {
  //     name: "Todo App",
  //     Description: "Todo App by REACT",
  //     AhmedPortfolio: "https://ahmedabbasitodo.netlify.app/",
  //     email:'aymi.coding@gmail.com',
  //     Messages:'abbasi',
  //     Subject:'abbasi',
  //   },
  //   project3: {
  //     name: "Scramble App",
  //     Description: "Scramble App by JS",
  //     AhmedPortfolio: "https://ahmedabbasiscramblegame.netlify.app/",
  //     email:'aymi.coding@gmail.com',
  //     Messages: 'abbasi',
  //     Subject:'web',
  //   },
  //   project4: {
  //     name: "Blogging App",
  //     Description: "Blogging App by react",
  //     AhmedPortfolio: "https://abbasiblog.netlify.app/",
  //     email:'aymi.coding@gmail.com',
  //     Messages: 'abbasi',
  //     Subject:'web',
  //   },
  // };

  // useEffect(() => {
  //   appwriteServices.createDocument(projects.project1);
  //   appwriteServices.createDocument(projects.project2);
  //   appwriteServices.createDocument(projects.project3);
  //   appwriteServices.createDocument(projects.project4);
  // }, [page]);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  return (
    <>
      {loading ? (
     <Loader/>
      ): (
        <>
        <div className={mode ? 'bg-[#2b3035] text-white':'bg-[#f6f6f6]'}>
        <div className={`fixed w-full top-0  z-40 ${mode ? ' bg-[#2b3035] ' :' bg-[#f6f6f6]  ' } ${mode ? 'shad':null}`} >
          <Header />
        </div>
        <div className={`pt-16 max-1300:pt-16  lg:pt-24 ${mode ? 'bg-[#2b3035]':'bg-[#f6f6f6]'}`}>
        
          
          <Home />
        </div>
        <hr />
        <div>
          <About />
        </div>
        <hr />
        <div className="web design">
          <Service />
        </div>
        <hr />
        <div>
          <Portfolio />
        </div>
        <hr />
        <div>
          <Conatct />
        </div>
        <hr />
        <div>
          <Footer />
        </div>
      </div>
        </>
      )}
    </>
  );
}

export default App;
