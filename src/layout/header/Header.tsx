import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
  return (
     <StyledHeader>
       <Logo/>
       <Menu/>
     </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #73f5d0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`