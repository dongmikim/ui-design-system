import React from 'react';
import Header from './Header';
import Nav from './Nav';

const Template = () => {
  return (
    <div className="wrapper">
      <Header />
      <div>
        <Nav />
        { children }
      </div>
    </div>
  )
}

export default Template;