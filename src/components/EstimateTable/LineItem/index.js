import React from 'react';
import { connect } from 'react-redux';
import { XCircleFill } from 'react-bootstrap-icons';
import { updateLineItem } from '../../../actions'

const mapStateToProps = state => {
  return {
    lineItems: state.lineItems,
  }
}

const mapDispatchToProps = {
  updateLineItem
}

const LineItem = ({ index, lineItem, updateLineItem }) => {
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <th><input type="text" placeholder="Description" defaultValue={lineItem.description} onInput={e => updateLineItem({_id: lineItem._id, property:'description', value: e.target.value})}/></th>
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

export default connect(mapStateToProps, mapDispatchToProps)(LineItem)