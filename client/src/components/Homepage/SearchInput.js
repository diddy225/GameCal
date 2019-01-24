import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class SearchInput extends Component {
  state = {
    searchTerm: ""
  };

  searchChange = e => {
    const { value } = e.target;
    this.setState({ searchTerm: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ searchTerm: "" });
    console.log(this.state.searchTerm);
  };

  render() {
    const { searchTerm } = this.state;
    return (
        <form onSubmit={this.onSubmit}>
          <Input
            style={{ width: "550px", marginRight: "250px" }}
            placeholder="Red Red Redemption, Rocket League..."
            type="text"
            icon="search"
            iconPosition="left"
            value={searchTerm}
            onChange={this.searchChange}
          />
        </form>
    );
  }
}

export default SearchInput;
