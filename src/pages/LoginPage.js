import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const LoginPage = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="Email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="Enter your password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default LoginPage;