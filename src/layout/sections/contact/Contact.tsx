import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/Title";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
  return (
     <StyledContact>
       <Container>
         <Title>Contact</Title>
         <StyledForm>
           <Field placeholder={'Name'}/>
           <Field placeholder={'second Name'}/>
           <Field placeholder={'message'} as={'textarea'}/>
           <Button>Send message</Button>
         </StyledForm>
       </Container>
     </StyledContact>
  );
};


const StyledContact = styled.section`
  h2:not(:last-child) {
    margin-bottom: 2.25em;
  }
`
const StyledForm = styled.form`
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