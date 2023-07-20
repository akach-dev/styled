import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Title} from "../../../components/Title";
import {Skill} from "./skill/Skill";

export const Skills = () => {
  return (
     <StyledSkills>
       <Title>My Skills</Title>
       <FlexWrapper wrap={'wrap'}>
         <Skill iconId={'code'} title={'html5'}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua Ut enim
         </Skill>
         <Skill iconId={'css'} title={'css3'}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, deserunt eaque earum, eveniet fuga
           inventore nam non obcaecati quam quasi quis, repellendus vel. Aliquid cum delectus ipsam magni temporibus!
         </Skill>
         <Skill iconId={'react'} title={'React'}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam
           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia
           tempore.
         </Skill><Skill iconId={'ts'} title={'typescript'}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam
         quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia
         tempore.
       </Skill><Skill iconId={'st'} title={'styled components'}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam
         quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia
         tempore.
       </Skill><Skill iconId={'figma'} title={'WEB DESIgN'}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam
         quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia
         tempore.
       </Skill>
       </FlexWrapper>
     </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background: #252527;
  padding: 100px 150px;

  h2:not(:last-child) {
    margin-bottom: 2.25em;
  }
`