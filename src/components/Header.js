import React from 'react';
import Logo from '../assets/Logo.png';


const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <img src={Logo} alt="" height={120} width={120}/>
          </a>
          
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
