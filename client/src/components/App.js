import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Dashboard from "./Dashboard/Dashboard"
import SearchInput from "./Homepage/SearchInput";
import Login from "./Login/Login";
import Results from "./Results/Results"
import Signup from "./Signup/Signup"
import Auth from "../utils/Auth";
import JumboTron from './Homepage/Jumbotron'
import LogoutFunction from './LogoutFunction'
import { PrivateRoute, PropsRoute, LoggedOutRoute } from './Routes'

class App extends Component {
  state = {
    authenticated: false
  }

  componentDidMount() {
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus = () => {
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <Router>
        <div>
          <JumboTron SearchInput={SearchInput} authenticated={this.state.authenticated}/>
          <PropsRoute exact path="/" component={Homepage} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
          <PrivateRoute path="/results" component={Results}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={this.toggleAuthenticateStatus}/>
          <LoggedOutRoute path="/signup" component={Signup}/>
          <Route path="/logout" toggleAuthenticateStatus={this.toggleAuthenticateStatus} component={LogoutFunction}/>
      </div>
      </Router>
    );
  }
}

export default App;
