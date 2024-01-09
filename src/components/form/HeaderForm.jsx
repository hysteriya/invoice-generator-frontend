import React from 'react';

const HeaderForm = ({ name, setName, logo, setLogo, check_required, error }) => {

  function check_alpha(event) {
    var key = event.key;
    if (!((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key === 'Backspace')) {
      event.preventDefault();
    }
  }

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">Invoice Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg mb-2">
            Enter Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onKeyDown={check_alpha}
            onFocus={(e) => check_required(e, 'name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-2 border-b-2 focus:outline-none focus:border-blue-500 ${
              error && error.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {error && error.name && (
            <p className="text-red-500 mt-2">{error.name}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="logo" className="block text-lg mb-2">
            Upload Your Logo:
          </label>
          <input
            type="file"
            id="logo"
            accept="image/*"
            onChange={(e) => setLogo(URL.createObjectURL(e.target.files[0]))}
            className="w-full mb-2"
          />
          {logo && (
            <img src={logo} alt="logo" className="max-h-32 mx-auto mb-4" />
          )}
          {error && error.logo && (
            <p className="text-red-500">{error.logo}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
