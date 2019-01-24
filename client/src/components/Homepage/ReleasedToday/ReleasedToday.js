import React, { Component } from "react";
import $ from "axios";
import GamesContainer from "./GamesContainer";

class ReleasedToday extends Component {
  state = {
    switchCoverIds: null,
    xboxCoverIds: null,
    playstationCoverIds: null
  };

  getSwitchCovers = () => {
    try {
      return $.get("/api/switch");
    } catch (err) {
      console.log(err.response.data);
    } 
  };

  getXboxCovers = () => {
    try {
      return $.get("/api/xbox");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  getPlaystationCovers = () => {
    try {
      return $.get("/api/playstation");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  componentDidMount() {
    this.mounted = true;
    this.props.toggleAuthenticateStatus()
    this.getSwitchCovers().then(res => {
      if(this.mounted) {
        if(typeof res.data === 'string'){
          console.log(res.data)
        } else {
          this.setState({ switchCoverIds: res.data});
        }
      }
    });
    this.getXboxCovers().then(res => {
      if(this.mounted) {
        if(typeof res.data === 'string') {
          console.log(res.data)
        } else {
          this.setState({ xboxCoverIds: res.data});
        }
      }
    });
    this.getPlaystationCovers().then(res => {
      if(this.mounted) {
        if(typeof res.data === 'string') {
          console.log(res.data)
        } else {
          this.setState({ playstationCoverIds: res.data});
        }
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { switchCoverIds, playstationCoverIds, xboxCoverIds } = this.state 
    return (
      <div>
        <GamesContainer 
          color="red"
          name="nintendo switch" 
          coverIds={!switchCoverIds ? null : switchCoverIds}
        />
        <GamesContainer 
          color="green"
          name="xbox" 
          coverIds={!xboxCoverIds ? null : xboxCoverIds}
        />
        <GamesContainer 
          color="blue"
          name="playstation" 
          coverIds={!playstationCoverIds ? null : playstationCoverIds}
        />
      </div>
    );
  }
}

export default ReleasedToday;
