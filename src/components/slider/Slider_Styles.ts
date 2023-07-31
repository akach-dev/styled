import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;

  & > :not(:last-child) {
    margin-bottom: 1.25em;

  }
`

const Slide = styled.div`
  color: #FFF;
  text-align: center;

  & > :not(:last-child) {
    margin-bottom: 1.25em;

  }
`

const Name = styled.span`
  font-weight: 600;
  font-family: Josefin Sans, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const Pagination = styled.div`
  display: inline-flex;
  gap: 5px;

  span {
    border-radius: 50%;
    height: 7px;
    width: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }

  .active {
    width: 20px;
    border-radius: 35px;
    background-color: ${theme.colors.accent};
  }
`

export const S = {
  Name, Slider, Slide, Pagination
}