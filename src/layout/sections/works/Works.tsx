import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/Title";
import {Menu} from "../../../components/menu/Menu";

const workItwms = [
  "All", 'landing page', 'React', 'spa'
]

export const Works = () => {
  return (
     <StyledWorks>
       <Title>My Works</Title>
       <Menu menuItems={workItwms} color={'#fff'}/>
     </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background: #1F1F20;
  padding: 100px 150px;

  h2:not(:last-child) {
    margin-bottom: 2.25em;

  }
`

