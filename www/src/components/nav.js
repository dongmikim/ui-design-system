import { Link } from 'gatsby';
// import PropTypes from "prop-types"
import React from 'react';
import styled from 'styled-components';

const Nav = () => (
	<NavTemplate className="col-2">
		<div className="nav">
			<Link exact to="/" className="nav-link" activeClassName="is-active">
				Getting Started
			</Link>
			<SubNav>
				<Link to="/error" className="subnav-link" activeClassName="is-active">
					Introduction
				</Link>
				<Link to="/error" className="subnav-link" activeClassName="is-active">
					History
				</Link>
			</SubNav>
			<Link exact to="/styles/colors" className="nav-link" activeClassName="is-active">
				Styles
			</Link>
			<SubNav>
				<Link to="/styles/colors" className="subnav-link" activeClassName="is-active">
					Colors
				</Link>
				<Link to="/styles/icons" className="subnav-link" activeClassName="is-active">
					Icons
				</Link>
			</SubNav>
			<Link exact to="/components/buttons" className="nav-link" activeClassName="is-active">
				Components
			</Link>
			<SubNav>
				<Link to="/components/badges" className="subnav-link" activeClassName="is-active">
					Badges
				</Link>
				<Link to="/components/buttons" className="subnav-link" activeClassName="is-active">
					Buttons
				</Link>
				<Link to="/components/forms" className="subnav-link" activeClassName="is-active">
					Forms
				</Link>
				<Link to="/components/input-group" className="subnav-link" activeClassName="is-active">
					Input Group
				</Link>
			</SubNav>
		</div>
	</NavTemplate>
);

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

const NavTemplate = styled.nav`
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
