import React from 'react';
import hero from "../../../assets/images/photo.webp"
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {adaptive} from "../../../assets/adaptiveValue";

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


const StyledHero = styled.section`
  height: 100vh;

`
const HeroContainer = styled(Container)`
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 65px;
  align-items: center;
`

const HeroImg = styled.div`
  position: relative;
  width: 350px;
  //flex-shrink: 0;


  &::before {
    content: '';
    position: absolute;
    transform: translate(5%, -5%);
    display: block;
    border: 5px solid #7572D5;
    width: 101.3%;
    height: 109%;
  }

  ${adaptive({value: 'height', fMin: 310, fMax: 350, vMin: 360, vMax: 1170})}

`
const Img = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`
const HeroBody = styled.div`
  max-width: 600px;
  padding-right: 30px;
  @media ${theme.media.tablet} {
    padding-right: 0;

  }

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
  font-size: calc(36px + (50 - 36) * ((100vw - 360px) / (1170 - 360)));
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
