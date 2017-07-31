import {combineReducers} from 'redux';
import searchReducer from './search.reducers';
import newsReducer from './news.reducers';
import uiReducers from './ui.reducers';

export default combineReducers({
  search: searchReducer,
  news: newsReducer,
  ui: uiReducers
});
