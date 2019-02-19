import axios from 'axios'
import _ from 'lodash'

export const search = (term) => {
  return {
    type: 'SEARCH_TERM',
    payload: term
  }
}

export const getFavorites = () =>  async dispatch => {
  const response = await axios.post('/api/get_favorites', { _id:localStorage.getItem('_id') });

  dispatch({ type: 'GET_FAVORITES', payload: response.data});
};

export const favoriteGame = (gameId) => async dispatch => {
  const response = await axios.put('/api/favorites', {_id:localStorage.getItem('_id'), game: gameId});

  dispatch({ type: 'FAVORITE_GAMES', payload: response.data});
};

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

export const getClickedGame = (id) => async dispatch => {
  if(id === '') {
    return dispatch({type: 'GET_CLICKED_GAME', payload: {reset: null}})
  }
  const response = await axios.get(`/api/get_game/${id}`);
  dispatch({type: 'GET_CLICKED_GAME', payload: response.data})
}