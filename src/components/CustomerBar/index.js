import React from 'react';
import './CustomerBar.scss';
import { useForm } from 'react-hook-form'
import { Form, Col, Button } from 'react-bootstrap';

const CustomerBar = () => {
  return (
    <div className="Customer-Bar">
      <div className="customer-info">Customer Info:</div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
        </Form.Row>
        
      </Form>
    </div>
  )
}

export default CustomerBar;