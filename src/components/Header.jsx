import React from 'react';

const Header = ({ name, logo }) => {
  return (
    <div>
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <img src={logo} alt='' className="mr-4 w-16 h-16" />
          <h2 className="font-bold tracking-wide uppercase text-3xl">{name}</h2>
        </div>
      </header>
    </div>
  );
};

export default Header;
