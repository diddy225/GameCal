import React from 'react'
import  { Container, Icon } from 'semantic-ui-react'

const style={
  height: '50px',
  backgroundColor: '#000',
  marginTop: '50px',
  color: '#fff'
}

const Footer = () => {
  return (
    <Container 
      textAlign='center'
      fluid 
      style={style}
    >
    <div style={{paddingTop:'10px'}}>
    <Icon name='copyright outline'/> Matthew Carpenter Made in Atlanta.
    </div>
    </Container>
  )
}


export default Footer