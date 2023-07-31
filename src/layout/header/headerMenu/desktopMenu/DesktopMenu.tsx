import React, {FC} from 'react';
import styled from "styled-components";
import {Menu} from "../menu/Menu";


export type MenuPropsTypes = {
  menuItems: string[]
}

export const DesktopMenu: FC<{ menuItems: Array<string> }> = ({menuItems}: MenuPropsTypes) => {
  return (
     <StyledDesktopMenu>
       <Menu menuItems={menuItems}/>
     </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
  }
`
