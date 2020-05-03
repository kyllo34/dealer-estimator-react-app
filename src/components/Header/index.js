import React from 'react';
import logo from '../../assets/logo.png'
import './Header.scss'
import {PersonSquare} from 'react-bootstrap-icons';

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} className="header-logo" alt="Header Logo"/>
      <div className="user-block">
        <PersonSquare className="person-square"/>
        <div className="user-name">User Name</div>
      </div>
    </div>
  )
}

export default Header;