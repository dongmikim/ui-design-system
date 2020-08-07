import React from 'react';
import Header from './partials/Header';
import Nav from './partials/Nav';
import Router from './routes/Router';
import './css/style.scss';

function App() {
  return (
    <div className="wrap">
      <Header />
      <div className="container row">
        <Nav />
        <Router />
      </div>
      
    </div>
  );
}

export default App;
