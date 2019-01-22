import React, { Component } from "react";
import { Container } from 'semantic-ui-react'
import  SignupForm from './SignupForm'
import API from '../../utils/API';


const style = {
  width: '400px',
  marginTop: '75px'
}

class Signup extends Component {
  state = {
    errors: {},
    username: '',
    email: '',
    password: '',
    password2: ''
  };

  handleFormSubmit = (e) => {
    e.preventDefault()
    const { username, email, password, password2 } = this.state
    API.signUp({ username, email, password, password2 })
    .then(res => {
      localStorage.setItem('successMessage', res.data.message);
      this.props.history.push('/login');
      this.setState({
        errors: {}
      })
    }).catch(err => {
        const errors = err.response.data.errors ? err.response.data.errors : {}
        errors.summery = err.response.data.message
        this.setState({
          errors
        })
      });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, email, password, password2, errors } = this.state
    return (
      <Container style={style}>
        <SignupForm 
          inputChange={this.handleInputChange}
          handleSubmit={this.handleFormSubmit}
          username={username}
          email={email}
          password={password}
          confirm={password2}
          error={errors}
        />
      </Container>
    );
  }
}

export default Signup;