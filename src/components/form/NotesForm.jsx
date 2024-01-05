import React from 'react';

const NotesForm = ({ notes, setNotes, validationError }) => {
  return (
    <div className=""
    //"max-w-md mx-auto"
    >
      <div className="bg-gray-50 p-8 rounded-lg shadow-md my-8">
        <label htmlFor="text" className="text-lg mb-2 block font-semibold">
          Add Notes:
        </label>
        <textarea
          type="text"
          id="text"
          name="text"
          placeholder="Enter your notes here"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        {validationError && (
          <p className="text-red-500 mt-2 text-sm">{validationError.notes}</p>
        )}
      </div>
    </div>
  );
};

export default NotesForm;
