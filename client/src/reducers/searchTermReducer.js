const searchTermReducer = (term = '', action) => {
  if(action.type === 'SEARCH_TERM') {
    return action.payload
  }
  return term
}

export default searchTermReducer