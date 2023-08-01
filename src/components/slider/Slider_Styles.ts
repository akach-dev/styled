import styled from "styled-components";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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

export const S = {
  Name, Slider, Slide
}