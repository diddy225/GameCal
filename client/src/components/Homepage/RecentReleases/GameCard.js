import React from "react";
import { Link } from 'react-router-dom'
import { Item } from "semantic-ui-react";

const GameCard = props => {
  const url = `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${props.url}.jpg`;
  return (
    <Item>
      <Item.Image size='small' as={Link} to={`/games/?${props.id}`} src={url}/>
      <Item.Content>
      <Item.Header as='a'>{props.name}</Item.Header>
      <Item.Description>
        <span>{props.releaseDate.toUpperCase()}</span>
      </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default GameCard;