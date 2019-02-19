import React from "react";
import { Link } from 'react-router-dom'
import { Item, Label, Button, Rating } from "semantic-ui-react";

const FavoriteCard = props => {
  const url = `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${props.url}.jpg`;
  return (
    <Item>
    <Item.Image as={Link} to={`/games/?${props.id}`} size='small' src={url} />

    <Item.Content>
      <Item.Header as={Link} to={`/games/?${props.id}`}>{props.name}</Item.Header>
      <Item.Meta>Description</Item.Meta>
      <Item.Description>
        {props.description}
      </Item.Description>
      <Item.Meta>{props.platforms.map((platform, i) => <Label key={i}>{platform.name}</Label>)}</Item.Meta>
      <Rating icon="heart" defaultRating={props.rating.toString()[0]} maxRating={10}/>
      <Button size="tiny" color="red" floated="right">Remove Favorite</Button>
    </Item.Content>
  </Item>
  );
};

export default FavoriteCard;