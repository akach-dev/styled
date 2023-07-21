import React from 'react';
import styled from "styled-components";

type MenuPropsTypes = {
  menuItems: string[]
  color?: string
}

export const Menu = ({menuItems, color}: MenuPropsTypes) => {
  return (
     <StyledMenu color={color}>
       <ul>
         {
           menuItems.map((menu, index) => (
              <li key={index}>
                <a href={"#"}>{menu}</a>
              </li>
           ))
         }
       </ul>
     </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
  }


  li {
    color: ${({color}) => color || 'rgba(31, 31, 32, 1)'};
    text-transform: uppercase;
  }
`
