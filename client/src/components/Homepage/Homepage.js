import React from 'react'
import ReleasedToday from './ReleasedToday/ReleasedToday'

const Homepage = (props) => {
  return (
    <div>
      <ReleasedToday toggleAuthenticateStatus={props.toggleAuthenticateStatus}/>
    </div>
  )
}

export default Homepage