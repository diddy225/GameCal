import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Container } from 'semantic-ui-react';

const style = {
  border: '1px solid #aaa',
  padding: '25px 50px',
  borderRadius: '5px'
}

const LoginForm = (props) => (
  <Form 
    style={style}
    onSubmit={props.handleSubmit}
  >
    <Form.Field>
      <label>Email</label>
      <Input 
        name="email"
        placeholder="Email"
        value={props.email}
        onChange={props.inputChange}
      />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <Input 
        name="password"
        type="password"
        placeholder="Password"
        value={props.password}
        onChange={props.inputChange}
      />
    </Form.Field>
    <Form.Button content="Login"/>
    <Container textAlign="right"> Not a user?  <Link to="/signup">
        Register Here
      </Link>
    </Container>
  </Form>
)

export default LoginForm