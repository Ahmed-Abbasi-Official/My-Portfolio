import React from 'react';
import MobileNavbar from './MobileNavbar';
import Logo from './Logo';
import { Link } from 'react-scroll';
import { FaMoon } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from '../../Store/AuthSlice';

const Header = () => {
  const mode = useSelector((state) => state.auth.mode);
  const dispatch = useDispatch();

  const navbarItems = [
    { element: 'Home', path: 'Home' },
    { element: 'About', path: 'about' },
    { element: 'Service', path: 'services' },
    { element: 'Project', path: 'project' },
    { element: 'Contact', path: 'contact' },
  ];

  return (
    <>
      <nav className={`lg:py-4 py-2 pl-6 pr-9 w-full relative ${mode ? 'bg-[#2b3035]' : 'bg-[#F6F6F6]'} z-20`}>
        <div className='lg:flex items-center justify-between px-4 gap-2 hidden relative'>
          <Logo className='' />
          <ul className='lg:flex justify-between lg:gap-x-10 items-center hidden relative'>
            {navbarItems.map((item) => (
              <li key={item.element} className={`cursor-pointer text-[1.4rem] rounded-full ${mode ? 'text-white' : 'text-black'}`}>
                <Link
                  activeClass="active"
                  className="hover-link"
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {item.element}
                </Link>
              </li>
            ))}
            <li className='' onClick={() => dispatch(toggleMode())}>
              <FaMoon className={`w-6 h-6 cursor-pointer ${mode ? 'text-white' : 'text-[#2b3035]'}`} />
            </li>
          </ul>
        </div>
        
      </nav>

      <div className='lg:hidden w-full z-20 mb-16'>
        <MobileNavbar />
        <Logo className='lg:hidden fixed z-50 top-2.5 left-0 py-3 px-3  font-bold' />
      </div>
    </>
  );
};

export default Header;
