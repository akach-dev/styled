import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

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

  a:not(:last-child) {
    margin-right: 1.5em;
  }

  a::before {
    left: 0;
    right: 0;
  }
`



