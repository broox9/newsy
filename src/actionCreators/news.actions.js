import axios from 'axios';

export function fetchStories(source) {
  return {
    type: 'FECTH_STORIES',
    source
  };
}

export function fetchStoriesError(error) {
  return {
    type: 'FETCH_STORIES_ERROR',
    error
  }
}

export function fetchStoriesResults(stories) {
  return {
    type: 'FETCH_STORIES_RESULTS',
    stories
  }
}

// make my thunk the P thunk...
export function fetchStoriesFromApi(source = 'usa-today') {
  return (dispatch) => {
    dispatch(fetchStories());
    axios.get(`/news/${source}`)
      .then((response) => {
        const stories = response.data.articles;
        dispatch(fetchStoriesResults(stories))
      })
      .catch((error) => {
        dispatch(fetchStoriesError(error));
      })
  }
}

/* = SOURCES */
export function fetchSources() {
  return {
    type: 'FECTH_SOURCES',
  };
}

export function fetchSourcesError(error) {
  return {
    type: 'FECTH_SOURCES_ERROR',
    error
  }
}

export function fetchSourcesResults(sources) {
  return {
    type: 'FETCH_SOURCES_RESULTS',
    sources
  }
}

// I want you take me to ... thunky toooown!
export function fetchSourcesFromApi() {
  return (dispatch) => {
    dispatch(fetchSources());
    axios.get('/sources')
      .then((response) => {
        dispatch(fetchSourcesResults(response.data.sources));
      })
      .catch((error) => {
        console.log('ERROR SOURCES', error)
        dispatch(fetchSourcesError(error));
      })
  }
}