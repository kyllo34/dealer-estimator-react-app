import React from 'react';

const LineItem = ({ index, lineItem }) => {
  return (
    <tr key={index}>
      <th>{index}</th>
      <th>{lineItem.description}</th>
      <th>${lineItem.partCost}</th>
      <th>{lineItem.quantity}</th>
      <th>{lineItem.partNumber}</th>
      <th>${lineItem.partCost * lineItem.quantity}</th>
      <th>{lineItem.laborHours}</th>
      <th></th>
      <th></th>
      <th>Delete button</th>
    </tr> 
  )
}

export default LineItem