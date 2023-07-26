import React from 'react';
import hero from "../../../assets/images/photo.webp"
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Hero = () => {
  return (
     <StyledHero>
       <HeroContainer>

         <HeroBody>
           <HeroHi>Hi There</HeroHi>
           <HeroTitle>I am <span>Svetlana Dyablo</span></HeroTitle>
           <HeroSubTitle>A Web Developer. </HeroSubTitle>
         </HeroBody>

         <HeroImg>
           <Img src={hero} alt="my img"/>
         </HeroImg>

       </HeroContainer>
     </StyledHero>
  );
};

const HeroContainer = styled(Container)`
  display: flex;
  width: 100%;
  align-items: center;
  border: 2px solid cadetblue;
`

const StyledHero = styled.section`
  height: 100vh;
  display: flex;
  //padding-top: calc(80px + (250 - 80) * ((100vw - 320px) / (1170 - 320)));
  //padding-bottom: calc(80px + (250 - 80) * ((100vw - 320px) / (1170 - 320)));
  /*  & *:not(:last-child) {
      margin-bottom: 10px;
    }*/
`

const HeroImg = styled.div`
  position: relative;
  flex: 0 0 350px;
  height: 430px;


  &::before {
    content: '';
    position: absolute;
    transform: translate(5%, -7%);
    display: block;
    border: 5px solid #7572D5;
    width: 105.73%;
    height: 113.96%;
  }
`
const Img = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`
const HeroBody = styled.div`
  flex: 1 1 auto;
  padding-right: 30px;


  & *:not(:last-child) {
    margin-bottom: 10px;
  }
`
const HeroHi = styled.span`
  font-size: 0.875rem;
  display: inline-block;
`
const HeroTitle = styled.h3`
  font-family: Josefin Sans, sans-serif;
  //font-size: calc(36px + (50 - 36) * ((100vw - 360px) / (1170 - 360)));
  font-weight: 700;
  letter-spacing: 0.05em;


  span {
    color: cadetblue;
    position: relative;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      bottom: 0;
      left: 0;
      height: 20px;
      width: 100%;
      background-color: ${theme.colors.accent};
    }
  }
`
const HeroSubTitle = styled.h1`
  font-size: 1.6875rem;
`
