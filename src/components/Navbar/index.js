import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
  ImgLogo
} from './NavbarElements';
import imglogo from '../../image/logopanda.png'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to='/'>
          <ImgLogo src={imglogo} /> Yummy Panda's Clan
        </NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to='/story' activeStyle>
            STORY
          </NavLink>
          <NavLink to='/roadmap' activeStyle>
            ROADMAP
          </NavLink>
          <NavLink to='/rarity' activeStyle>
            RARITY
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Discord</NavBtnLink>
          <NavBtnLink to='/signin'>Twitter</NavBtnLink>
          <NavBtnLink to='/signin'>Instagram</NavBtnLink>
          <NavBtnLink to='/signin'>OpenSea</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
