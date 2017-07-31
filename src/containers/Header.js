import React from 'react';
import styled from 'styled-components';

export default function Header(props) {
  return (
    <HeaderStyled>
      <h1>Newsie</h1>
      {props.children}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background-color: violet;
  color: #fff;
  text-align: center;

  > h1 {
    font-size: 2rem;
    font-weight: 300;
    padding: 1rem;
    margin: 0;
  }
`