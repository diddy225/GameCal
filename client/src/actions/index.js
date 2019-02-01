import axios from 'axios'
import _ from 'lodash'

export const search = (term) => {
  return {
    type: 'SEARCH_TERM',
    payload: term
  }
}

export const getSearch = (term) => async dispatch => {
  const response = await axios.post('/api/results', {term});

  dispatch({ type: 'GET_RESULTS', payload: response.data });
}

export const recentReleased = () => dispatch => _recentReleased(dispatch);
const _recentReleased = _.memoize(async (dispatch) => {
  const response = await axios.get('/api/recently_released');
  
  dispatch({ type: 'GET_RECENTLY_RELEASED', payload: response.data })
});

export const releasedGames = () => dispatch => _releasedGames(dispatch);
const _releasedGames = _.memoize(async (dispatch) => {
  const response = await axios.get('/api/released_games');

  dispatch({type: 'GET_RELEASED_GAMES', payload: response.data});
});