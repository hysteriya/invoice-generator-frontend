import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';
import * as Yup from 'yup';

const TableForm = ({ list, setList, total, setTotal }) => {
  const [item, setItem] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [quantity, setQuantity] = useState('');
  const [discount, setDiscount] = useState('');
  const tax=0.18;
  const [price, setPrice] = useState('');
  const [isEditing, setEditing] = useState(false);
  
  //VALIDATION STATES
  const [tableValidationErrors, setTableValidationErrors] = useState({});

  // VALIDATION SCHEMA
  const validationTableSchema = Yup.object().shape({
    item: Yup.string().required('Item is required'),
    description: Yup.string().required('Description is required'),
    cost: Yup.number('Has to be number.').required('Cost is required'),
    quantity: Yup.number('Has to be number.').required('Quantity is required'),
    discount: Yup.number('Has to be number.').required('Discount is required')
  });

  const validateTable = async () => {
    try {
      const tableData = {
        item,
        description,
        cost,
        quantity,
        discount
      };

      await validationTableSchema.validate(tableData, { abortEarly: false });
      // Validation successful, proceed with addItem()
      addItem();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const tableValidationErrors = {};
        error.inner.forEach((e) => {
          tableValidationErrors[e.path] = e.message;
        });
        // Handle validation errors, e.g., display error messages
        console.error('Validation Error:', tableValidationErrors);
        return tableValidationErrors;
      }
    }
  };

  //HANDLE SUBMIT
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = await validateTable();
    setTableValidationErrors(errors);
  };

  
  //ADD ITEM
  const addItem = () => {
    console.log('handle submit')

    const newItems = {
      id: uuidv4(),
      item,
      description,
      cost,
      quantity,
      discount,
      tax,
      price,
    };

    setList([...list, newItems]);
    clearForm();
  };

  const clearForm = () => {
    setItem('');
    setDescription('');
    setCost('');
    setQuantity('');
    setDiscount('');
    setPrice('');
    setEditing(false);
  };

  //CALCULATE AMOUNT
  useEffect(() => {
    const calDiscount= (cost*quantity)*(discount/100)
    const disPrice = (cost * quantity)-calDiscount;
    const calTax= disPrice*0.18;
    const calculatedPrice= disPrice+calTax;
    setPrice(calculatedPrice.toFixed(2) || 0);
  }, [cost, quantity, discount]);

  // CALCULATE TOTAL
  useEffect(() => {
    let sum = 0;
    list.forEach((row) => {
      sum += isNaN(row.price) ? 0 : parseFloat(row.price);
    });
    setTotal(sum.toFixed(2));
  }, [list]);

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
  };

  return (
    <div className='mx-auto my-10'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-1'>
          <label htmlFor='item' className='block text-lg mb-2'>
            Item Name:
          </label>
          <input
            type='text'
            id='item'
            placeholder='Item'
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
          />
          {tableValidationErrors && <p className='text-red-500 mt-2'>{tableValidationErrors.item}</p>}
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
            onChange={(e) => setDescription(e.target.value)}
            className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
          />
          {tableValidationErrors && <p className='text-red-500 mt-2'>{tableValidationErrors.description}</p>}
        </div>
        <div className='grid grid-cols-5 gap-6 mx-auto col-span-2'>
          <div className='col-span-1'>
            <label htmlFor='cost' className='block text-lg mb-2'>
              Cost:
            </label>
            <input
              type='number'
              id='cost'
              placeholder='Cost'
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
            {tableValidationErrors && <p className='text-red-500 mt-2'>{tableValidationErrors.cost}</p>}
          </div>
          <div className='col-span-1'>
            <label htmlFor='quantity' className='block text-lg mb-2'>
              Quantity:
            </label>
            <input
              type='number'
              id='quantity'
              placeholder='Quantity'
              value={quantity}
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
              onChange={(e) => setQuantity(e.target.value)}
            />
            {tableValidationErrors && <p className='text-red-500 mt-2'>{tableValidationErrors.quantity}</p>}
          </div>
          <div className='col-span-1'>
            <label htmlFor='discount' className='block text-lg mb-2'>
              Discount(%):
            </label>
            <input
              type='number'
              id='discount'
              placeholder='discount'
              value={discount}
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
              onChange={(e) => setDiscount(e.target.value)}
            />
            {tableValidationErrors && <p className='text-red-500 mt-2'>{tableValidationErrors.discount}</p>}
          </div>
          <div className='col-span-1'>
            <label htmlFor='gst' className='block text-lg mb-2'>
              GST:
            </label>
            <input
              type='number'
              id='GST'
              placeholder='18%'
              disabled
              value={tax}
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
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
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-full'
              value={price}
            />
          </div>
        </div>

        <div className='col-span-2 text-center my-2'>
          <button
            onClick={handleSubmit}
            className='bg-blue-500 font-bold py-2 px-5 rounded shadow border-2 border-blue-500 hover:bg-blue-400 transition-all duration-300'
          >
            {isEditing ? 'Edit Row Item' : 'Add Table Item'}
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
            <td>Discount</td>
            <td>Tax</td>
            <td>Price</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, item, description, cost, quantity, price, discount }) => (
            <tr key={id}>
              <td>{item}</td>
              <td>{description}</td>
              <td>{cost}</td>
              <td>{quantity}</td>
              <td>{discount}</td>
              <td>{tax}</td>
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
      <div className='mt-4'>
        <h2>Total: {total}</h2>
      </div>
    </div>
  );
};

export default TableForm;
