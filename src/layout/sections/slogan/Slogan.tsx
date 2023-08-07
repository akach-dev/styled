import React, {FC} from 'react';
import styled from "styled-components";
import {Title} from "../../../components/Title";
import {Button} from "../../../components/Button";
import {generateAdaptiveStyles} from "../../../assets/generateAdaptiveStyles";

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
  ${generateAdaptiveStyles({
    property: 'padding-bottom',
    startSize: 100,
    minSize: 90,
    widthFrom: 1170,
    keepSize: 1,
  })}
  text-align: center;
`