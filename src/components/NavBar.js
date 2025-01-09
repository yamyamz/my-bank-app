import React from 'react'
import dbsLogo from '../assets/dbs-logo.png';

const NavBar = () => {
  return (
    <header className=" w-full bg-red-600 text-white py-2">
      <div className="container mx-auto flex items-center">
        {/* Logo Section */}
        <img src={dbsLogo} alt="DBS Logo" className="h-9" />

        {/* Placeholder for additional header content */}
        <nav className="ml-auto">
          {/* Add navigation links here if needed */}
        </nav>
      </div>
    </header>
  );
};
  
export default NavBar