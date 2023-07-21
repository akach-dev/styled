import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/Title";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import social from '../../../assets/images/social.webp'
import timer from '../../../assets/images/timer.webp'


const workItems = [
  "All", 'landing page', 'React', 'spa'
]

export const Works = () => {
  return (
     <StyledWorks>
       <Title>My Works</Title>

       <Menu menuItems={workItems} color={'#fff'}/>

       <FlexWrapper justify={'space-between'}>
         <Work
            src={social}
            title={'Social Network'}
            text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
         <Work
            src={timer}
            title={'Timer'}
            text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
       </FlexWrapper>
     </StyledWorks>
  );
};

const StyledWorks = styled.section`
  background: #1F1F20;
  padding: 100px 150px;

  h2:not(:last-child) {
    margin-bottom: 2.25em;

  }

  nav:not(:last-child) {
    margin-bottom: 3.5em;

  }
`

