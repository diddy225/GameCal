import { createStore, combineReducers } from 'redux'

const searchReducer = (term = '', action) => {
  if(action.type === 'SEARCH_TERM') {
    return action.payload
  }
  return term
}

const reducer = combineReducers({
  search: searchReducer
});

const store = (window.devToolsExtension
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(reducer);

export default store