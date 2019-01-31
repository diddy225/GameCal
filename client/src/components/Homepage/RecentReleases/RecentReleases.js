import React, { Component } from "react";
import LatestReleased from './LatestReleased'
import M from 'moment'
import { Container, Header, Segment, Tab } from 'semantic-ui-react'

const today = M().format("MM/DD")

const todayPanes = [
  { menuItem: 'Yesterday', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: `${today}`, render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tommorow', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

const panes = [
  { menuItem: 'Xbox One', render: () => <Tab.Pane><Tab defaultActiveIndex={1} menu={{ secondary: true, pointing: true }} panes={todayPanes} /></Tab.Pane> },
  { menuItem: 'Playstation 4', render: () => <Tab.Pane><Tab defaultActiveIndex={1} menu={{ secondary: true, pointing: true }} panes={todayPanes} /></Tab.Pane> },
  { menuItem: 'Nintendo Switch', render: () => <Tab.Pane><Tab defaultActiveIndex={1} menu={{ secondary: true, pointing: true }} panes={todayPanes} /></Tab.Pane> },
]


class RecentReleases extends Component {

  componentDidMount() {
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Container>
        <Header as='h1'>Latest Releases</Header>
        <Segment>
          <LatestReleased />
        </Segment>
        <Header dividing as='h1'>Game Releases</Header>
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
      </Container>
    ); 
  }
}

export default RecentReleases;
