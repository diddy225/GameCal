import React, { Component } from "react";
import { connect } from "react-redux";
import { getSearch } from '../../actions/'
import { Item, Segment, Label } from 'semantic-ui-react' 
import moment from 'moment'

const headerStyle = {
  color:'#ccc', 
  marginTop: '7.5px'
}

class Results extends Component {
  state = {
    searchResults: []
  };

  renderItemCard(id, imageID, gameName, gameDescription, system, date) { 
    const availableConsole = system.map(system => system.name)
    return (
      <Item key={id}>
        <Item.Image as='a' size='medium' src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${imageID}.jpg`} />

        <Item.Content>
          <Item.Header as='a'>{gameName}</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
            {gameDescription}
          </Item.Description>
          <Item.Extra>
          {availableConsole.map((system, i) => <Label key={i}>{system}</Label>)}
          <Label>RELEASED: {moment.unix(date).format("MM/DD/YYYY")}</Label>
        </Item.Extra>
        </Item.Content>
      </Item>
    )
  }

  render() {
    return (
      <Segment>
        <h2 style={headerStyle}>{this.props.results.length} RESULTS FOR: {this.props.searchTerm ? this.props.searchTerm : null}</h2>
        <Item.Group divided>
        {this.props.results.length !== 0 ? 
          this.props.results.map(game => this.renderItemCard(game.id, game.cover.image_id, game.name, game.summary, game.platforms, game.first_release_date))
          : null}
        </Item.Group>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return { 
    results: state.searchResults,
    searchTerm: state.searchTerm
  };
};

export default connect(mapStateToProps, { getSearch })(Results);
