import React, { Component } from "react";
import Profile from "./Profile";
import { Grid, Segment, Header, Item, Image } from "semantic-ui-react";

class Dashboard extends Component {
  state = {
    activeUser: ""
  };

  componentDidMount() {
    const username = localStorage.getItem("username");
    this.setState({ activeUser: username });
  }

  render() {
    const user = this.state.activeUser
      ? this.state.activeUser.toUpperCase()
      : null;
    return (
      <Grid stackable columns={2} padded>
        <Grid.Column width="three">
          <Profile username={user} year={2019} waiting={"Rocket League"} />
        </Grid.Column>
        <Grid.Column width="thirteen">
          <Segment>
            <Header>MY WAITLIST</Header>
            <Item.Group>
              <Item>
                <Item.Image as="a" size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png"/>
                <Item.Content>
                  <Item.Header as="a">Rocket League</Item.Header>
                  <Item.Meta>Description</Item.Meta>
                  <Item.Description>
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Dashboard;
