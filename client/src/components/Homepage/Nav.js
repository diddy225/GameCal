import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { Button, Menu } from "semantic-ui-react";

const headerFont = {
  fontFamily: "Major Mono Display, monospace",
  fontSize: "5em",
  margin: '0 0 0 10px',
  padding: 0
};

const Nav = props => (
  <Menu
    fixed={props.fixed ? "top" : null}
    inverted={!props.fixed}
    pointing={!props.fixed}
    secondary={!props.fixed}
    borderless={true}
  >
    <Link to="/"><Menu.Item content="GameCal" style={headerFont}/></Link>
    {props.authenticated ? (
      <Menu.Item position="right">
        <SearchInput />
        <Link to="/dashboard">
          <Button
            inverted={!props.fixed}
            style={{ marginRight: "0.5em" }}
          >
            Dashboard
          </Button>
        </Link>
        <Link to="/logout">
          <Button inverted={!props.fixed} color="red">
            Logout
          </Button>
        </Link>
      </Menu.Item>
    ) : (
      <Menu.Item position="right">
        <Link to="/login">
          <Button
            inverted={!props.fixed}
            color='green'
            style={{ marginRight: "0.5em" }}
          >
            Log in
          </Button>
        </Link>
        <Link to="/signup">
          <Button inverted={!props.fixed}>
            Sign up
          </Button>
        </Link>
      </Menu.Item>
    )}
  </Menu>
);
export default Nav;
