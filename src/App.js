import { useState } from "react";
import Details from "./components/Details";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import InvoiceBill from "./components/InvoiceBill";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Form from "./components/form/Form";

function App() {
  //INVOICE STATE
  const [showInvoice, setShowInvoice] = useState(false);

  // STATE VARIABLES
  const [name, setName] = useState("");
  const [logo, setLogo]=useState();

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
  const [list, setList]= useState([]);
  const [total, setTotal]=useState(0);

  const [notes, setNotes]=useState('');




  return (
    <div className="App m-5 p-5 
    xl:max-w-6xl xl:mx-auto 
    bg-slate-300 rounded shadow">
      {showInvoice ? //IF SHOWINVOICE IS TRUE: on successfull validation of form
        <div>
          <Header 
          name={name}
          logo={logo} />
          
          <Details 
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
          ifsc={ifsc}/>


          <Table 
          item={item}
          description={description}
          cost={cost}
          quantity={quantity}
          price={price}
          list={list}
          total={total}/>
          <Notes setShowInvoice={setShowInvoice}
          notes={notes} />
          {/* <Footer /> */}
        </div> : //OR SHOW THE FORM
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
          
          notes={notes}
          setNotes={setNotes}/>
      }

    </div>
  )
}

export default App;
