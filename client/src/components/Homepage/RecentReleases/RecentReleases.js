import React, { Component } from "react";
import LatestReleased from './LatestReleased'
import { connect } from 'react-redux'
import { releasedGames } from '../../../actions'
import { Container, Header, Segment, Tab } from 'semantic-ui-react'
import { xboxPanes, playstationPanes, switchPanes } from './panes'

const mainPanes = [
  { menuItem: 'Xbox One', render: (props) => <Tab.Pane><Tab games={props.games} defaultActiveIndex={1} menu={{ secondary: true, pointing: true }} panes={xboxPanes} /></Tab.Pane> },
  { menuItem: 'Playstation 4', render: (props) => <Tab.Pane><Tab games={props.games} defaultActiveIndex={1} menu={{ secondary: true, pointing: true }} panes={playstationPanes} /></Tab.Pane> },
  { menuItem: 'Nintendo Switch', render: (props) => <Tab.Pane><Tab games={props.games} defaultActiveIndex={1} menu={{ secondary: true, pointing: true }} panes={switchPanes} /></Tab.Pane> },
]

class RecentReleases extends Component {

  componentDidMount() {
    this.props.toggleAuthenticateStatus()
    this.props.releasedGames()
  }

  render() {
    return (
        <Container fluid style={{padding:'0 50px'}}>
          <Header style={{marginTop:'20px'}}dividing as='h1'>Released This Week</Header>
          <Tab games={this.props.games} menu={{ fluid: true, vertical: true, tabular: true }} panes={mainPanes} />
          <Header dividing as='h1'>Released Last Week</Header>
          <Segment>
            <LatestReleased />
          </Segment>
        </Container>
    ); 
  }
}

const mapStateToProps = (state) => {
  return {games: state.releasedGames}
}

export default connect(mapStateToProps, { releasedGames })(RecentReleases);
