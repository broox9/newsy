import axios from 'axios';

export function submitSearch(query){
  return {
    type: 'SEARCH_SUBMIT',
    query,
  }
}

export function searchResults(results){
  return {
    type: 'SEARCH_RESULTS',
    results,
  }
}

export function searchError(error){
  return {
    type: 'SEARCH_ERROR',
    error,
  }
}

// uptown thunk
export function fetchSearchFromApi(query) {
  return (dispatch) => {
    dispatch(submitSearch(query));
    
    axios.get('/search', {
      params: {query}
    })
    .catch(error => dispatch(searchError(error)))
    .then(({data}) => {
      console.log('Data', data)
      const list = data.data.results;
      dispatch(searchResults(list));
    });
  }
}