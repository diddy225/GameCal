import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Container } from 'semantic-ui-react';

const style = {
  border: '1px solid #aaa',
  padding: '25px 50px',
  borderRadius: '5px',
  color: 'red'
}

const SignupForm = (props) => (
  <Form
    style={style} 
    onSubmit={props.handleSubmit}
  >
    {props.error.summery}
    <Form.Field>
      <Input 
        name="username"
        placeholder="Username"
        icon="user"
        iconPosition="left"
        value={props.username}
        onChange={props.inputChange}
      />
    {props.error.username}
    </Form.Field>
    <Form.Field>
      <Input 
        name="email"
        type="email"
        placeholder="Email"
        icon="mail"
        iconPosition="left"
        value={props.email}
        onChange={props.inputChange}
      />
    {props.error.email}
    </Form.Field>

    <Form.Field>
      <Input 
        name="password"
        type="password"
        placeholder="Password"
        icon="lock"
        iconPosition="left"
        value={props.password}
        onChange={props.inputChange}
      />
    {props.error.password}
    </Form.Field>
    <Form.Field>
      <Input 
        name="password2"
        type="password"
        placeholder="Confirm Password"
        icon="lock"
        iconPosition="left"
        value={props.confirm}
        onChange={props.inputChange}
      />
    {props.error.confirm}
    </Form.Field>
    <Form.Button content="Register"/>
    <Container textAlign="right"> Already a user?  <Link to="/login">
        Login Here
      </Link>
    </Container>
  </Form>
)

export default SignupForm