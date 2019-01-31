import React from "react";
import { Image, Reveal, Card } from "semantic-ui-react";

const GameCard = props => {
  const url = `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${props.url}.jpg`;
  return (
    <Card>
      <Reveal animated="move">
        <Reveal.Content visible>
          <Image rounded as="a" src={url} />
        </Reveal.Content>
        <Reveal.Content hidden>
          <Card.Content textAlign="center">
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>
              <span className="date">{props.releaseDate}</span>
            </Card.Meta>
            <Card.Description>{props.system}</Card.Description>
          </Card.Content>
        </Reveal.Content>
      </Reveal>
    </Card>
  );
};

export default GameCard;
