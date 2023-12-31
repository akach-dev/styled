import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {generateAdaptiveStyles} from "../../../assets/generateAdaptiveStyles";

const Work = styled.div`
`

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;

  ${Button} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    opacity: 0;
    transition: all 0.3s ease;

    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    transition: all 0.3s ease;

    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    opacity: 0;
  }


  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);

    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;

    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: all 1s ease 0s;
`

const Body = styled.div`
  background: #252527;
  padding: 25px 20px;
  color: #FFF;

  & > :not(:last-child) {
    margin-bottom: 15px;
  }

  a:not(:last-child) {
    margin-right: 1.5em;
  }

  a::before {
    left: 0;
    right: 0;
  }
`

const Works = styled.section`
  ${generateAdaptiveStyles({
    property: 'padding-bottom',
    startSize: 108,
    minSize: 80,
    widthFrom: 1170,
    keepSize: 1,
  })}
  ${FlexWrapper} {
    gap: 30px;
  }

  h2:not(:last-child) {
    margin-bottom: 2.25em;
  }
`

export const S = {
  Work, Body, Image, ImageWrapper, Works
}
