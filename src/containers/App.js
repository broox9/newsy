import React from 'react';
import propTypes from 'prop-types';
import axios, {get} from 'axios';
import styled, {ThemeProvider} from 'styled-components';
import '../styles/';
import {baseTheme} from '../styles/';

// Actions
import {fetchStoriesFromApi, fetchSourcesFromApi} from '../actionCreators';
// Components
import SearchBox from '../components/SearchBox';
import SearchResult from '../components/SearchResults';

// Containers
import NewsFeed from './NewsFeed/';
import SourcePicker from './SourcePicker/';
import Header from './Header';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      results: [],
      error: null,
      stories: [],
      sources: [],
      theme: baseTheme
    };
  }
  getChildContext() {
    return { store: this.props.store }
  }

  componentDidMount() {
    const store = this.props.store;
    this.unsubscribe = store.subscribe(() => {
      const {
        search: {results, error},
        news: {stories, sources},
        ui: {theme}
      } = store.getState();
      this.setState({results, error, stories, sources});
    });

    store.dispatch(fetchSourcesFromApi());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    const {error, results, stories, sources, theme } = this.state;
    const ErrObj = this.state.error ? (<pre>{error.code} - {error.message}</pre>) : null;
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Header>
            <button onClick={() => this.props.store.dispatch(fetchStoriesFromApi('cnn'))} >NEws</button>
          </Header>
          {ErrObj}
          {/* <SearchBox /> */}
          
          <SourcePicker sources={sources} />
          {/*<SearchResult items={results} /> */}
          <NewsFeed items={stories} />
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

App.childContextTypes = {
  store: propTypes.object,
}

const AppWrapper = styled.section`
  min-height: 100vh;
  background-color: #f5f5f5;
`