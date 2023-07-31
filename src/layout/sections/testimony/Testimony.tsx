import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/Title";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from '../skills/skill/Skill';
import {Container} from "../../../components/Container";

export const Testimony = () => {
  return (
     <StyledTestimony>
       <Container>
         <Title>Testimony</Title>
         <FlexWrapper direction={'column'} align={'center'}>
           <IconWrapper>
             <Icon iconId={'quote'}/>
           </IconWrapper>
           <Slider/>
         </FlexWrapper>
       </Container>
     </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background: #252527;

  h2:not(:last-child) {
    margin-bottom: 3.25em;
  }

  svg:not(:last-child) {
    margin-bottom: 2.25em;
  }
`


