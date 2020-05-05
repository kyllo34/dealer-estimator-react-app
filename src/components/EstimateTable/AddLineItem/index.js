import React from 'react';
import './AddLineItem.scss'
import { connect } from 'react-redux'
import { PlusSquareFill } from 'react-bootstrap-icons';

const mapStateToProps = (state) => {
  return {
    lineItems: state.lineItems
  }
}

const AddLineItem = () => {
  return (
      <tr className= "Add-Line-Item">
        <td></td>
        <td><input type="text" placeholder="Description" /></td>
        <td><input type="number" min="0" step="0.01" placeholder="Cost" /></td>
        <td><input type="number" min="0" step="1" placeholder="Quantity"/></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><PlusSquareFill /></td>
      </tr>
  )
}

export default connect(mapStateToProps)(AddLineItem);