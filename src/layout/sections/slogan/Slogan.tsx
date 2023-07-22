import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/Title";
import {Button} from "../../../components/Button";

export const Slogan = () => {
  return (
     <StyledSlogan>
       <Title>I Am Available For Freelance</Title>
       <Button>
         Hire me
       </Button>
     </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  background: #252527;
  padding: 100px 150px;
  text-align: center;

  h2:not(:last-child) {
    margin-bottom: 2.25em;
  }
`