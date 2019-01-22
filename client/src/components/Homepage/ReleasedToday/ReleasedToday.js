import React, { Component } from "react";
import { Container, Loader } from "semantic-ui-react";
import $ from "axios";
import Header from "./Header";
import GameCard from './GameCard.js'


class ReleasedToday extends Component {
  state = {
    switchCoverIds: null,
    xboxCoverIds: null,
    playstationCoverIds: null
  };

  getCovers = () => {
    try {
      return $.get("/api/switch/releasedToday");
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.mounted = true;
    this.props.toggleAuthenticateStatus()
    this.getCovers().then(res => {
      if(this.mounted) {
        this.setState({ switchCoverIds: res.data});
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div>
        <Container style={ {height: '550px', marginTop: '50px'} }>
          <Header
            systemTitle="Nintendo Switch" 
            name="nintendo switch"
          />
          {!this.state.switchCoverIds ? <div>No Games Releasing Today</div> : (
            <div style={{display: 'flex', alignItems: 'center'}}>
              {this.state.switchCoverIds.map(imgId => !imgId ? <Loader active inline /> : <GameCard key={imgId} id={imgId}/>)}
            </div>
          )}
        </Container>
        <Container style={ {height: '550px'} }>
          <Header 
            systemTitle="Xbox One"
            name="xbox"
          />
          {!this.state.xboxCoverIds ? <div>No Games Releasing Today</div> : (
            <div>

            </div>
          )}
        </Container>
        <Container style={ {height: '550px'} }>
          <Header 
            systemTitle="Playstation 4" 
            name="playstation"
          />
          {!this.state.playstationCoverIds ? <div>No Games Releasing Today</div> : (
            <div>

            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default ReleasedToday;
