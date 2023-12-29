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
    <div>
      <div className="invoice-bill flex justify-between my-9">
        <div className="invoice w-1/2">
          <h2 className="font-bold mb-2">Invoice to:</h2>
          <p className="mb-2">{invoiceName}</p>
          <p className="mb-2">{invoiceAddress}</p>
          <p className="mb-2">{invoicePhone}</p>
          <p>{invoiceMail}</p>
        </div>
        <div className="bill w-1/2 text-right">
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
