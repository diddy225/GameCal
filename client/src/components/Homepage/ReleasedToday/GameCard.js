import React from "react";
import { Image } from "semantic-ui-react";

const gameStyle = {
  height: '290px', 
  width: '200px', 
  marginRight: '10px',
  border:'1px solid #ccc'
}

const GameCard = (props) => {
  return (
      <Image rounded style={gameStyle}
      src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${props.id}.jpg`}
    />
  );
};

export default GameCard
