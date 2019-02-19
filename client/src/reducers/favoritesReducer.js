export default (state = '', action) => {
  switch (action.type) {
    case 'FAVORITE_GAMES':
      return action.payload
    default:
      return state
  }
} 