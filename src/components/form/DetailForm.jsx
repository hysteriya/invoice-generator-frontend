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
  check_numeric,
  check_required,
  error,
}) => {
  return (
    <div className="grid grid-cols-2 gap-8 my-8 bg-gray-50 p-8 rounded-lg shadow-md">
      <div className="col-span-1">
        <div className="mb-6">
          <label htmlFor="address" className="block text-lg mb-2">
            Enter Your Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            onFocus={(e) => check_required(e, 'address')}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${
              error && error.address ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error && error.address && (
            <p className="text-red-500 mt-2">{error.address}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="dateIssue" className="block text-lg mb-2">
            Enter Your Issue Date:
          </label>
          <input
            type="date"
            id="dateIssue"
            name="dateIssue"
            placeholder="Issue Date"
            value={dateIssue}
            onChange={(e) => setDateIssue(e.target.value)}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${
              error && error.dateIssue ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error && error.dateIssue && (
            <p className="text-red-500 mt-2">{error.dateIssue}</p>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <div className="mb-6">
          <label htmlFor="invoice" className="block text-lg mb-2">
            Enter Your Invoice Number:
          </label>
          <input
            type="number"
            min="0"
            id="invoice"
            name="invoice"
            placeholder="Invoice Number"
            onKeyDown={check_numeric}
            onFocus={(e) => check_required(e, 'invoice')}
            value={invoice}
            onChange={(e) => setInvoice(e.target.value)}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${
              error && error.invoice ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error && error.invoice && (
            <p className="text-red-500 mt-2">{error.invoice}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="dateDue" className="block text-lg mb-2">
            Enter Your Due Date:
          </label>
          <input
            type="date"
            id="dateDue"
            name="dateDue"
            placeholder="Due Date"
            value={dateDue}
            onChange={(e) => setDateDue(e.target.value)}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${
              error && error.dateDue ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error && error.dateDue && (
            <p className="text-red-500 mt-2">{error.dateDue}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailForm;
