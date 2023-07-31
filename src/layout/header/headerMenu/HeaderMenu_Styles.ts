import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {adaptiveValue} from "../../../assets/adaptiveValue";

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

  &:hover {
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
`
const Link = styled.a`
  font-family: 'Josefin Sans', 'sans-serif';
  font-weight: 400;
  line-height: 1.1; /* 110% */
  color: transparent;
  ${adaptiveValue({value: 'font-size', Fmin: 20, Fmax: 30, vMin: 767.98, vMax: 1170})}
`

//====================================//
//================ Mobile Menu Styles ====================//

const MobileMenu = styled.nav`
`
const Popup = styled.div<{ isOpen: boolean }>`
  background: rgba(31, 31, 32, 0.90);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: none;

  ${({isOpen}) => isOpen && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
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
  Link,
  MenuItem,
  MobileMenu,
  BurgerButton,
  Popup,
  DesktopMenu
}