import React from 'react';
import styled from "styled-components";
import {Container} from '../../components/Container';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const headerItems = [
  'Home', 'Skills', 'Works', 'Testimony', 'Contact'
]

export const Header = () => {
  return (

     <StyledHeader>
       <HeaderContainer>
         <Logo/>
         <Menu menuItems={headerItems}/>
       </HeaderContainer>
     </StyledHeader>

  );
};

const StyledHeader = styled.header`
  background-color: #73f5d0;
  padding: 5px 0;
`
const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`