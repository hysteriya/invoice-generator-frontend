import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

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
  check_numeric,
  check_alpha,
  check_required,
  error
}) => {
  return (
    <div className='grid grid-cols-2 gap-8 my-8 bg-gray-50 p-8 rounded-lg shadow-md'>
      <div className='col-span-1'>
        <div className='mb-6'>
          <label htmlFor='invoiceName' className='block text-lg mb-2'>
            Enter Invoice Name:
          </label>
          <input
            type='text'
            id='invoiceName'
            name='invoiceName'
            placeholder='Name'
            onKeyDown={check_alpha}
            onFocus={(e) => { check_required(e, 'invoiceName'); }}
            onKeyUp={(e) => { check_required(e, 'invoiceName'); }}
            value={invoiceName}
            onChange={(e) => { setInvoiceName(e.target.value); }}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${error && error.invoiceName ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {error && error.invoiceName && <p className="text-red-500 mt-2">{error.invoiceName}</p>}
        </div>
        <div className='mb-6'>
          <label htmlFor='invoiceAddress' className='block text-lg mb-2'>
            Enter Invoice Address:
          </label>
          <input
            type='text'
            id='invoiceAddress'
            name='invoiceAddress'
            placeholder='Address'
            value={invoiceAddress}
            onFocus={(e) => { check_required(e, 'invoiceAddress'); }}
            onKeyUp={(e) => { check_required(e, 'invoiceAddress'); }}
            onChange={(e) => { setInvoiceAddress(e.target.value); }}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${error && error.invoiceAddress ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {error && error.invoiceAddress && <p className="text-red-500 mt-2">{error.invoiceAddress}</p>}
        </div>
        <div className='mb-6'>
          <label htmlFor='invoicePhone' className='block text-lg'>
            Enter Invoice Phone:
          </label>
          <PhoneInput
            international
            defaultCountry='IN'
            value={invoicePhone}
            onFocus={(e) => { check_required(e, 'invoicePhone'); }}
            onKeyUp={(e) => { check_required(e, 'invoicePhone'); }}
            onChange={(value) => { setInvoicePhone(value); }}
            className={`w-full border-b-2 focus:outline-none focus:border-blue-500 ${error && error.invoicePhone ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {error && error.invoicePhone && <p className="text-red-500 mt-2">{error.invoicePhone}</p>}
        </div>
        <div className='mb-6'>
          <label htmlFor='invoiceMail' className='block text-lg mb-2'>
            Enter Invoice Email:
          </label>
          <input
            type='email'
            id='invoiceMail'
            name='invoiceMail'
            placeholder='Mail'
            value={invoiceMail}
            onFocus={(e) => { check_required(e, 'invoiceMail'); }}
            onKeyUp={(e) => { check_required(e, 'invoiceMail'); }}
            onChange={(e) => { setInvoiceMail(e.target.value); }}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${error && error.invoiceMail ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {error && error.invoiceMail && <p className="text-red-500 mt-2">{error.invoiceMail}</p>}
        </div>
      </div>

      <div className='col-span-1'>
        <div className='mb-6'>
          <label htmlFor='totalDue' className='block text-lg mb-2'>
            Enter Total Due:
          </label>
          <input
            type='number'
            min='0'
            id='totalDue'
            name='totalDue'
            placeholder='Due'
            onKeyDown={check_numeric}
            onFocus={(e) => { check_required(e, 'totalDue'); }}
            onKeyUp={(e) => { check_required(e, 'totalDue'); }}
            value={totalDue}
            onChange={(e) => { setTotalDue(e.target.value); }}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${error && error.totalDue ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {error && error.totalDue && <p className="text-red-500 mt-2">{error.totalDue}</p>}
        </div>
        <div className='mb-6'>
          <label htmlFor='bankName' className='block text-lg mb-2'>
            Enter Bank Name:
          </label>
          <input
            type='text'
            id='bankName'
            name='bankName'
            placeholder='Bank Name'
            onKeyDown={check_alpha}
            value={bankName}
            onFocus={(e) => { check_required(e, 'bankName'); }}
            onKeyUp={(e) => { check_required(e, 'bankName'); }}
            onChange={(e) => { setBankName(e.target.value); }}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${error && error.bankName ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {error && error.bankName && <p className="text-red-500 mt-2">{error.bankName}</p>}
        </div>
        <div className='mb-6'>
          <label htmlFor='country' className='block text-lg mb-2'>
            Enter Country:
          </label>
          <input
            type='text'
            id='country'
            name='country'
            placeholder='Country'
            value={country}
            onFocus={(e) => { check_required(e, 'country'); }}
            onKeyUp={(e) => { check_required(e, 'country'); }}
            onChange={(e) => { setCountry(e.target.value); }}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${error && error.country ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {error && error.country && <p className="text-red-500 mt-2">{error.country}</p>}
        </div>
        <div className='mb-6'>
          <label htmlFor='ifsc' className='block text-lg mb-2'>
            Enter IFSC:
          </label>
          <input
            type='text'
            id='ifsc'
            name='ifsc'
            placeholder='IFSC'
            value={ifsc}
            onKeyDown={check_numeric}
            onFocus={(e) => { check_required(e, 'ifsc'); }}
            onKeyUp={(e) => { check_required(e, 'ifsc'); }}
            onChange={(e) => { setIfsc(e.target.value); }}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${error && error.ifsc ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {error && error.ifsc && <p className="text-red-500 mt-2">{error.ifsc}</p>}
        </div>
      </div>
    </div>
  );
};


export default InvoiceBillForm;
