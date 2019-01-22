import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchInput = () => {
  return (
    <Input 
    style={{width: '550px', marginRight:'250px'}}
    placeholder="Red Red Redemption, Rocket League" 
    icon="search"
    iconPosition='left'
  />
  )
}

export default SearchInput