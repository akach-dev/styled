import React from 'react';
import hero from "../../../assets/images/photo.webp"
import styled from "styled-components";
import {Container} from "../../../components/Container";

export const Hero = () => {
  return (
     <StyledHero>
       <HeroContainer>

         <HeroBody>
           <HeroHi>Hi There</HeroHi>
           <HeroTitle>I am Svetlana Dyablo</HeroTitle>
           <HeroSubTitle>A Web Developer. </HeroSubTitle>
         </HeroBody>

         <HeroImg>
           <Img src={hero} alt="my img"/>
         </HeroImg>
       </HeroContainer>
     </StyledHero>
  );
};

const StyledHero = styled.section`
  min-height: 100vh;
  //padding: calc(80px + (180 - 20) * ((100vw - 320px) / (1170 - 320))) 0;
  & *:not(:last-child) {
    margin-bottom: 10px;
  }
`
const HeroContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //padding: calc(80px + (180 - 20) * ((100vw - 320px) / (1170 - 320))) 0px;

`

const HeroBody = styled.div`

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
