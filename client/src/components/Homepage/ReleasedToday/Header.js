import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import moment from 'moment'

const SectionHeader = (props) => {
  const month = moment().format('MMMM');
  const day = moment().format('Do')
  return (
  <Header 
    size="huge"
    textAlign='center'
  >
      <Icon fitted name={props.name}/>
      {props.systemTitle} Releases for {month} {day}
  </Header>
  )
}

export default SectionHeader