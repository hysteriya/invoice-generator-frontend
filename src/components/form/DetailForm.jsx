import React from 'react';

const DetailForm = ({
  address,
  setAddress,
  invoice,
  setInvoice,
  dateIssue,
  setDateIssue,
  dateDue,
  setDateDue,
  validationError
}) => {
  return (
    <div className='grid grid-cols-2 gap-4 my-10 bg-gray-50 p-8 rounded-lg shadow-md'>
      <div className='col-span-1'>
        <div className='mb-4'>
          <label htmlFor='address' className='block text-lg mb-2'>Enter Your Address:</label>
          <input
            type='text'
            id='address'
            name='address'
            placeholder='Address'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.address}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='dateIssue' className='block text-lg mb-2'>Enter Your Issue Date:</label>
          <input
            type='date'
            id='dateIssue'
            name='dateIssue'
            placeholder='Issue Date'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={dateIssue}
            onChange={(e) => setDateIssue(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.dateIssue}</p>}
        </div>
      </div>
      <div className='col-span-1'>
        <div className='mb-4'>
          <label htmlFor='invoice' className='block text-lg mb-2'>Enter Your Invoice Number:</label>
          <input
            type='text'
            id='invoice'
            name='invoice'
            placeholder='Invoice Number'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={invoice}
            onChange={(e) => setInvoice(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.invoice}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='dateDue' className='block text-lg mb-2'>Enter Your Due Date:</label>
          <input
            type='date'
            id='dateDue'
            name='dateDue'
            placeholder='Due Date'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={dateDue}
            onChange={(e) => setDateDue(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.dateDue}</p>}
        </div>
      </div>
    </div>
  );
};

export default DetailForm;
