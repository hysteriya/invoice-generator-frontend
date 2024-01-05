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
  validationError,
  setValidationErrors, check_numeric
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
            className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full ${validationError && validationError.address ? 'border-red-500' : ''}`}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              // Clear validation error for 'address' field
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                address: undefined,
              }));
            }}
          />
          {validationError && validationError.address && <p className='text-red-500 mt-2'>{validationError.address}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='dateIssue' className='block text-lg mb-2'>Enter Your Issue Date:</label>
          <input
            type='date'
            id='dateIssue'
            name='dateIssue'
            placeholder='Issue Date'
            className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full ${validationError && validationError.dateIssue ? 'border-red-500' : ''}`}
            value={dateIssue}
            onChange={(e) => {
              setDateIssue(e.target.value);
              // Clear validation error for 'dateIssue' field
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                dateIssue: undefined,
              }));
            }}
          />
          {validationError && validationError.dateIssue && <p className='text-red-500 mt-2'>{validationError.dateIssue}</p>}
        </div>
      </div>
      <div className='col-span-1'>
        <div className='mb-4'>
          <label htmlFor='invoice' className='block text-lg mb-2'>Enter Your Invoice Number:</label>
          <input
            type='number'
            min='0'
            id='invoice'
            name='invoice'
            placeholder='Invoice Number'
            onKeyDown={check_numeric}
            className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full ${validationError && validationError.invoice ? 'border-red-500' : ''}`}
            value={invoice}
            onChange={(e) => {
              setInvoice(e.target.value);
              // Clear validation error for 'invoice' field
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                invoice: undefined,
              }));
            }}
          />
          {validationError && validationError.invoice && <p className='text-red-500 mt-2'>{validationError.invoice}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='dateDue' className='block text-lg mb-2'>Enter Your Due Date:</label>
          <input
            type='date'
            id='dateDue'
            name='dateDue'
            placeholder='Due Date'
            className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full ${validationError && validationError.dateDue ? 'border-red-500' : ''}`}
            value={dateDue}
            onChange={(e) => {
              setDateDue(e.target.value);
              // Clear validation error for 'dateDue' field
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                dateDue: undefined,
              }));
            }}
          />
          {validationError && validationError.dateDue && <p className='text-red-500 mt-2'>{validationError.dateDue}</p>}
        </div>
      </div>
    </div>
  );
};

export default DetailForm;
