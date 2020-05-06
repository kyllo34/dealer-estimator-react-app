import React from 'react';
import { XCircleFill } from 'react-bootstrap-icons';

const LineItem = ({ index, lineItem }) => {
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <th><input type="text" placeholder="Description" defaultValue={lineItem.description} /></th>
      <th>$<input type="number" min="0" step="0.01" placeholder="Cost" defaultValue={lineItem.partCost}/></th>
      <th><input type="number" min="0" step="1" placeholder="Quantity" defaultValue={lineItem.quantity}/></th>
      <th>{lineItem.partNumber}</th>
      <th>${lineItem.partCost * lineItem.quantity}</th>
      <th>{lineItem.laborHours}</th>
      <th>${lineItem.laborHours * 160}</th>
      <th>${lineItem.partCost * lineItem.quantity + lineItem.laborHours * 160}</th>
      <th><XCircleFill /></th>
    </tr> 
  )
}

export default LineItem