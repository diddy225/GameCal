import React from 'react'
import GameCard from './GameCard'
import moment from 'moment'
import { Container, Loader, Header, Icon } from 'semantic-ui-react'

const styleContainer = {display: 'flex', flexWrap:'wrap', justifyContent:'center'}
const month = moment().format('MMMM');
const day = moment().format('Do')

const GamesContainer = (props) => (
  <Container style={ {height: '500px', marginTop: '50px'} }>
  <Header 
    size="huge"
    textAlign='center'
  >
  <Icon fitted color={props.color} name={props.name}/> RELEASES FOR {month.toUpperCase()} {day.toUpperCase()}
  </Header>
  {!props.coverIds ? <div>No Games Releasing Today</div> : (
    <Container fluid style={styleContainer}>
      {props.coverIds.map(imgId => !imgId ? <Loader active inline /> : <GameCard key={imgId} id={imgId}/>)}
    </Container>
  )}
</Container>
)

export default GamesContainer