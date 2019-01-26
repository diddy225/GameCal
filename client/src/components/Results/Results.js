import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'

const mapStateToProps = (state) => {
  return {
       formStates: getFormValues('SearchInput')(state)
  }
}

class Results extends Component {
 state = {

 }

 render() {
  const searchTerm = !this.props.formStates ? 'Results' : this.props.formStates.searchInput
  return(
    <div>
      {searchTerm}
    </div>
  )
 }
}
export default connect(mapStateToProps)(Results)