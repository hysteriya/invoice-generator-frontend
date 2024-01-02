import React from 'react';

const Header = ({ name, logo }) => {
  // const handlePrint = () => {
  //   window.print();
  // };

  return (
    <div>
      <header className="flex justify-between items-center mb-5">
        <div className="flex items-center">
          <img src={logo} alt='' className="mr-3 w-12 h-12" />
          <h2 className="font-bold tracking-wide uppercase text-4xl">{name}</h2>
        </div>
      </header>
    </div>
  );
};

export default Header;
