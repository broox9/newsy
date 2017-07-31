import React from 'react';
import styled from 'styled-components';
import  ArticleCard from '../../components/ArticleCard';

const ArticleList = styled.section`
  display: block;
  padding: 1rem;
`;


export default class NewsFeed extends React.Component {
  render() {
    const articles = this.props.items.map((item, index) => {
      return <ArticleCard item={item} key={index} />;
    });
    
    return (
      <ArticleList>
        {articles}
      </ArticleList>
    );
  }
}

