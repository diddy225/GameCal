import React from "react";
import { Image, Card } from "semantic-ui-react";

const GameCard = (props) => {
  return (
    <Card raised={true}>
      <Image
      size='big'
      src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${props.id}.jpg`}
    />
    </Card>
  );
};

export default GameCard
