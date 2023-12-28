import React from 'react'

const Table = ({list, total}) => {
  return (
    <div className='my-10'>
      <table width="100%">
        <thead>
          <tr className='bg-gray-100'>
            <td>item</td>
            <td>description</td>
            <td>cost</td>
            <td>qty</td>
            <td>price</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, item, description, cost, quantity, price }) => (
            <tr key={id}>
              <td>{item}</td>
              <td>{description}</td>
              <td>{cost}</td>
              <td>{quantity}</td>
              <td>{price}</td>
            </tr>
              ))}
        </tbody>
      </table>
      <div>
        <h2>{total}</h2>
      </div>
    </div>
  )
}

export default Table