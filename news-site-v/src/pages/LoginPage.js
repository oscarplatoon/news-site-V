import React, { useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';



const AddArticlePage = () => {
  
  return (
    <div>
      <h1 className="m-3">Login Page</h1>
      {
        <Form className="m-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" name='email' placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" name='password' placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    }
    </div>
  );
}
export default AddArticlePage;