import React from 'react';
import styled from "styled-components";
import {Title} from "../../../components/Title";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
  return (
     <StyledSkills>
       <Title>My Skills</Title>
       <StyledSkillsContainer>
         <Skill iconId={'code'} title={'html5'}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua Ut enim
         </Skill>
         <Skill iconId={'css'} title={'css3'}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, deserunt eaque earum, eveniet fuga
           inventore nam non obcaecati quam quasi quis, repellendus vel. Aliquid cum delectus ipsam magni
           temporibus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, deserunt eaque earum,
           eveniet fuga
           inventore nam non obcaecati quam quasi quis, repellendus vel. Aliquid cum delectus ipsam magni
           temporibus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, deserunt eaque earum,
           eveniet fuga
           inventore nam non obcaecati quam quasi quis, repellendus vel. Aliquid cum delectus ipsam magni temporibus!
         </Skill>
         <Skill iconId={'react'} title={'React'}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam
           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia
           tempore.
         </Skill>
         <Skill iconId={'ts'} title={'typescript'}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam
           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia
           tempore.
         </Skill>
         <Skill iconId={'st'} title={'styled components'}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam
           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia
           tempore.
         </Skill>
         <Skill iconId={'figma'} title={'WEB DESIgN'}>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam
           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia
           tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam
           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia
           tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam
           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia
           tempore.
         </Skill>
       </StyledSkillsContainer>
     </StyledSkills>
  );
};

const StyledSkills = styled.section`

`
const StyledSkillsContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  //grid-auto-rows: minmax(auto, 1fr);
  column-gap: 40px;
`