import React from 'react'

const NotesForm = ({ notes, setNotes, validationError }) => {
  return (
    <div>
      <div className='text-center mb-8'>
        <h1 className='text-xl font-bold text-black-500'>NOTES</h1>
      </div>
      <div className='flex flex-col items-center'>
        <label htmlFor='text' className='text-lg mb-2'>Add Notes:</label>
        <input
          type='text'
          id='text'
          name='text'
          placeholder='Name'
          className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        {validationError && <p className='text-red-500 mt-2'>{validationError.notes}</p>}
      </div>
    </div>
  )
}

export default NotesForm