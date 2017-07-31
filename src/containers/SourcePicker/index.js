import React from 'react';
import styled from 'styled-components';

export default class SourcePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true
    }
  }
  render() {
    const { sources } = this.props;
    const sourceItems = sources.map((source, index) => {
      return <li aria-role="button" key={index}>{source.name}</li>
    })
    return (
      <SourceList>
        {sourceItems}
      </SourceList>
    )
  }
}

const SourceList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  overflow: scroll;
  margin: 0;
  padding: 0;

  > li {
    display: block;
    background-color: papayawhip;
    white-space: nowrap;
    color: mediumviolet;
    margin: 0.25rem;
    padding: 0.5rem;
  }
`;