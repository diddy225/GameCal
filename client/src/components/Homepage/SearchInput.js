import React, { Component } from "react";
import { Input, Form } from "semantic-ui-react";
import { connect } from 'react-redux';
import { search } from '../../actions';
 
class SearchInput extends Component {
  state = {
    searchTerm: '',
  }

  inputChange = (e) => {
    const { value } = e.target
    this.setState({
      searchTerm: value
    })
  }

  inputSubmit = (e) => {
    e.preventDefault()
    const currentlocation = this.props.history.location.pathname
    this.props.search(this.state.searchTerm)
    this.setState({
      searchTerm: ''
    })
    if(currentlocation !== '/results' ){
      this.props.history.push('/results')
    }
  }

  componentWillUnmount() {
    this.setState({
      searchTerm: ''
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.inputSubmit} size='small'>
          <Input 
            icon='search'
            placeholder='Game Search...'
            value={this.state.searchTerm}
            type='text'
            onChange={this.inputChange}
            style={{width:'450px'}} 
          />
        </Form>
      </div>      
    );
  }
}
const mapStateToProps = (state) => {
  return { search: state.search }
}

export default connect(mapStateToProps, { search })(SearchInput);
