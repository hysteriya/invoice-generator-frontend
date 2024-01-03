import React, { useState, useRef } from "react";
import Details from "./components/Details";
// import Footer from "./components/Footer";
//import Header from "./components/Header";
import InvoiceBill from "./components/InvoiceBill";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Form from "./components/form/Form";
import Sidebar from "./components/form/Sidebar";
// import ReactToPrint from 'react-to-print';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


function App() {
  //INVOICE STATE
  const [showInvoice, setShowInvoice] = useState(false);

  // STATE VARIABLES
  const [name, setName] = useState("");
  const [logo, setLogo] = useState();

  const [address, setAddress] = useState("");
  const [invoice, setInvoice] = useState("");
  const [dateIssue, setDateIssue] = useState("");
  const [dateDue, setDateDue] = useState("");

  const [invoiceName, setInvoiceName] = useState("");
  const [invoiceAddress, setInvoiceAddress] = useState("");
  const [invoicePhone, setInvoicePhone] = useState("");
  const [invoiceMail, setInvoiceMail] = useState("");

  const [totalDue, setTotalDue] = useState("");
  const [bankName, setBankName] = useState("");
  const [country, setCountry] = useState("");
  const [ifsc, setIfsc] = useState("");

  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const [notes, setNotes] = useState('');

  //VALIDATION STATES
  const [validationErrors, setValidationErrors] = useState({});

  //DOWNLOAD
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight, imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(
          imgData,
          'PNG',
          imgX,
          imgY,
          imgWidth * ratio,
          imgHeight * ratio
        );
        pdf.save('invoice.pdf');;
      });
    } else {
      console.error('Invalid element provided for pdfRef');
    }
  };

  //PRINT

  

  


  return (
    <div className="App flex">
      <Sidebar
        downloadPDF={downloadPDF}
        //handlePrint={handlePrint}
        pdfRef={pdfRef}
        showInvoice={showInvoice}
        setShowInvoice={setShowInvoice}
        name={name}
        setName={setName}
        logo={logo}
        setLogo={setLogo}

        address={address}
        setAddress={setAddress}
        invoice={invoice}
        setInvoice={setInvoice}
        dateIssue={dateIssue}
        setDateIssue={setDateIssue}
        dateDue={dateDue}
        setDateDue={setDateDue}

        invoiceName={invoiceName}
        invoiceAddress={invoiceAddress}
        invoicePhone={invoicePhone}
        invoiceMail={invoiceMail}
        setInvoiceName={setInvoiceName}
        setInvoiceAddress={setInvoiceAddress}
        setInvoicePhone={setInvoicePhone}
        setInvoiceMail={setInvoiceMail}
        totalDue={totalDue}
        bankName={bankName}
        country={country}
        ifsc={ifsc}
        setTotalDue={setTotalDue}
        setBankName={setBankName}
        setCountry={setCountry}
        setIfsc={setIfsc}

        item={item}
        setItem={setItem}
        setDescription={setDescription}
        setCost={setCost}
        setQuantity={setQuantity}
        setPrice={setPrice}
        description={description}
        cost={cost}
        quantity={quantity}
        price={price}
        list={list}
        setList={setList}
        total={total}
        setTotal={setTotal}
        taxTotal={taxTotal}
        setTaxTotal={setTaxTotal}
        subTotal={subTotal}
        setSubTotal={setSubTotal}

        notes={notes}
        setNotes={setNotes}
        validationErrors={validationErrors}
        setValidationErrors={setValidationErrors} />
      {showInvoice ? //IF SHOWINVOICE IS TRUE: on successfull validation of form
        <div className="m-5 p-5 xl:max-w-6xl xl:mx-auto bg-slate-300 rounded shadow" ref={pdfRef}>
          <div>
            {/* <Header
              name={name}
              logo={logo} /> */}

            <Details
              name={name}
              logo={logo}
              address={address}
              invoice={invoice}
              dateIssue={dateIssue}
              dateDue={dateDue} />

            <InvoiceBill
              invoiceName={invoiceName}
              invoiceAddress={invoiceAddress}
              invoicePhone={invoicePhone}
              invoiceMail={invoiceMail}
              totalDue={totalDue}
              bankName={bankName}
              country={country}
              ifsc={ifsc} />


            <Table
              item={item}
              description={description}
              cost={cost}
              quantity={quantity}
              price={price}
              list={list}
              total={total}
              taxTotal={taxTotal}
              subTotal={subTotal} />

            <Notes setShowInvoice={setShowInvoice}
              notes={notes} />
            {/* <Footer /> */}
          </div>
        </div>
        : //OR SHOW THE FORM

        <div className="form m-5 p-5 xl:max-w-5xl xl:mx-auto bg-slate-300 rounded shadow">
          <Form setShowInvoice={setShowInvoice}
            name={name}
            setName={setName}
            logo={logo}
            setLogo={setLogo}

            address={address}
            setAddress={setAddress}
            invoice={invoice}
            setInvoice={setInvoice}
            dateIssue={dateIssue}
            setDateIssue={setDateIssue}
            dateDue={dateDue}
            setDateDue={setDateDue}

            invoiceName={invoiceName}
            invoiceAddress={invoiceAddress}
            invoicePhone={invoicePhone}
            invoiceMail={invoiceMail}
            setInvoiceName={setInvoiceName}
            setInvoiceAddress={setInvoiceAddress}
            setInvoicePhone={setInvoicePhone}
            setInvoiceMail={setInvoiceMail}
            totalDue={totalDue}
            bankName={bankName}
            country={country}
            ifsc={ifsc}
            setTotalDue={setTotalDue}
            setBankName={setBankName}
            setCountry={setCountry}
            setIfsc={setIfsc}

            item={item}
            setItem={setItem}
            setDescription={setDescription}
            setCost={setCost}
            setQuantity={setQuantity}
            setPrice={setPrice}
            description={description}
            cost={cost}
            quantity={quantity}
            price={price}
            list={list}
            setList={setList}
            total={total}
            setTotal={setTotal}
            taxTotal={taxTotal}
            setTaxTotal={setTaxTotal}
            subTotal={subTotal}
            setSubTotal={setSubTotal}

            notes={notes}
            setNotes={setNotes}
            validationErrors={validationErrors}
            setValidationErrors={setValidationErrors} />

        </div>
      }

    </div>
  )
}

export default App;
