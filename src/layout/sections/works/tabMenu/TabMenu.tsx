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
    margin-inline: auto;
    max-width: 352px;
    display: flex;
    justify-content: space-between;
    //width: 100%;

  }
`
const ListItem = styled.li`
`

