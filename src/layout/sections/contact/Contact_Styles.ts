import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {generateAdaptiveStyles} from "../../../assets/generateAdaptiveStyles";

const Contact = styled.section`
  ${generateAdaptiveStyles({
    property: 'padding-bottom',
    startSize: 110,
    minSize: 80,
    widthFrom: 1170,
    keepSize: 1,
  })}
  h2:not(:last-child) {
    margin-bottom: 2.25em;
  }
`
const Form = styled.form`
  position: relative;

  max-width: 500px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  textarea {
    resize: none;
    height: 150px;
  }
`
const Field = styled.input`
  border: 1px solid ${theme.colors.borderColor};
  color: ${theme.colors.font};
  background: ${theme.colors.secondaryBg};
  width: 100%;
  padding: 7px 15px;
  font-size: 0.75rem;
  font-family: Poppins, sans-serif;

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`
export const S = {
  Contact, Form, Field,
}
