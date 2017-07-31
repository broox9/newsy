import React from 'react';
import {submitSearch, fetchSearchFromApi} from '../actionCreators';
import axios from 'axios';
import propTypes from 'prop-types';

export default class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };

    this.doSearch = this._doSearch.bind(this);
  }
  _doSearch(query) {
    if (query) {
      this.context.store.dispatch(fetchSearchFromApi(query))
    }
  }

  processInput(e) {
    e.preventDefault()
    const { query } = this.state;
    
    if (query.length >= 3) {
      this.doSearch(query)
    }
  }
  render() {
    return (
      <form onSubmit={ (e) => this.processInput(e) } >
        <label htmlFor="name-search">Search</label>
        <input type="search" name="name-search" onInput={ (e) => this.setState({query: e.target.value}) } />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

SearchBox.contextTypes = {
  store: propTypes.object,
}