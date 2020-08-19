import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  // const  className = isActive ? 'active' : '';

  return (
    <SideNav className="col-2">
      <div className="nav">
        <NavLink exact to="/" className="nav-link" activeClassName="is-active">Getting Started</NavLink>
        <SubNav>
          <Link to="/" className="subnav-link" activeClassName="is-active">Introduction</Link>
          <Link to="/" className="subnav-link" activeClassName="is-active">History</Link>
        </SubNav>
        <NavLink exact to="/styles/colors" className="nav-link" activeClassName="is-active">Styles</NavLink>
        <SubNav>
          <Link to="/styles/colors" className="subnav-link" activeClassName="is-active">Colors</Link>
          <Link to="/styles/icons" className="subnav-link" activeClassName="is-active">Icons</Link>
        </SubNav>
        <NavLink exact to="/components" className="nav-link" activeClassName="is-active">Components</NavLink>
        <SubNav>
          <Link to="/components/buttons" className="subnav-link" activeClassName="is-active">Buttons</Link>
          <Link to="/components/forms" className="subnav-link" activeClassName="is-active">Forms</Link>
        </SubNav>
      </div>
    </SideNav>
  )
}

const SideNav = styled.nav`
  position: sticky;
  top: 50px;
  height: calc(100vh - 50px);
  background-color: #f7f7f7;
  border-right: 1px solid #ececec;

  .nav {
    padding: 20px 30px;
  }

  .nav-link {
    display: block;
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 16px;
    color: #666;
    font-weight: bold;
  }
`;

const SubNav = styled.div`
  margin-bottom: 20px;

  .subnav-link {
    display: block;
    padding: 6px 0;
    font-size: 14px;
    color: #999;
  }
  
  .is-active {
    font-weight: bold;
    color: #666;
  }
`;

export default Nav;