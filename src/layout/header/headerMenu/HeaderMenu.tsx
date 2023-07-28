import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type MenuPropsTypes = {
  menuItems: string[]
}

export const HeaderMenu = ({menuItems}: MenuPropsTypes) => {
  return (
     <StyledHeaderMenu>
       <ul>
         {
           menuItems.map((menu, index) => (
              <ListItem key={index}>
                <Link href={"#"}>{menu}
                  <Mask>
                    <span>{menu}</span>
                  </Mask>
                  <Mask>
                    <span>{menu}</span>
                  </Mask>
                </Link>
              </ListItem>
           ))
         }
       </ul>
     </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`
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
const ListItem = styled.li`
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
  }
`
const Link = styled.a`
  font-family: 'Josefin Sans', 'sans-serif';
  font-weight: 400;
  line-height: 1.1; /* 110% */
  color: transparent;
  font-size: 1.5rem;

`

