import React from 'react';
import styled from 'styled-components';

export default function ArticleCard(props) {
  const {title, urlToImage, author, publishedAt} = props.item;
  const publishDate = new Date(publishedAt);
  return (
    <ArticleItem className="news-article">
      <strong>{title}</strong>
      <img src={urlToImage} alt={title} />
      <em>{author} - {publishDate.toLocaleString()}</em>
    </ArticleItem>
  );
}

const ArticleItem = styled.article`
  display: block;
  padding: 1rem;
  background-color: #fff;
  margin: 0 0 10px;
  box-shadow: 0px 3px 4px rgba(50, 50, 50, 0.15);

  > strong {
    display: block;
    margin: 0 0 0.75rem;
  }

  > img {
    display: block;
    width: 100%;
  }

  > em {
    font-size: 0.75rem;
  }
`;