export default (state = [], action) => {
  switch (action.type) {
    case 'GET_CLICKED_GAME':
      return action.payload
    default:
      return state
  }
}