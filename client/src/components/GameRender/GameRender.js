import React, { Component } from "react";
import { connect } from "react-redux";
import { getClickedGame, favoriteGame } from "../../actions/index";
import { Image, Placeholder, Container, Item, Label, Button } from 'semantic-ui-react' 
import './index.css'

const headerStyle = {
  fontSize:'2.5rem', 
  color:'#fff',
  marginTop:'20px',
  textShadow: '3px 3px 0 #000'
}

class GameRender extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMsg: false
    }
  }

  componentDidMount() {
    this.props.getClickedGame(window.location.search.substring(1));
  }

  componentWillUnmount() {
    this.props.getClickedGame('');
  }

  favorite = (e) => {
    e.preventDefault()
    const id = this.props.game[0].id
    this.props.favoriteGame(id)
    this.setState({
      showMsg: true
    });
    setTimeout(() => {
      this.setState({
        showMsg: false
      });
    }, 700)
  }

  addedGame = () => {
    
  }

  render() {
    return (
      <Container fluid>
      {!this.props.game.length ?
        <Placeholder fluid>
          <Placeholder.Image style={{height:'500px'}}/>
        </Placeholder>
        :
        <div>
        <Image fluid style={{height:'500px'}}className='background-image' src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big_2x/${this.props.game[0].screenshots[0].image_id}.jpg` }/>
        <Item.Group style={{height: '0px'}}>
          <Item className='item-position'>
            <Image style={{height:'350px', width:'250px'}} src={`https://images.igdb.com/igdb/image/upload/t_cover_big_2x/${this.props.game[0].cover.image_id}.jpg`} />
            <Item.Content>
              <Item.Header style={headerStyle}>{this.props.game[0].name}</Item.Header>
              <Item.Meta style={{color:'#fff', fontSize:'1.5em'}}>Released: {this.props.game[0].release_dates[0].human}</Item.Meta>
              <Item.Meta> 
                <Button 
                  size="small"
                  onClick={this.favorite}
                  color={"green"}
                  >
                    {"FOLLOW"}
                </Button>
                <span>{this.state.showMsg ? "Game Added!"  : ''}</span>
              </Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
        
        <Container text textAlign='justified' style={{position:'relative'}}>
          <h1>Description</h1>  
          <p>{this.props.game[0].summary}</p>
          <div>{this.props.game[0].platforms.map((platform, i ) => <Label key={i}>{platform.name}</Label>)}</div>
        </Container>
        <Container style={{marginTop: '100px'}}fluid textAlign='center'>
          <Image.Group size='big'>
            {this.props.game[0].screenshots.map((image, i) => <Image key={i} src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big_2x/${image.image_id}.jpg`}/> )}
          </Image.Group>
        </Container>
        </div>
      }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    game: state.getGame,
    favAddedMsg: state.favoriteAddedMessage
  };
};

export default connect(
  mapStateToProps,
  { favoriteGame , getClickedGame}
)(GameRender);
