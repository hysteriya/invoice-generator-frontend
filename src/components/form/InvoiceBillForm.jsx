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
  validationError,
  setValidationErrors,
  check_numeric,
  validateEmail
}) => {
  // CLEAR ERRORS AND SETVALUE (HANDLE INPUT CHANGE)
  const handleInputChange = (fieldName, valueSetter) => (e) => {
    const value = e.target.value;
    valueSetter(value);
    const errors={...validationError};
    if (fieldName=== 'invoiceMail'){
      errors.invoiceMail=!validateEmail(value) ? 'Invalid email' : undefined
    }

    // Clear validation error for the specific field
    // setValidationErrors((prevErrors) => ({
    //   ...prevErrors,
    //   [fieldName]: undefined,
    // }));
  };

  // CHECK ALPHABET
  function check_alpha(event) {
    var key = event.key;
    if (!((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key === 'Backspace')) {
      event.preventDefault();
    }
  }

  return (
    <div className='grid grid-cols-2 gap-8 my-10 bg-gray-50 p-8 rounded-lg shadow-md my-8'>
      <section className='invoice col-span-1'>
        <div className='mb-4'>
          <label htmlFor='invoiceName' className='block text-lg mb-2'>
            Enter Invoice Name:
          </label>
          <input
            type='text'
            id='invoiceName'
            name='invoiceName'
            placeholder='Name'
            onKeyDown={check_alpha}
            className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full ${
              validationError && validationError.invoiceName ? 'border-red-500' : ''
            }`}
            value={invoiceName}
            onChange={handleInputChange('invoiceName', setInvoiceName)}
          />
          {validationError && validationError.invoiceName && (
            <p className='text-red-500 mt-2'>{validationError.invoiceName}</p>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='invoiceAddress' className='block text-lg mb-2'>
            Enter Invoice Address:
          </label>
          <input
            type='text'
            id='invoiceAddress'
            name='invoiceAddress'
            placeholder='Address'
            className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full ${
              validationError && validationError.invoiceAddress ? 'border-red-500' : ''
            }`}
            value={invoiceAddress}
            onChange={handleInputChange('invoiceAddress', setInvoiceAddress)}
          />
          {validationError && validationError.invoiceAddress && (
            <p className='text-red-500 mt-2'>{validationError.invoiceAddress}</p>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='invoicePhone' className='block text-lg mb-2'>
            Enter Invoice Phone:
          </label>
          <PhoneInput
            international
            defaultCountry='IN'
            value={invoicePhone}
            onChange={(value) => {
              setInvoicePhone(value);
            }}
          />
          {validationError && validationError.invoicePhone && (
            <p className='text-red-500 mt-2'>{validationError.invoicePhone}</p>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='invoiceMail' className='block text-lg mb-2'>
            Enter Invoice Email:
          </label>
          <input
            type='email'
            id='invoiceMail'
            name='invoiceMail'
            placeholder='Mail'
            className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full ${
              validationError && validationError.invoiceMail ? 'border-red-500' : ''
            }`}
            value={invoiceMail}
            onChange={handleInputChange('invoiceMail', setInvoiceMail)}
          />
          {validationError && validationError.invoiceMail && (
            <p className='text-red-500 mt-2'>{validationError.invoiceMail}</p>
          )}
        </div>
      </section>
      <section className='bill col-span-1'>
        <div className='mb-4'>
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
            className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full ${
              validationError && validationError.totalDue ? 'border-red-500' : ''
            }`}
            value={totalDue}
            onChange={handleInputChange('totalDue', setTotalDue)}
          />
          {validationError && validationError.totalDue && (
            <p className='text-red-500 mt-2'>{validationError.totalDue}</p>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='bankName' className='block text-lg mb-2'>
            Enter Bank Name:
          </label>
          <input
            type='text'
            id='bankName'
            name='bankName'
            placeholder='Bank Name'
            onKeyDown={check_alpha}
            className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full ${
              validationError && validationError.bankName ? 'border-red-500' : ''
            }`}
            value={bankName}
            onChange={handleInputChange('bankName', setBankName)}
          />
          {validationError && validationError.bankName && (
            <p className='text-red-500 mt-2'>{validationError.bankName}</p>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='country' className='block text-lg mb-2'>
            Enter Country:
          </label>
          <input
            type='text'
            id='country'
            name='country'
            placeholder='Country'
            className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full ${
              validationError && validationError.country ? 'border-red-500' : ''
            }`}
            value={country}
            onChange={handleInputChange('country', setCountry)}
          />
          {validationError && validationError.country && (
            <p className='text-red-500 mt-2'>{validationError.country}</p>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='ifsc' className='block text-lg mb-2'>
            Enter IFSC:
          </label>
          <input
            type='text'
            id='ifsc'
            name='ifsc'
            placeholder='IFSC'
            className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full ${
              validationError && validationError.ifsc ? 'border-red-500' : ''
            }`}
            value={ifsc}
            onChange={handleInputChange('ifsc', setIfsc)}
          />
          {validationError && validationError.ifsc && (
            <p className='text-red-500 mt-2'>{validationError.ifsc}</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default InvoiceBillForm;
