// @ts-nocheck

import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Images/logo.svg";
import { MenuButton } from "./style";
import { Nav, Logo, Hamburger, Menu, MenuItem } from "./style";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="logo"></img>
      </Logo>
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem>CityLands</MenuItem>
        <MenuItem>All Lands</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Testimonial</MenuItem>
        <MenuItem>Preminium</MenuItem>
        <MenuButton>Sell my Land</MenuButton>
        <MenuButton>Account</MenuButton>
      </Menu>
    </Nav>
  );
};

export default Header;
