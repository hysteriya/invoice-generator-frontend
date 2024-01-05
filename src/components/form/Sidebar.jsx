import React from 'react';
//import * as Yup from 'yup';
import ReactToPrint from 'react-to-print';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

const Sidebar = ({ showInvoice,
    setShowInvoice, name,
    address, invoice, dateDue, dateIssue,
    invoiceName,
    invoiceAddress,
    invoicePhone,
    invoiceMail,
    totalDue,
    bankName,
    country,
    ifsc,
    item, description, cost, quantity,
    notes, setNotes,
    validationErrors, setValidationErrors, downloadPDF, pdfRef, validateForm }) => {




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


    // // VALIDATION SCHEMA
    // const validationSchema = Yup.object().shape({
    //     name: Yup.string().required('Name is required'),
    //     address: Yup.string().required('Address is required'),
    //     invoice: Yup.string().required('Invoice is required'),
    //     invoiceName: Yup.string().required('Invoice Name is required'),
    //     invoiceAddress: Yup.string().required('Invoice Address is required'),
    //     invoicePhone: Yup.string().required('Invoice Phone is required'),
    //     invoiceMail: Yup.string().email('Invalid Email').required('Invoice Email is required'),

    //     totalDue: Yup.number().required('Total Due is required'),
    //     bankName: Yup.string().required('Bank Name is required'),
    //     country: Yup.string().required('Country is required'),
    //     ifsc: Yup.string().required('IFSC is required'),
    //     // item: Yup.string().required('Item is required'),
    //     // description: Yup.string().required('Description is required'),
    //     // cost: Yup.number().required('Cost is required'),
    //     // quantity: Yup.number().required('Quantity is required'),
    // });

    // const validateForm = async () => {
    //     try {
    //         const formData = {
    //             name,
    //             address,
    //             invoice,
    //             dateDue,
    //             dateIssue,
    //             invoiceName,
    //             invoiceAddress,
    //             invoicePhone,
    //             invoiceMail,

    //             totalDue,
    //             bankName,
    //             country,
    //             ifsc,

    //             item, description, cost, quantity,

    //             notes, setNotes,

    //             // item,
    //             // description,
    //             // cost,
    //             // quantity,
    //         };

    //         await validationSchema.validate(formData, { abortEarly: false });
    //         // Validation successful, proceed with other actions or set state
    //         setShowInvoice(true);
    //         setValidationErrors({});

    //     } catch (error) {
    //         if (error instanceof Yup.ValidationError) {
    //             const validationErrors = {};
    //             error.inner.forEach((e) => {
    //                 validationErrors[e.path] = e.message;
    //             });
    //             // Handle validation errors, e.g., display error messages
    //             console.error('Validation Error:', validationErrors);
    //             setValidationErrors(validationErrors);
    //         }
    //     }
    // };

    //PREVIEW
    // const handlePreview = async (event) => {
    //     //event.preventDefault();
    //     // const errors = await validateForm();
    //     // setValidationErrors(errors);
    //     // 
    //     validateForm();
    // };

    //PREVIEW
    const handlePreview=()=>{
        const isValid= validateForm();
        if (isValid){
            setShowInvoice(true);
        }
    }







    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col border-r shadow-sm w-60 bg-gray-200 fixed right-0 top-0">
                <h1 className="font-bold text-center my-6 text-xl">ACTIONS</h1>
                <div className="p-4 flex flex-col items-center">
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
                    {/* <button
                        className="btn btn-action bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mb-4 w-40"
                        onClick={handlePrint}
                    >
                        Print
                    </button> */}

                    {showInvoice ?
                        <>
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
