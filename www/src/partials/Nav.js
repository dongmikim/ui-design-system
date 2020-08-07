import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {

  return (
    <SideNav>
      <div className="nav">
        <NavLink exact to="/" className="nav-link" activeClassName="is-active">Getting Started</NavLink>
        <SubNav>
          <Link exact to="/" className="subnav-link">Introduction</Link>
          <Link exact to="/" className="subnav-link">History</Link>
        </SubNav>
        <NavLink exact to="/styles/colors" className="nav-link" activeClassName="is-active">Styles</NavLink>
        <SubNav>
          <Link exact to="/styles/colors" className="subnav-link">Colors</Link>
          <Link exact to="/styles/icons" className="subnav-link">Icons</Link>
        </SubNav>
        <NavLink exact to="/components" className="nav-link" activeClassName="is-active">Components</NavLink>
        <SubNav>
          <Link exact to="/components/button" className="subnav-link">Button</Link>
          <Link exact to="/components/input" className="subnav-link">Input</Link>
        </SubNav>
      </div>
    </SideNav>
  )
}

const SideNav = styled.nav`
  position: sticky;
  top: 50px;
  width: 15%;
  height: calc(100vh - 50px);
  background-color: #f7f7f7;
  border-right: 1px solid #ececec;
`;

const SubNav = styled.div`
  
  .subnav-link {
    display: block;
  }
`;

export default Nav;