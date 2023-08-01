import React, {FC, useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles";

type MenuPropsTypes = {
  menuItems: string[]
}

export const MobileMenu: FC<{ menuItems: Array<string> }> = ({menuItems}: MenuPropsTypes) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const onBurgerClick = () => setMenuIsOpen(!menuIsOpen)

  return (
     <S.MobileMenu>
       <S.BurgerButton
          onClick={onBurgerClick}
          isOpen={menuIsOpen}>
         <span></span>
       </S.BurgerButton>
       <S.Popup
          onClick={onBurgerClick}
          isOpen={menuIsOpen}>
         <Menu menuItems={menuItems}/>
       </S.Popup>
     </S.MobileMenu>
  );
};


