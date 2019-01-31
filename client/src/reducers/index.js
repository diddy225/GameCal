import { combineReducers } from 'redux'
import searchTermReducer from './searchTermReducer'
import searchReducer from './searchReducer'
import recentlyReleasedReducer from './recentlyReleasedReducer'

const reducers = combineReducers({
  searchTerm: searchTermReducer,
  searchResults: searchReducer,
  recentlyReleased: recentlyReleasedReducer
});


export default reducers