import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

type MenuPropsTypes = {
  menuItems: string[]
  color?: string
}

export const TabMenu = ({menuItems, color}: MenuPropsTypes) => {
  return (
     <StyledTabMenu color={color}>
       <ul>
         {
           menuItems.map((menu, index) => (
              <ListItem key={index}>
                <Link href={"#"}>{menu}</Link>
              </ListItem>
           ))
         }
       </ul>
     </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`

  &:not(:last-child) {
    margin-bottom: 3em;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
`
const ListItem = styled.li`

`

