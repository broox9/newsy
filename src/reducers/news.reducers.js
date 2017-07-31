function newsReducer(state = {}, action) {
  switch(action.type) {
    case 'FETCH_SOURCES':
      break;
    case 'FETCH_SOURCES_ERROR':
      return {
        ...state,
        error: action.error,
      }
      break;
    case 'FETCH_SOURCES_RESULTS':
      return {
        ...state,
        sources: action.sources,
      }
      break;
    //TODO: DO THIS
    case 'SET_SOURCE':
      break;
    case 'FETCH_STORIES':
      break;
    case 'FETCH_STORIES_ERROR':

      break;
    case 'FETCH_STORIES_RESULTS':
      return {
        ...state,
        stories: action.stories,
      }
      break;
    default:
      return state
  }
}

export default newsReducer;