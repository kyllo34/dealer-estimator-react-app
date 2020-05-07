import React from 'react';
import { Form, Col } from 'react-bootstrap';
import './VehicleBar.scss'

const VehicleBar = () => {
  return (
    <div className="Vehicle-Bar">
      <div className="vehicle-info">Vehicle:</div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridVin">
            <Form.Label>VIN</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form.Row>
        
        <Form.Row>
          <Form.Group as={Col} controlId="formGridMake">
            <Form.Label>Make</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridModel">
            <Form.Label>Model</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridYear">
            <Form.Label>Year</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridColor">
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  )
}

export default VehicleBar