import React, {FC} from 'react';
import styled from "styled-components";
import {Title} from "../../../components/Title";
import {Button} from "../../../components/Button";

export const Slogan: FC = () => {
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
  text-align: center;
`