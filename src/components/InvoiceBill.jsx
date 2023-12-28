import React from 'react'

const InvoiceBill = ({invoiceName, invoiceAddress, invoicePhone, invoiceMail,
        totalDue, bankName, country, ifsc}) => {
    return (
        <div>
            <div className="invoice-bill flex justify-between my-9">
                <div className="invoice justify-start">
                    <h2 className="font-bold">Invoice to:</h2>
                    <label className='block'>{invoiceName}</label>
                    <label className='block'>{invoiceAddress}</label>
                    <label className='block'>{invoicePhone}</label>
                    <label className='block'>{invoiceMail}</label>
                </div>
                <div className="bill justify-end">
                    <h2 className="font-bold">Bill to:</h2>
                    <label><span className="block">Total Due:{totalDue}</span></label>
                    <label><span className="block">Bank Name:{bankName}</span></label>
                    <label><span className="block">Country:{country}</span></label>
                    <label><span className="block">IFSC:{ifsc}</span></label>
                </div>
            </div>
        </div>
    )
}

export default InvoiceBill