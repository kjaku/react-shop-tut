import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import KoszykButton from './KoszykButton.js';

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm text-truncate  bg-primary navbar-dark px-sm-5">
        {/* <div className="navbar-nav "> */}
        <Link to="/" className="nav-item  nav-link">
          Na co pieniążki
        </Link>
        {/* <li className="nav-item ml-auto"> */}
        <Link
          to="/about"
          className="nav-item ml-auto text-capitalize mr-0 nav-link"
        >
          O Stronie
        </Link>
        {/* </li> */}
        {/* </div> */}
        <Link to="/cart" className="mr-1">
          <KoszykButton />
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainCol) !important;
  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;

  .nav-link {
    color: var(--mainYellow) !important;
    font-size: 1.3rem;
    text-transform: uppercase;
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
  }

  @media only screen and (max-width: 600px) {
    .nav-link {
      font-size: 12px;
    }
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export default Navbar;
