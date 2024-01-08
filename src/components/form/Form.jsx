import React from 'react';
import TableForm from './TableForm';
import DetailForm from './DetailForm';
import InvoiceBillForm from './InvoiceBillForm';
import NotesForm from './NotesForm';
import HeaderForm from './HeaderForm';


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

  item, setItem, description, setDescription, cost, setCost, quantity, setQuantity, price, setPrice, list, setList, total, setTotal, taxTotal, setTaxTotal, subTotal, setSubTotal,

  notes, setNotes,
  check_numeric, check_required, error
}) => {





  return (
    <>
      <form type='submit'
      >
        <HeaderForm name={name}
          setName={setName}
          logo={logo}
          setLogo={setLogo}
          check_required={check_required}
          error={error} />
        <DetailForm
          address={address}
          setAddress={setAddress}
          invoice={invoice}
          setInvoice={setInvoice}
          dateIssue={dateIssue}
          setDateIssue={setDateIssue}
          dateDue={dateDue}
          setDateDue={setDateDue}
          check_numeric={check_numeric}
          check_required={check_required}
          error={error} />
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

          check_numeric={check_numeric}
          check_required={check_required}
          error={error}
        />
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
          taxTotal={taxTotal}
          setTaxTotal={setTaxTotal}
          subTotal={subTotal}
          setSubTotal={setSubTotal}
          check_numeric={check_numeric}
          check_required={check_required}
          error={error}
        />
        <NotesForm
          notes={notes}
          setNotes={setNotes}
          check_required={check_required}
          error={error} />

      </form>



    </>
  )
}

export default Form