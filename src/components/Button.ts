import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
  letter-spacing: 1px;
  font-size: 0.875rem;
  text-transform: uppercase;
  align-self: center;
  background-color: transparent;
  position: relative;
  z-index: 1;


  &:hover {
    &::after {
      height: 100%;
      width: 100%;
    }
  }

  &::after {
    content: '';
    display: inline-block;
    height: 12px;
    width: 50%;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    z-index: -1;
  }

`
