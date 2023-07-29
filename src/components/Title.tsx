import styled from "styled-components";
import {adaptiveValue} from "../assets/adaptiveValue";

export const Title = styled.h2`
  color: #FFF;
  font-family: Josefin Sans, sans-serif;
  //font-size: 2.25rem;
  font-weight: 600;
  letter-spacing: 5px;
  text-align: center;
  position: relative;

  ${adaptiveValue({value: 'font-size', Fmin: 30, Fmax: 36, vMin: 360, vMax: 1170})}
  &::after {
    content: '';
    background-color: #7573D5;
    position: absolute;
    bottom: -0.83em;
    left: 50%;
    transform: translateX(-50%);
    width: 55px;
    height: 1px;
  }
`
