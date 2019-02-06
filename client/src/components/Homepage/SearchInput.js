import React, { Component } from "react";
import { Input, Form } from "semantic-ui-react";
import { connect } from 'react-redux';
import { search, getSearch } from '../../actions';
 
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
    this.props.getSearch(this.state.searchTerm)
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
            placeholder='Search for a game...'
            value={this.state.searchTerm}
            type='text'
            onChange={this.inputChange}
            style={{marginLeft:'200px', width:'350px'}} 
          />
        </Form>
      </div>      
    );
  }
}
const mapStateToProps = (state) => {
  return { 
    searchTerm: state.searchTerm,
  }
}

export default connect(mapStateToProps, { search, getSearch })(SearchInput);
