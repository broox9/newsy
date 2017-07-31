import React from 'react';
import {searchResults} from '../actionCreators/search.actions';
// import axios from 'axios';
// import propTypes from 'prop-types';

export default class SearchResult extends React.Component {
  render() {
    const listItems = this.props.items.map((item, index) => {
      return <ResultItem item={item} key={index} />;
    });
    
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

function ResultItem(props) {
  const {name, thumbnail} = props.item;
  return (
    <li>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} height="150"/>
      <strong>{name}</strong>
    </li>
  );
}