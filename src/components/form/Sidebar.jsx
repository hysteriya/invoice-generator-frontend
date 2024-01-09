import React from 'react';
//import * as Yup from 'yup';
import ReactToPrint from 'react-to-print';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

const Sidebar = ({ showInvoice,
    setShowInvoice, name, logo,
    address, invoice, dateDue, dateIssue,
    invoiceName,
    invoiceAddress,
    invoicePhone,
    invoiceMail,
    totalDue,
    bankName,
    country,
    ifsc,

    downloadPDF, pdfRef, setError }) => {



    //VALIDATE FORM
    function validateForm() {
        const errors = {}

        if (!name.trim()) {
            errors.name = 'Required.';
        }
        if (!logo) {
            errors.logo = 'Required.'
        }
        if (!address.trim()) {
            errors.address = 'Required.';
        }
        if (!invoice.trim()) {
            errors.invoice = 'Required.';
        }
        // if (!dateDue.trim()) {
        //     errors.dateDue = 'Required.';
        // }
        // if (!dateIssue.trim()) {
        //     errors.dateIssue = 'Required.';
        // }
        if (!invoiceName.trim()) {
            errors.invoiceName = 'Required.';
        }
        if (!invoiceAddress.trim()) {
            errors.invoiceAddress = 'Required.';
        }
        if (!invoicePhone.trim()) {
            errors.invoicePhone = 'Required.';
        }
        if (!invoiceMail.trim()) {
            errors.invoiceMail = 'Required.';
        }
        if (!totalDue.trim()) {
            errors.totalDue = 'Required.'
        }
        if (!bankName.trim()) {
            errors.bankName = 'Required.';
        }
        if (!country.trim()) {
            errors.country = 'Required.';
        }
        if (!ifsc.trim()) {
            errors.ifsc = 'Required.';
        }
        setError(errors);
        return Object.keys(errors).length === 0;



    }

    const handlePrint = () => {
        if (pdfRef) {
            pdfRef.current.print();
        }
    };


    // const handlePrint = () => {
    //     window.print();
    // };

    const handleButtonClick = () => {
        setShowInvoice(false);
    };




    //PREVIEW
    const handlePreview = () => {
        const isValid = validateForm();
        if (isValid) {
            setShowInvoice(true);
        }
    }


    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col border-r shadow-sm w-60 bg-gray-200 fixed right-0 top-0">
                <h1 className="font-bold text-center my-6 text-xl">ACTIONS</h1>
                <div className="p-4 flex flex-col items-center">
                    {/* <button
                        className="btn btn-action bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mb-4 w-40"
                        onClick={handlePrint}
                    >
                        Print
                    </button> */}

                    {showInvoice ?
                        <>
                            <ReactToPrint trigger={() => (
                                <button
                                    className="btn btn-action bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mb-4 w-40"
                                    onClick={handlePrint}
                                >
                                    Print
                                </button>
                            )}
                                content={() => pdfRef.current}
                            />
                            <button
                                className="btn btn-action bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mb-4 w-40"
                                onClick={() => { handlePreview(); downloadPDF(); }}
                            >
                                Download
                            </button>
                            <button
                                className="btn btn-action bg-blue-500 text-white font-bold py-2 px-6 rounded shadow border-2 border-blue-500 hover:bg-blue-400 transition-all duration-300 mb-4 w-40"
                                onClick={handleButtonClick}
                            >Edit Information</button>
                        </>
                        :
                        <button className='bg-red-500 font-bold py-2 px-5 rounded shadow border-2 border-red-500 hover:bg-red-400 transition-all duration-300 w-40'
                            onClick={handlePreview}
                            type='submit'
                        >Preview</button>}
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
