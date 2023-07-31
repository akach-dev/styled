import React, {FC} from 'react';
import {S} from '../HeaderMenu_Styles';
import {Menu} from "../menu/Menu";


export type MenuPropsTypes = {
  menuItems: string[]
}

export const DesktopMenu: FC<{ menuItems: Array<string> }> = ({menuItems}: MenuPropsTypes) => {
  return (
     <S.DesktopMenu>
       <Menu menuItems={menuItems}/>
     </S.DesktopMenu>
  );
};


