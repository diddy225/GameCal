import React, { Component } from "react";
import { connect } from "react-redux";
import { getClickedGame } from "../../actions/index";

class GameRender extends Component {
  componentWillMount() {
    getClickedGame(window.location.search.substring(1));
  }

  render() {
    return <div>GAME RENDER PAGE</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { game: state.getGame };
};

export default connect(
  mapStateToProps,
  { getClickedGame }
)(GameRender);
