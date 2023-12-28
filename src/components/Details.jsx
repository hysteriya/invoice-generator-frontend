import React from 'react'

const Details = ({address, invoice, dateIssue, dateDue}) => {
  return (
    <div>
        <section className="flex flex-cols justify-between mb-5">
          <div className="address-field">
            <h2>Address</h2>
            <label>{address}</label>
          </div>
          <div className="invoice-fied">
            <div className="number">
            <h2 className="font-bold text-2xl">Invoice #</h2>
            <label>{invoice}</label>
            </div>
            <div className="dates">
              <div className="date-issue">
                <label>Date Issued:</label>
                <label>{dateIssue}</label>
              </div>
              <div className="date-due">
                <label>Date Due:</label>
                <label>{dateDue}</label>
              </div>
            </div>
          </div>
          {/* <input type="text" name="text" id="text" placeholder="text" required /> */}
        </section>
    </div>
  )
}

export default Details