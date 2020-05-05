import React from 'react';
import { Table } from 'react-bootstrap';
import './EstimateTable.scss'

const EstimateTable = () => {
  return (
    <div className="Estimate-Table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Part Description</th>
              <th>Cost</th>
              <th>Quantity</th>
              <th>Part Number</th>
              <th>Cost</th>
              <th>Hours of Labor</th>
              <th>Labor Cost</th>
              <th>Total Cost</th>
              <th></th>
            </tr>
            <tbody>
              <tr></tr>
            </tbody>
          </thead>
        </Table>
    </div>
  )
}

export default EstimateTable;