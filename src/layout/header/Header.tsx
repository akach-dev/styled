import React from 'react';
import styled from "styled-components";
import {Container} from '../../components/Container';
import {Logo} from "../../components/logo/Logo";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const headerItems = [
  'Home', 'Skills', 'Works', 'Testimony', 'Contact'
]

export const Header = () => {
  return (
     <StyledHeader>
       <HeaderContainer>
         <Logo/>
         <HeaderMenu menuItems={headerItems}/>
         <MobileMenu menuItems={headerItems}/>
       </HeaderContainer>
     </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(2, 2, 9, 0.5);
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
`
const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`





