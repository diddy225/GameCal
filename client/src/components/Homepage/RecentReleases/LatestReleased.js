import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import GameCard from '../RecentReleases/GameCard'
import { recentReleased } from '../../../actions'

class LatestReleased extends Component {

componentDidMount() {
  this.props.recentReleased()
}

gameCardRender = () => {
 return this.props.recentReleasedList.map(elem => {
    return (
      <GameCard 
        key={elem.game.id}
        url={elem.game.cover.image_id}
        name={elem.game.name}
        releaseDate={elem.human}
        system='Xbox'
      />
    )
  })
}

render() {

  return (
    <Card.Group itemsPerRow={6}>
      {this.gameCardRender()}
    </Card.Group>
  )
 }
}

const mapStateToProps = (state) => {
  return {recentReleasedList: state.recentlyReleased}
}

export default connect(mapStateToProps, { recentReleased })(LatestReleased)