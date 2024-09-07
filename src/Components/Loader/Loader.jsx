import React from 'react';
import './Loader.css';
import Logo from '/public/Images/Logo.png';
const Loader = () => {
    // const file=[
    //     appwriteServices.getFilePreview('668960bc00274d67b2eb')
    //   ]
  return (
    <div className="loader-container">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <img src={Logo} className="loader-logo" alt="Logo" />
      </div>
    </div>
  );
};

export default Loader;
