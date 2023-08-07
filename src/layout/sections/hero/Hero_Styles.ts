import styled from "styled-components";
import {font} from "../../../assets/adaptiveValue";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {generateAdaptiveStyles, rem} from "../../../assets/generateAdaptiveStyles";

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  
  ${generateAdaptiveStyles({
    property: 'padding-bottom',
    startSize: 140,
    minSize: 80,
    widthFrom: 1170,
    keepSize: 1,
  })}
`
const HeroContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 65px;
  align-items: center;

`

const HeroImg = styled.div`
  position: relative;

  ${generateAdaptiveStyles({
    property: 'width',
    startSize: 350,
    minSize: 310,
    widthFrom: 1170,
    widthTo: 360,
    keepSize: 1

  })}
  ${generateAdaptiveStyles({
    property: 'height',
    startSize: 430,
    minSize: 380,
    widthFrom: 1170,
    widthTo: 360,
    keepSize: 1
  })}
  &::before {
    content: '';
    position: absolute;
    transform: translate(5%, -5%);
    display: block;
    border: 5px solid #7572D5;
    width: 101.3%;
    height: 109%;
  }
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
  font-size: ${rem(14)};
  display: inline-block;
`

const HeroTitle = styled.h3`
  ${font({
    family: 'Josefin Sans, sans-serif',
    weight: 700,
    Fmax: 50,
    Fmin: 30
  })};
  letter-spacing: 0.05em;

  span {
    color: cadetblue;
    position: relative;
    z-index: 1;
    white-space: nowrap;

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      bottom: 0;
      left: 0;
      height: 30%;
      width: 100%;
      background-color: ${theme.colors.accent};
    }
  }
`

const HeroSubTitle = styled.h1`
  ${generateAdaptiveStyles({
    property: 'font-size',
    startSize: 27,
    minSize: 20,
    widthFrom: 1140,
  })}
  p {
    display: none;
  }
`

export const S = {
  Hero, HeroContainer, HeroBody, HeroImg, HeroHi, HeroTitle, HeroSubTitle, Img
}