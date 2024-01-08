import React from 'react';

const HeaderForm = ({ name, setName, logo, setLogo, check_required, error}) => {

  
  function check_apha(event) {
    var key = event.key;
    if (!((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key === 'Backspace')) {
      event.preventDefault();
    }
  }

  
  
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
      <h1 className='text-3xl font-bold text-gray-700 mb-4'>Invoice Generator</h1>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <label htmlFor='name' className='text-lg mb-2'>Enter Your Name: </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            onKeyDown={check_apha}
            onKeyUp={(e)=>{check_required(e, 'name')}}
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          {error && error.name && <p style={{ color: 'red' }}>{error.name}</p>}
        </div>
        <div className="col-span-1">
          <label htmlFor='logo' className='text-lg mb-2'>Upload Your Logo:</label>
          <input
            type='file'
            id='logo'
            accept='image/*'
            // any image file
            className='mx-auto mb-2'
            onChange={(e) => setLogo(URL.createObjectURL(e.target.files[0]
              // temporary url and file selected first
              ))}
          />
          {logo && <img src={logo} alt='logo' className='max-h-32 mx-auto mb-4' />}
        </div>
      </div>
      <div className='flex flex-col items-center'>
      </div>
    </div>
  );
};

export default HeaderForm;
