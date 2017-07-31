function searchReducer(state = {}, action) {
  const type = action.type;
  switch(type) {
    case 'SEARCH_SUBMIT':
      return {
        ...state,
        query: action.query,
      };
      break;
    case 'SEARCH_RESULTS':
      return {
        ...state,
        results: action.results
      }
      break;
    case 'SEARCH_ERROR':
      return {
        ...state,
        error: action.error,
      }
      break;
    default:
      return state;
  }
}

export default searchReducer;