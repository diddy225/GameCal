import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Item, Grid } from 'semantic-ui-react'
import GameCard from '../RecentReleases/GameCard'
import { recentReleased } from '../../../actions'

class LatestReleased extends Component {

componentDidMount() {
  this.props.recentReleased()
}

gameCardRender = () => {
 return this.props.recentReleasedList.map(elem => {
    return (
      <Grid.Column key={elem.game.id}>
      <Item.Group>
      <GameCard 
        url={elem.game.cover.image_id}
        name={elem.game.name}
        releaseDate={elem.human}
      />
      </Item.Group>
      </Grid.Column>
    )
  })
}

render() {

  return (
    <Grid celled centered columns={4}>
      {this.gameCardRender()}
    </Grid>
  )
 }
}

const mapStateToProps = (state) => {
  return {recentReleasedList: state.recentlyReleased}
}

export default connect(mapStateToProps, { recentReleased })(LatestReleased)