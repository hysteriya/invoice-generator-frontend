import React from 'react'

const Details = ({name, logo, address, invoice, dateIssue, dateDue }) => {
  return (
    <div>
      <section className="flex flex-cols justify-between mb-30">
        <div className="address-field">
          <div>
            <header className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <img src={logo} alt='' className="mr-3 w-12 h-12" />
                <h2 className="font-bold tracking-wide uppercase text-4xl">{name}</h2>
              </div>
            </header>
          </div>
          <p className='whitespace-pre-line max-w-[150px]'>{address}</p>
        </div>
        <div className="invoice-fied">
          <div className="number">
            <h2 className="font-bold text-2xl">Invoice #{invoice}</h2>
          </div>
          <div className="dates">
            <div className="date-issue">
              <label>Date Issued: </label>
              <label>{dateIssue}</label>
            </div>
            <div className="date-due">
              <label>Date Due: </label>
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