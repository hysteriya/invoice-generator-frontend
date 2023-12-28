import React from 'react';

const HeaderForm = ({ name, setName, validationError }) => {

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-black-500'>INVOICE GENRATOR</h1>
      </div>
      <div className='flex flex-col items-center'>
        <label htmlFor='text' className='text-lg mb-2'>Enter Your Name:</label>
        <input
          type='text'
          id='text'
          name='text'
          placeholder='Name'
          className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {validationError && <p className='text-red-500 mt-2'>{validationError}</p>}
      </div>
    </div>
  );
};

export default HeaderForm;
