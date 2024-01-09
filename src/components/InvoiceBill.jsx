import React from 'react';

const InvoiceBill = ({
  invoiceName,
  invoiceAddress,
  invoicePhone,
  invoiceMail,
  totalDue,
  bankName,
  country,
  ifsc,
}) => {
  return (
    <div className="my-10">
      <div className="invoice-bill flex flex-col md:flex-row justify-between">
        <div className="invoice mb-4 md:mr-4 w-full md:w-3/4">
          <h2 className="font-bold mb-2">Invoice to:</h2>
          <p className="mb-2">{invoiceName}</p>
          <p className="mb-2 whitespace-pre-line max-w-[150px]">{invoiceAddress}</p>
          <p className="mb-2">{invoicePhone}</p>
          <p>{invoiceMail}</p>
        </div>
        <div className="bill w-full md:w-1/2 self-end text-right md:text-right">
          <h2 className="font-bold mb-2">Bill to:</h2>
          <p className="mb-2">
            <span className="block">Total Due: {totalDue}</span>
          </p>
          <p className="mb-2">
            <span className="block">Bank Name: {bankName}</span>
          </p>
          <p className="mb-2">
            <span className="block">Country: {country}</span>
          </p>
          <p>
            <span className="block">IFSC: {ifsc}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceBill;
