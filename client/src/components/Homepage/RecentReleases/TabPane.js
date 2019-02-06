import React from "react";
import GameCard from "./GameCard";
import { Tab, Item } from "semantic-ui-react";

const TabPane = (arr, unixStamp, platform) => {
  return (
    <Tab.Pane style={{ height: "100%" }} attached={false}>
      <Item.Group divided>
        {arr
          .filter(elem => elem.date === parseInt(unixStamp))
          .filter(elem => elem.game.platforms.some(c => c.name.includes(platform)))
          .map(ele => {
            return (
              <GameCard
                key={ele.game.id}
                url={ele.game.cover.image_id}
                name={ele.game.name}
                releaseDate={ele.human}
              />
            );
          })}
      </Item.Group>
    </Tab.Pane>
  );
};
export default TabPane;
