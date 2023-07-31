import React, {FC} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles";

type MenuPropsTypes = {
  menuItems: string[]
}

export const MobileMenu: FC<{ menuItems: Array<string> }> = ({menuItems}: MenuPropsTypes) => {
  return (
     <S.MobileMenu>
       <S.BurgerButton isOpen={false}>
         <span></span>
       </S.BurgerButton>
       <S.Popup isOpen={false}>
         <Menu menuItems={menuItems}/>
       </S.Popup>
     </S.MobileMenu>
  );
};


