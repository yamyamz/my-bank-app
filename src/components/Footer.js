import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-red-600 text-white py-4">
      <div className="text-center">
        <p>&#169; {currentYear} DBS Bank. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
