import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';

const TableForm = ({ list, setList, total, setTotal, taxTotal, setTaxTotal, subTotal, setSubTotal, check_numeric }) => {
  //STATES
  const [item, setItem] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [quantity, setQuantity] = useState('');
  const [discount, setDiscount] = useState('');
  const [tax, setTax]=useState('');
  const [taxNumber, setTaxNumber]=useState('');
  const [price, setPrice] = useState('');
  const [isEditing, setEditing] = useState(false);
  
  //VALIDATION STATES
  const [tableValidationErrors, setTableValidationErrors] = useState({});


  //VALIDATE TABLE
  const validateTable = () => {
    const errors = {};
  
    // Validate each field
    if (!item.trim()) {
      errors.item = 'Item is required';
    }
  
    if (!description.trim()) {
      errors.description = 'Description is required';
    }
  
    if (!cost.trim()) {
      errors.cost = 'Cost is required';
    }
  
    if (!quantity.trim()) {
      errors.quantity = 'Quantity is required';
    }

    if (!discount.trim()) {
      errors.discount = 'Discount is required';
    }

    if (!tax.trim()) {
      errors.tax = 'Tax is required';
    }
    // Add additional validations for other fields as needed
    return errors;
  };
  
  
  //HANDLE SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate if all required fields are filled
    const errors = validateTable();
    setTableValidationErrors(errors);
  
    // If there are no errors, add the item to the table
    if (Object.keys(errors).length === 0) {
      addItem();
    }
  };

  
  //ADD ITEM
  const addItem = () => {
    //check if the function evokes
    console.log('handle submit')

    //list of new items
    const newItems = {
      id: uuidv4(),
      item,
      description,
      cost,
      quantity,
      discount,
      tax,
      taxNumber,
      price,
    };

    //adding itmes in list
    setList([...list, newItems]);
    clearForm();
  };

  //clearing form once the items ae added
  const clearForm = () => {
    setItem('');
    setDescription('');
    setCost('');
    setQuantity('');
    setDiscount('');
    setPrice('');
    setTax('');
    setTaxNumber('');
    setEditing(false);
  };

  //CALCULATE AMOUNT
  useEffect(() => {
    const calDiscount= (cost*quantity)*(discount/100)
    const disPrice = (cost * quantity)-calDiscount;
    const calTax= disPrice*(tax/100);
    setTaxNumber(calTax.toFixed(2) || 0);
    const calculatedPrice= disPrice+calTax;
    setPrice(calculatedPrice.toFixed(2) || 0);
  }, [cost, quantity, discount, tax]);

  // CALCULATE TOTAL
  useEffect(() => {
    let sum = 0;
    list.forEach((row) => {
      sum += isNaN(row.price) ? 0 : parseFloat(row.price);
    });
    setTotal(sum.toFixed(2));
  }, [list, setTotal]);

  // CALCULATE SUBTOTAL
  useEffect(() => {
    let st = 0;
    list.forEach((row) => {
      st += isNaN(row.cost) ? 0 : parseFloat(row.cost);
    });
    setSubTotal(st.toFixed(2));
  }, [list, setSubTotal]);

  //CALCULATE TAX
  useEffect(()=>{
    let t=0;
    list.forEach((row)=>{
      t +=isNaN(row.taxNumber) ? 0 : parseFloat(row.taxNumber);
    });
    setTaxTotal(t.toFixed(2));
  }, [list, setTaxTotal])

  // DELETE
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
  };

  // EDIT
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setEditing(true);
    setItem(editingRow.item);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setCost(editingRow.cost);
    setDiscount(editingRow.discount);
    setTax(editingRow.tax);
  };

  //INPUTCHANGE
  const handleInputChange=(field, valueSetter)=>(e)=>{
    const value = e.target.value;
    valueSetter(value);
    setTableValidationErrors((prevErrors)=>({...prevErrors, 
    [field]:undefined,}))
  }

  //CHECK APHABET
  function check_apha(event) {
    var key = event.key;
    if (!((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key === 'Backspace')) {
      event.preventDefault();
    }
  }

  return (
    <div className='mx-auto my-10 bg-gray-50 p-8 rounded-lg shadow-md'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-1'>
          <label htmlFor='item' className='block text-lg mb-2'>
            Item Name:
          </label>
          <input
            type='text'
            id='item'
            placeholder='Item'
            onKeyDown={check_apha}
            value={item}
            onChange={handleInputChange('item', setItem)}
            className={`px-4 py-2 border ${tableValidationErrors && tableValidationErrors.item ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500 w-full`}
          />
          
        </div>
        <div className='description col-span-1'>
          <label htmlFor='description' className='block text-lg mb-2'>
            Description:
          </label>
          <input
            type='text'
            id='description'
            placeholder='Description'
            value={description}
            onKeyDown={check_apha}
            onChange={handleInputChange('description', setDescription)}
            className={`px-4 py-2 border ${tableValidationErrors && tableValidationErrors.description ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500 w-full`}
          />
          
        </div>
        <div className='grid grid-cols-6 gap-6 mx-auto col-span-2'>
          <div className='col-span-1'>
            <label htmlFor='cost' className='block text-lg mb-2'>
              Cost:
            </label>
            <input
              type='number'
              min='0'
              id='cost'
              placeholder='Cost'
              onKeyDown={check_numeric}
              className={`px-4 py-2 border ${tableValidationErrors && tableValidationErrors.cost ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500 w-full`}
              value={cost}
              onChange={handleInputChange('cost', setCost)}
            />
            
          </div>
          <div className='col-span-1'>
            <label htmlFor='quantity' className='block text-lg mb-2'>
              Quantity:
            </label>
            <input
              type='number'
              min='0'
              id='quantity'
              placeholder='Quantity'
              onKeyDown={check_numeric}
              value={quantity}
              className={`px-4 py-2 border ${tableValidationErrors && tableValidationErrors.quantity ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500 w-full`}
              onChange={handleInputChange('quantity', setQuantity)}
            />
            
          </div>
          <div className='col-span-1'>
            <label htmlFor='discount' className='block text-lg mb-2'>
              Discount(%):
            </label>
            <input
              type='number'
              min='0'
              id='discount'
              placeholder='discount'
              onKeyDown={check_numeric}
              value={discount}
              className={`px-4 py-2 border ${tableValidationErrors && tableValidationErrors.discount ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500 w-full`}
              onChange={handleInputChange('discount', setDiscount)}
            /> 
          </div>
          <div className='col-span-1'>
            <label htmlFor='tax' className='block text-lg mb-2'>
              Tax(%):
            </label>
            <input
              type='number'
              min='0'
              id='tax'
              placeholder='Tax'
              onKeyDown={check_numeric}
              value={tax}
              className={`px-4 py-2 border ${tableValidationErrors && tableValidationErrors.tax ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500 w-full`}
              onChange={handleInputChange('tax', setTax)}
            />
          </div>
          <div className='col-span-1'>
            <label htmlFor='taxNumber' className='block text-lg mb-2'>
              Tax:
            </label>
            <input
              type='number'
              min='0'
              id='taxnumber'
              placeholder='tax'
              disabled
              className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full`}
              value={taxNumber}
            />
          </div>
          <div className='col-span-1'>
            <label htmlFor='price' className='block text-lg mb-2'>
              Price:
            </label>
            <input
              type='number'
              id='price'
              placeholder='Price'
              disabled
              className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full`}
              value={price}
            />
          </div>
        </div>

        <div className='col-span-2 text-center my-2'>
          <button
            onClick={handleSubmit}
            className='bg-blue-500 font-bold py-2 px-5 rounded shadow border-2 border-blue-500 hover:bg-blue-400 transition-all duration-300'
          >
            {isEditing ? 'Update Item' : 'Add Item'}
          </button>
        </div>
      </div>

      <table width='100%' className='mt-8'>
        <thead>
          <tr className='bg-gray-100'>
            <td>Item</td>
            <td>Description</td>
            <td>Cost</td>
            <td>Quantity</td>
            <td>Discount%</td>
            <td>Tax%</td>
            <td>Tax</td>
            <td>Price</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, item, description, cost, quantity, price, discount, tax, taxNumber }) => (
            <tr key={id}>
              <td>{item}</td>
              <td>{description}</td>
              <td>{cost}</td>
              <td>{quantity}</td>
              <td>{discount}%</td>
              <td>{tax}%</td>
              <td className='taxNumber'>{taxNumber}</td>
              <td className='price'>{price}</td>
              <td>
                <button onClick={() => deleteRow(id)}>
                  <MdDeleteOutline className='text-red-500' />
                </button>
              </td>
              <td>
                <button onClick={() => editRow(id)}>
                  <MdEdit className='text-green-500' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4 text-right'>
        <h4>Sub Total:{subTotal}</h4>
        <h4>Tax:{taxTotal}</h4>
        <h2 className='font-bold'>Total: {total}</h2>
      </div>
    </div>
  );
};

export default TableForm;
