import axios from 'axios'

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

export const recentReleased = () => async dispatch => {
  const response = await axios.get('/api/recently_released');
  
  dispatch({ type: 'GET_RECENTLY_RELEASED', payload: response.data })
}