import React from 'react';

const Notes = ({ setShowInvoice, notes }) => {
  const handleButtonClick = () => {
    setShowInvoice(false);
  };

  return (
    <div className='my-8'>
      <label className='block mb-2 font-bold'>Notes:</label>
      <p className='mb-4'>{notes}</p>
      <div className='flex justify-center'>
        <button
          className='bg-blue-500 text-white font-bold py-2 px-6 rounded shadow border-2 border-blue-500 hover:bg-blue-400 transition-all duration-300'
          onClick={handleButtonClick}
        >
          Edit Information
        </button>
      </div>
    </div>
  );
};

export default Notes;
