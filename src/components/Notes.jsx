import React from 'react'

const Notes = ({setShowInvoice, notes}) => {

  const handleButtonCLick=()=>{
      setShowInvoice(false);
  }

  return (
    <>
    <label>Notes:</label>
    <label>{notes}</label>
    <div className='flex'>
      <button className='justify-self-center bg-blue-500 font-bold py-2 px-5 rounded shadow border-2 border-blue-500 hover:bg-blue-400 transition-all duration-300' onClick={handleButtonCLick}>Edit Information</button>
    </div>

    </>
)
}

export default Notes