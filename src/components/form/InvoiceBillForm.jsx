import React from 'react';

const InvoiceBillForm = ({
  invoiceName,
  invoiceAddress,
  invoicePhone,
  invoiceMail,
  setInvoiceName,
  setInvoiceAddress,
  setInvoicePhone,
  setInvoiceMail,

  totalDue,
  bankName,
  country,
  ifsc,
  setTotalDue,
  setBankName,
  setCountry,
  setIfsc,
  validationError
}) => {
  return (
    <div className='grid grid-cols-2 gap-8 my-10'>
      <section className='invoice col-span-1'>
        <div className='mb-4'>
          <label htmlFor='invoiceName' className='block text-lg mb-2'>Enter Invoice Name:</label>
          <input
            type='text'
            id='invoiceName'
            name='invoiceName'
            placeholder='Name'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={invoiceName}
            onChange={(e) => setInvoiceName(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.invoiceName}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='invoiceAddress' className='block text-lg mb-2'>Enter Invoice Address:</label>
          <input
            type='text'
            id='invoiceAddress'
            name='invoiceAddress'
            placeholder='Address'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={invoiceAddress}
            onChange={(e) => setInvoiceAddress(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.invoiceAddress}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='invoicePhone' className='block text-lg mb-2'>Enter Invoice Phone:</label>
          <input
            type='number'
            id='invoicePhone'
            name='invoicePhone'
            placeholder='Number'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={invoicePhone}
            onChange={(e) => setInvoicePhone(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.invoicePhone}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='invoiceMail' className='block text-lg mb-2'>Enter Invoice Email:</label>
          <input
            type='email'
            id='invoiceMail'
            name='invoiceMail'
            placeholder='Mail'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={invoiceMail}
            onChange={(e) => setInvoiceMail(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.invoiceMail}</p>}
        </div>
      </section>
      <section className='bill col-span-1'>
        <div className='mb-4'>
          <label htmlFor='totalDue' className='block text-lg mb-2'>Enter Total Due:</label>
          <input
            type='number'
            id='totalDue'
            name='totalDue'
            placeholder='Due'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={totalDue}
            onChange={(e) => setTotalDue(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.totalDue}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='bankName' className='block text-lg mb-2'>Enter Bank Name:</label>
          <input
            type='text'
            id='bankName'
            name='bankName'
            placeholder='Bank Name'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.bankName}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='country' className='block text-lg mb-2'>Enter Country:</label>
          <input
            type='text'
            id='country'
            name='country'
            placeholder='Country'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.country}</p>}
        </div>
        <div className='mb-4'>
          <label htmlFor='ifsc' className='block text-lg mb-2'>Enter IFSC:</label>
          <input
            type='text'
            id='ifsc'
            name='ifsc'
            placeholder='IFSC'
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
          />
          {validationError && <p className='text-red-500 mt-2'>{validationError.ifsc}</p>}
        </div>
      </section>
    </div>
  );
};

export default InvoiceBillForm;
