import React, { Component } from "react";
import { connect } from "react-redux";
import { getFavorites } from "../../actions/index";
import FavoriteCard from './FavoriteCard'
import Profile from "./Profile";
import { Grid, Segment, Header, Item } from "semantic-ui-react";

class Dashboard extends Component {
  state = {
    activeUser: ""
  };

  componentDidMount() {
    const username = localStorage.getItem("username");
    this.setState({ activeUser: username });
    this.props.getFavorites()
  }

  render() {
    console.log(this.props)
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
            <Header>My Favorite Games</Header>
            {this.props.favorites.length !== 0 ?
            <Item.Group divided>
              {this.props.favorites.map(game => {
                return (
                  <FavoriteCard 
                  key={game.id}
                  url={game.cover.image_id}
                  id={game.id}
                  name={game.name}
                  description={game.summary}
                  platforms={game.platforms}
                  rating={game.total_rating}
                  /> 
                )
              })}
            </Item.Group>
            :
            <div>You have no Favorites</div>}
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favoriteGames
  }
}

export default connect(
  mapStateToProps,
  {getFavorites}
)(Dashboard);
