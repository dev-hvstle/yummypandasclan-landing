import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
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
  margin-top: 2vh;
  /* Third Nav */
  /* justify-content: flex-start; */

  @font-face {
    font-family: league;
    src: url(${league});
  }

  @media screen and (max-width:468px){
    
  }
`;


export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: league;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.2vh;
`;

export const ImgLogo = styled.img`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 10vh;
    width: auto;

`

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  font-family: league;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-shadow: 1px 1px 8px #000;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 30%);
    font-size: 5vh;
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
    display: none;
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
  @media screen and (max-width: 1024px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  

  
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  
`;


export const SocialImg = styled.img`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5vh;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`