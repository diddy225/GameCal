import { combineReducers } from 'redux'
import searchTermReducer from './searchTermReducer'
import searchReducer from './searchReducer'
import recentlyReleasedReducer from './recentlyReleasedReducer'
import releasedGamesReducer from './releasedGamesReducer'
import getGameReducer from './getGameReducer'

const reducers = combineReducers({
  searchTerm: searchTermReducer,
  searchResults: searchReducer,
  recentlyReleased: recentlyReleasedReducer,
  releasedGames: releasedGamesReducer,
  getGame: getGameReducer
});


export default reducers