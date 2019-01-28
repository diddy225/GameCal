import React, { Component } from "react";
import { connect } from "react-redux";
import API from "../../utils/API";

class Results extends Component {
  state = {
    searchResults: []
  };

  searched = () => {
    if (this.props.search) {
      API.search({ term: this.props.search }).then(res => {
          this.setState({searchResults: res.data});
      });
    }
  }

  render() {
    console.log(this.state.searchResults)
    this.searched()
    return (
      <div>
        You searched for: {this.props.search ? this.props.search : "nothing"}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { search: state.search };
};

export default connect(mapStateToProps)(Results);
