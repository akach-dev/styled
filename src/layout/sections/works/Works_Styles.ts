import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Work = styled.div`
  width: 330px;
  flex-grow: 1;

  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;

  ${Button} {
    transition: all 0.3s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    opacity: 0;

    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
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