import React from 'react';
import logo from './logo.png';


const HeaderForm = ({ name, setName, validationError }) => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
      <img src={logo} alt='Logo' className='mx-auto mb-8'></img>
      <h1 className='text-3xl font-bold text-gray-700 mb-4'>Invoice Generator</h1>
      <div className='flex flex-col items-center'>
        <label htmlFor='name' className='text-lg mb-2'>Enter Your Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Name'
          className={`px-4 py-2 border ${validationError ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {validationError && <p className='text-red-500 mt-2'>{validationError}</p>}
      </div>
    </div>
  );
};

export default HeaderForm;
