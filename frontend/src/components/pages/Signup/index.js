import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

function Signup() {
  return (
    <div className="App">
      <h2> Welcome to the Signup Page</h2>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="fname" placeholder="Enter firstname" />
          </Form.Group>

          <Form.Group as={Col} >
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lname" placeholder="Enter lastname" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email address" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control  type="password" name="confirm_password" />
        </Form.Group>



        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
