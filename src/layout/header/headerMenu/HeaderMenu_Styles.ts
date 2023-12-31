import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";
import {generateAdaptiveStyles} from "../../../assets/generateAdaptiveStyles";

//================ Menu Styles ====================//

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.accent};
  transition: all 0.3s ease 0s;

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);

    }
  }
`
const MenuItem = styled.li`
  position: relative;


`
const NavLink = styled(Link)`
  font-family: 'Josefin Sans', 'sans-serif';
  font-weight: 400;
  line-height: 1.1; /* 110% */
  color: transparent;
  //font-size: 30px;

  ${generateAdaptiveStyles({
    property: 'font-size',
    startSize: 30,
    minSize: 22,
    widthFrom: 1140,
    widthTo: 767.98
  })}
  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    right: -10px;
    left: -10px;
    z-index: 1;
    transform: scale(0);
    transition: all 0.3s ease 0s;
  }

  &:hover, &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(10deg) translateX(3px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(10deg) translateX(-3px);
      }
    }
  }
`

//====================================//
//================ Mobile Menu Styles ====================//


const MobileMenu = styled.nav`
`
const Popup = styled.div<{ isOpen: boolean }>`
  background: rgba(31, 31, 32, 0.90);
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: all .6s ease;


  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
  }

  ${({isOpen}) => isOpen && css`
    transform: translateY(0);

    ul {
      gap: 2rem;
    }

  `}
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -115px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 101;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${({isOpen}) => isOpen && css`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${({isOpen}) => isOpen && css`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 23px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${({isOpen}) => isOpen && css`
        transform: rotate(45deg) translateY(0);
        width: 36px;

      `}
    }
  }
}`

//===================================//
//================ Desktop Menu Styles====================//

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
  }
`

//====================================//

export const S = {
  Mask,
  NavLink,
  MenuItem,
  MobileMenu,
  BurgerButton,
  Popup,
  DesktopMenu
}