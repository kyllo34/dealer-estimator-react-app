import React from 'react';
import { connect } from 'react-redux';
import { XCircleFill, PlusCircleFill } from 'react-bootstrap-icons';
import { updateLineItem, deleteLineItem, createLineItem } from '../../../actions'

const mapStateToProps = state => {
  return {
    lineItems: state.lineItems,
  }
}

const mapDispatchToProps = {
  updateLineItem,
  deleteLineItem,
  createLineItem
}

const LineItem = ({ index, lineItem, updateLineItem, deleteLineItem, createLineItem, lineItems }) => {
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <th><input type="text" placeholder="Description" defaultValue={lineItem.description} onInput={e => updateLineItem({_id: lineItem._id, property:'description', value: e.target.value})}/></th>
      <th>$<input type="number" min="0" step="0.01" placeholder="Cost" defaultValue={lineItem.partCost}  onInput={e => updateLineItem({_id: lineItem._id, property:'partCost', value: e.target.value})}/></th>
      <th><input type="number" min="0" step="1" placeholder="Quantity" defaultValue={lineItem.quantity}  onInput={e => updateLineItem({_id: lineItem._id, property:'quantity', value: e.target.value})}/></th>
      <th><input type="text" placeholder="Part Number" defaultValue={lineItem.partNumber} onInput={e => updateLineItem({_id: lineItem._id, property:'partNumber', value: e.target.value})} /></th>
      <th placeholder="Cost">${lineItem.partCost * lineItem.quantity}</th>
      <th><input type="number" min="0" step="1" placeholder="Labor" defaultValue={lineItem.laborHours} onInput={e => updateLineItem({_id: lineItem._id, property:'laborHours', value: e.target.value})} /></th>
      <th>${lineItem.laborHours * 160}</th>
      <th>${lineItem.partCost * lineItem.quantity + lineItem.laborHours * 160}</th>
      <th>
        {index === lineItems.length - 1 
          ? <PlusCircleFill role="button" onClick={createLineItem} />
          : <XCircleFill role="button" onClick={() => deleteLineItem(lineItem._id)}/>
        }
      </th>
    </tr> 
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LineItem)