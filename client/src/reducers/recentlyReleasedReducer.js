export default (state = [], action) => {
  switch (action.type) {
    case 'GET_RECENTLY_RELEASED':
      return action.payload
    default: 
      return state
  }
};