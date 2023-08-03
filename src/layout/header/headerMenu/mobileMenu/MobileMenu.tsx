import React, {FC, useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles";


export const MobileMenu: FC = () => {
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
         <Menu/>
       </S.Popup>
     </S.MobileMenu>
  );
};


