import styled from "styled-components";
import {theme} from "../styles/Theme";

type LinkPropsType = {
  active?: boolean

}

export const Link = styled.a<LinkPropsType>`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;


  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    transition: all 0.2s ease;
    content: '';
    height: 0;
    display: inline-block;
    position: absolute;
    bottom: -4px;
    left: -10px;
    right: -10px;
    background-color: ${theme.colors.accent};
    z-index: -1;
    height: ${({active}) => active && '10px'};
  }
`