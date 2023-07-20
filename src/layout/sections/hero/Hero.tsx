import React from 'react';
import hero from "../../../assets/images/photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";

export const Hero = () => {
  return (
     <StyledHero>
       <FlexWrapper direction={'column'} align={'flex-start'}>
         <HeroHi>Hi There</HeroHi>
         <HeroTitle>I am Svetlana Dyablo</HeroTitle>
         <HeroSubTitle>A Web Developer. </HeroSubTitle>
       </FlexWrapper>
       <HeroImg>
         <Img src={hero} alt="my img"/>
       </HeroImg>
     </StyledHero>
  );
};

const StyledHero = styled.section`
  //min-height: 100vh;
  color: #fff;
  background: #1F1F20;
  padding: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & *:not(:last-child) {
    margin-bottom: 10px;
  }
`

const HeroImg = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    transform: translate(20px, -26px);
    display: block;
    border: 5px solid #7572D5;
    width: 370px;
    height: 480px;

  }
`

const Img = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  position: relative;

`

const HeroHi = styled.span`
  font-size: 0.875rem;
`
const HeroTitle = styled.h2`
  font-size: 3.125rem;
  font-weight: 700;
  letter-spacing: 2.5px;
`
const HeroSubTitle = styled.h1`
  font-size: 1.6875rem;
`
