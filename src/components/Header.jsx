import React from 'react';

const Header = ({ name }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <header className="flex flex-col justify-between mb-5">
        <div>
          <h2 className="font-bold tracking-wide uppercase text-4xl">{name}</h2>
        </div>
        <div>
          <ul className="flex items-center justify-end flex-wrap space-x-3">
            <li>
              <button
                className="btn btn-print bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
                onClick={handlePrint}
              >
                Print
              </button>
            </li>
            {/* Uncomment the lines below if needed */}
            {/* <li>
              <button className="btn btn-send bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mx-5">
                Preview
              </button>
            </li> */}
            <li>
              <button
                className="btn btn-download bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
                onClick={handlePrint}
              >
                Download
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
