import React, {FC} from 'react';
import {MenuPropsTypes} from "../desktopMenu/DesktopMenu";
import {S} from "../HeaderMenu_Styles";


export const Menu: FC<{ menuItems: Array<string> }> = ({menuItems}: MenuPropsTypes) => {
  return (
     <ul>
       {
         menuItems.map((menu, index) => (
            <S.MenuItem key={index}>
              <S.Link href={"#"}>{menu}
                <S.Mask>
                  <span>{menu}</span>
                </S.Mask>
                <S.Mask>
                  <span>{menu}</span>
                </S.Mask>
              </S.Link>
            </S.MenuItem>
         ))
       }
     </ul>
  );
};


