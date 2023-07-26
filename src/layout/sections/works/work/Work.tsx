import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
  src: string
  title: string
  text: string
}

export const Work = ({src, text, title}: WorkPropsType) => {
  return (
     <StyledWork>
       <ImageWrapper>
         <Image src={src} alt={'work img'}/>
         <Button>view project</Button>
       </ImageWrapper>
       <Body>
         <h3>{title}</h3>
         <p>{text}</p>
         <Link href={'#'}>demo</Link>
         <Link href={'#'}>Code</Link>
       </Body>
     </StyledWork>
  );
};

const StyledWork = styled.div`
  max-width: 540px;
`

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;

  ${Button} {
    transition: all 0.2s ease 0s;
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

  &:hover {
    ${Button} {
      opacity: 1;
    }

    &::before {
      transition: all 0.6s ease 0s;
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
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



