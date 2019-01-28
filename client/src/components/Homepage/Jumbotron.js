import React, { Component } from "react";
import { Segment, Responsive, Visibility } from "semantic-ui-react";
import Nav from "./Nav";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

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
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
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
      </Responsive>
    );
  }
}

export default JumboTron;
