import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <HeaderTemplate>
        <Link to="/" className="header-logo">
          {/* <img src="./assets/ci.png" alt="" /> */}
          <span>UI</span>
        </Link>
        <Nav>
          <NavLink exact to="/" className="nav-link" activeStyle={{color: "white"}}>Home</NavLink>
          <NavLink exact to="/styles" className="nav-link" activeStyle={{color: "white"}}>Styles</NavLink>
          <NavLink exact to="/components" className="nav-link" activeStyle={{color: "white"}}>Components</NavLink>
        </Nav>
      </HeaderTemplate>
    )
  }
}

const HeaderTemplate = styled.header`
  position: sticky;
  min-height: 50px;
  background: #20232a;
`;

const Nav = styled.div`
  display: flex;
  color: rgba(255,255,255,.5);

  .nav-link {
    display: block;
    padding: 5px 10px;
  }
`;


export default Header;