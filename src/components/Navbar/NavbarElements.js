import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

import styled from 'styled-components';
import league from '../../font/LeagueSpartan-Bold.otf'

export const Nav = styled.nav`
  position: absolute;
  background: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1400px) / 2);
  z-index: 999;

  /* Third Nav */
  /* justify-content: flex-start; */

  @font-face {
    font-family: league;
    src: url(${league});
  }
`;


export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;
    font-family: league;
    font-weight: bold;
    text-decoration: none;
`;

export const ImgLogo = styled.img`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 10vh;
    width: auto;

`

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  font-family: league;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 20vh;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 1024px) {
    margin-right: 0vh;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
