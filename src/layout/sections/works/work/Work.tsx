import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
  src: string
  title: string
  text: string
}

export const Work = ({src, text, title}: WorkPropsType) => {
  return (
     <StyledWork>
       <Image src={src} alt={'work img'}/>
       <Body>
         <Title>{title}</Title>
         <Text>{text}</Text>
         <Link href={'#'}>demo</Link>
         <Link href={'#'}>Code</Link>
       </Body>
     </StyledWork>
  );
};

const StyledWork = styled.div`
  max-width: 540px;
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Body = styled.div`
  background: #252527;
  padding: 25px 20px;
  color: #FFF;

  & > :not(:last-child) {
    margin-bottom: 15px;
  }
`

const Title = styled.h3`
  font-weight: 700;
  letter-spacing: 1px;
`
const Text = styled.p`
  font-size: 0.875rem;
`
const Link = styled.a`
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 1.5em;
  }
`
