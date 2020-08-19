import React, { Component } from 'react';
import styled from 'styled-components';

const PageTemplate = (props) => {
  return (
    <div className="col">
      <div className="page-wrapper">
        {props.children}
      </div>
    </div>
  )
}

// const pageWrapper = styled.main`
//   display: block;
// `;

export default PageTemplate;