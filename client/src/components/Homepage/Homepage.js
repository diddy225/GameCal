import React from 'react'
import RecentReleases from './RecentReleases/RecentReleases';

const Homepage = (props) => {
  return (
    <div>
      <RecentReleases toggleAuthenticateStatus={props.toggleAuthenticateStatus}/>
    </div>
  )
}

export default Homepage