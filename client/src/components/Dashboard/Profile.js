import React from "react";
import { Card, Image } from "semantic-ui-react";

const Profile = props => (
  <Card>
    <Card.Content>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
    </Card.Content>
    <Card.Content>
      <Card.Header>{props.username}</Card.Header>
      <Card.Meta>Joined in {props.year}</Card.Meta>
      <Card.Description>Waiting For: {props.waiting}</Card.Description>
    </Card.Content>
  </Card>
);

export default Profile;
