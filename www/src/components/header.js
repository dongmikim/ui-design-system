import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <HeaderTemplate>
    <Link to="/" className="header-logo">
      {/* <img src="./assets/ci.png" alt="" /> */}
      <span>{siteTitle}</span>
    </Link>
    <Nav>
      <Link exact to="/" className="nav-link" activeStyle={{color: "white"}}>Home</Link>
      <Link exact to="/styles/colors" className="nav-link" activeStyle={{color: "white"}}>Styles</Link>
      <Link exact to="/components" className="nav-link" activeStyle={{color: "white"}}>Components</Link>
    </Nav>
  </HeaderTemplate>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderTemplate = styled.header`
  z-index: 10;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  min-height: 50px;
  padding-right: 30px;
  padding-left: 30px;
  background: #20232a;

  .header-logo {
    margin-right: 20px;
    color: orange;
    font-weight: bold;
    font-size: 18px;
  }
`;

const Nav = styled.div`
  display: flex;
  color: rgba(255,255,255,.5);

  .nav-link {
    display: block;
    padding: 5px 10px;
    font-size: 14px;
  }
`;


export default Header
