export const search = (term) => {
  return {
    type: 'SEARCH_TERM',
    payload: term
  }
}