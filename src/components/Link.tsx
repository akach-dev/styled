import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
  transition: all 0.4s ease 0s;


  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: -4px;
    left: -10px;
    right: -10px;
    background-color: ${theme.colors.accent};
    z-index: -1;
  }
`