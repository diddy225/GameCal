import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import API from "../../utils/API";
import Auth from "../../utils/Auth";

const style = {
  width: "400px",
  marginTop: "75px"
};

class Login extends Component {
  state = {
      errors: {},
      email: "",
      password: ""
    };

  handleFormSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    API.login({ email, password })
      .then(res => {
        Auth.authenticateUser(res.data.token, res.data.user.username, res.data.message, res.data.user._id);
        this.props.toggleAuthenticateStatus();
        this.props.history.push('/dashboard');
      })
      .catch(( {response} ) => {
        const errors = response.data.errors ? response.data.errors : {};
        errors.summery = response.data.message;
        this.setState({
          errors
        })
      })
  };

  inputHandleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentWillUnmount() {
    this.setState({
      errors: {}
    });
  }

  render() {
    const { email, password, errors } = this.state;
    return (
      <Container style={style}>
        <LoginForm
          inputChange={this.inputHandleChange}
          handleSubmit={this.handleFormSubmit}
          email={email}
          password={password}
          errors={errors}
        />
      </Container>
    );
  }
}

export default Login;
