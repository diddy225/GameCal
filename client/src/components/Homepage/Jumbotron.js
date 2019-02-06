import React, { Component } from "react";
import { Segment, Visibility } from "semantic-ui-react";
import Nav from "./Nav";

class JumboTron extends Component {
  state = {
    fixed: false
  };

  hideFixedMenu = () => {
    this.setState({ fixed: false });
  };
  showFixedMenu = () => {
    this.setState({ fixed: true });
  };

  render() {
    const { fixed } = this.state;
    const { SearchInput } = this.props
    return (
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ padding: "1em 0em" }}
            vertical
          >
          <Nav 
            authenticated={this.props.authenticated} 
            fixed={fixed} 
            SearchInput={SearchInput}
          />
          </Segment>
        </Visibility>
    );
  }
}

export default JumboTron;
