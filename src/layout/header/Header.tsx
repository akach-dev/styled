import React, {FC, useEffect, useState} from 'react';
import {Logo} from "../../components/logo/Logo";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";


const headerItems = [
  'Home', 'Skills', 'Works', 'Testimony', 'Contact'
]

export const Header: FC = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const breakpoint = 767.98

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, []);

  return (
     <S.Header>
       <S.HeaderContainer>
         <Logo/>
         {
           width < breakpoint
              ? (
                 <MobileMenu menuItems={headerItems}/>
              ) : (
                 <DesktopMenu menuItems={headerItems}/>
              )
         }
       </S.HeaderContainer>
     </S.Header>
  );
};





