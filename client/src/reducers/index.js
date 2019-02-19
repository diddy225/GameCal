import { combineReducers } from 'redux'
import searchTermReducer from './searchTermReducer'
import searchReducer from './searchReducer'
import recentlyReleasedReducer from './recentlyReleasedReducer'
import releasedGamesReducer from './releasedGamesReducer'
import getGameReducer from './getGameReducer'
import getFavoritesReducer from './getFavoritesReducer'
import favoritesReducer from './favoritesReducer'

const reducers = combineReducers({
  searchTerm: searchTermReducer,
  searchResults: searchReducer,
  recentlyReleased: recentlyReleasedReducer,
  releasedGames: releasedGamesReducer,
  getGame: getGameReducer,
  favoriteAddedMessage: favoritesReducer,
  favoriteGames: getFavoritesReducer
});


export default reducers