import React, { useState } from 'react';
import TableForm from './TableForm';
import DetailForm from './DetailForm';
import InvoiceBillForm from './InvoiceBillForm';
import NotesForm from './NotesForm';
// import FooterForm from './FooterForm';
import HeaderForm from './HeaderForm';
import * as Yup from 'yup';


const Form = ({ 
  //PROPS
  setShowInvoice, name, setName, logo, setLogo,
  address, setAddress, invoice, setInvoice, dateDue, setDateDue, dateIssue, setDateIssue,
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

  item, setItem, description, setDescription, cost, setCost, quantity, setQuantity, price, setPrice, list, setList, total, setTotal, taxTotal, setTaxTotal,

  notes, setNotes
  }) => {

  //VALIDATION STATES
  const [validationErrors, setValidationErrors] = useState({});

  // VALIDATION SCHEMA
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    invoice: Yup.string().required('Invoice is required'),
    // Add validation rules for other fields
    // ...
    totalDue: Yup.number().required('Total Due is required'),
    bankName: Yup.string().required('Bank Name is required'),
    country: Yup.string().required('Country is required'),
    ifsc: Yup.string().required('IFSC is required'),
    // item: Yup.string().required('Item is required'),
    // description: Yup.string().required('Description is required'),
    // cost: Yup.number().required('Cost is required'),
    // quantity: Yup.number().required('Quantity is required'),
  });

  const validateForm = async () => {
    try {
      const formData = {
        name,
        address,
        invoice,
        dateDue,
        dateIssue,
        invoiceName,
        invoiceAddress,
        invoicePhone,
        invoiceMail,

        totalDue,
        bankName,
        country,
        ifsc,

        item, description, cost, quantity,

        notes, setNotes

        // item,
        // description,
        // cost,
        // quantity,
      };

      await validationSchema.validate(formData, { abortEarly: false });
      // Validation successful, proceed with other actions or set state
      setShowInvoice(true);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        // Handle validation errors, e.g., display error messages
        console.error('Validation Error:', validationErrors);
        return validationErrors;
      }
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = await validateForm();
    setValidationErrors(errors);
    // 
  };




  return (
    <>
      <form type='submit' onSubmit={handleSubmit}>
        <HeaderForm name={name} setName={setName} validationError={validationErrors.name} logo={logo} setLogo={setLogo} />
        <DetailForm
          address={address}
          setAddress={setAddress}
          invoice={invoice}
          setInvoice={setInvoice}
          dateIssue={dateIssue}
          setDateIssue={setDateIssue}
          dateDue={dateDue}
          setDateDue={setDateDue}
          validationError={validationErrors} />
        <InvoiceBillForm
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
          validationError={validationErrors} />
        <TableForm
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
          //validationError={validationErrors}
          taxTotal={taxTotal}
          setTaxTotal={setTaxTotal}
           
          />
        <NotesForm 
          notes={notes}
          setNotes={setNotes}/>
        {/* <FooterForm /> */}

        <div className='col-span-2 text-center my-2'>
          <button className='bg-red-500 font-bold py-2 px-5 rounded shadow border-2 border-red-500 hover:bg-red-400 transition-all duration-300'
            //onClick={handleButtonCLick} 
            type='submit'
          >Preview</button>
        </div>

      </form>



    </>
  )
}

export default Form