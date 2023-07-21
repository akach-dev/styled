import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
  return (
     <StyledSlider>
       <FlexWrapper>
         <Slide>
           <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
             dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
           <Name>@ivan ivanow</Name>
         </Slide>
       </FlexWrapper>
       <Pagination>
         <span> </span>
         <span> </span>
         <span> </span>
       </Pagination>
     </StyledSlider>
  );
};

const StyledSlider = styled.div`
  background: #7171d7;
  max-width: 500px;
`
const Slide = styled.div`
  color: #FFF;
  text-align: center;

  & > :not(:last-child) {
    margin-bottom: 1.25em;

  }
`
const Text = styled.p`
  font-size: 0.875rem;
`
const Name = styled.span`
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`
const Pagination = styled.span`
  display: inline-flex;
  gap: 5px;

  span {
    height: 10px;
    border-radius: 50%;
    width: 10px;
    background-color: cadetblue;
    cursor: pointer;
  }
`