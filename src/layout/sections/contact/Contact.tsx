import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/Title";
import {Button} from "../../../components/Button";

export const Contact = () => {
  return (
     <StyledContact>
       <Title>Contact</Title>
       <StyledForm>
         <Field/>
         <Field/>
         <Field as={'textarea'}/>
         <Button>Send message</Button>
       </StyledForm>
     </StyledContact>
  );
};


const StyledContact = styled.section`
  background: #1F1F20;
  padding: 100px 150px;

  h2:not(:last-child) {
    margin-bottom: 2.25em;
  }
`
const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
`
const Field = styled.input`
  border: 1px solid #4A4A4A;
  background: #252527;
`