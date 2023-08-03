import React, {FC} from 'react';
import {S} from "../HeaderMenu_Styles";


const menuItems = [
  {
    title: 'Home',
    href: 'hero',
  },
  {
    title: 'Skills',
    href: 'skills',
  },
  {
    title: 'Works',
    href: 'works',
  },
  {
    title: 'Testimony',
    href: 'testimony',
  },
  {
    title: 'Contact',
    href: 'contact',
  },

]


export const Menu: FC = () => {
  return (
     <ul>
       {
         menuItems.map((menu, index) => (
            <S.MenuItem key={index}>
              <S.NavLink
                 activeClass="active"
                 spy={true}
                 smooth={true}
                 to={menu.href}
              >{menu.title}
                <S.Mask>
                  <span>{menu.title}</span>
                </S.Mask>
                <S.Mask>
                  <span>{menu.title}</span>
                </S.Mask>
              </S.NavLink>
            </S.MenuItem>
         ))
       }
     </ul>
  );
};


