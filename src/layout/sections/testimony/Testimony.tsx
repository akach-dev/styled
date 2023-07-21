import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/Title";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
  return (
     <StyledTestimony>
       <Title>Testimony</Title>
       <FlexWrapper direction={'column'} align={'center'}>
         <Icon iconId={'quote'}/>
         <Slider/>
       </FlexWrapper>
     </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  background: #252527;
  padding: 100px 150px;

  h2:not(:last-child) {
    margin-bottom: 2.25em;
  }

  svg:not(:last-child) {
    margin-bottom: 2.25em;
  }
`
