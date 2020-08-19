import React from 'react';
import styled from 'styled-components';

const PageHeader = props => {
  return (
    <HeaderTemplate>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </HeaderTemplate>
  )
}

PageHeader.defaultProps = {
  title: '',
  dsec: ''
}

const HeaderTemplate = styled.div`
  h1 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 24px;
    margin-bottom: 50px;
  }
`;

export default PageHeader;