import { combineReducers } from 'redux'
import searchTermReducer from './searchTermReducer'
import searchReducer from './searchReducer'
import recentlyReleasedReducer from './recentlyReleasedReducer'
import releasedGamesReducer from './releasedGamesReducer'

const reducers = combineReducers({
  searchTerm: searchTermReducer,
  searchResults: searchReducer,
  recentlyReleased: recentlyReleasedReducer,
  releasedGames: releasedGamesReducer
});


export default reducers