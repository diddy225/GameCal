import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class Profile extends Component {


  render() {
    return (
      <Card>
        <Card.Content>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          <Card.Meta>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Header>{this.props.username}</Card.Header>
          <Card.Meta>Joined in {this.props.year}</Card.Meta>
          <Card.Description>Waiting For: {this.props.waiting}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Profile;
