import React from 'react';

const Table = ({ list, total }) => {
  return (
    <div className='my-10'>
      <table className="w-full">
        <thead className='bg-gray-100'>
          <tr>
            <th className='px-4'>Item</th>
            <th className='px-4'>Description</th>
            <th className='px-4'>Cost</th>
            <th className='px-4'>Quantity</th>
            <th className='px-4'>Discount</th>
            <th className='px-4'>Tax</th>
            <th className='px-4'>Price</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, item, description, cost, quantity, price, discount, tax }) => (
            <tr key={id} className='border-b text-center'>
              <td className='py-2 px-4'>{item}</td>
              <td className='py-2 px-4'>{description}</td>
              <td className='py-2 px-4'>{cost}</td>
              <td className='py-2 px-4'>{quantity}</td>
              <td className='py-2 px-4'>{discount}%</td>
              <td className='py-2 px-4'>{tax}%</td>
              <td className='py-2 px-4'>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4'>
        <h2 className='font-bold text-xl'>Total: {total}</h2>
      </div>
    </div>
  );
};

export default Table;
