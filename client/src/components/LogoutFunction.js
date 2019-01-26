
import React from 'react';
import Auth from '../utils/Auth';
import { Loader } from 'semantic-ui-react'


class LogoutFunction extends React.Component {
  state = {
    isLoading: false
  }

  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    this.setState({isLoading: !this.state.isLoading})
    // change the current URL to / after logout
    this.props.history.push('/logout');
    setTimeout(() => {
      this.setState({isLoading: !this.state.isLoading})
      this.props.history.push('/');
    }, 1000)
  }

  render() {
    const style ={
      position: 'absolute',
      top: '50%',
      left: '50%'
    }
    return (
        <Loader 
          style={style} 
          size='massive'
          active={this.state.isLoading} 
          inline='centered'
        />
    )
  }
}

export default LogoutFunction;