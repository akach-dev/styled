import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
  iconId: string
  title: string
  children?: string
}

export const Skill = ({iconId, title, children}: SkillPropsType) => {
  return (
     <StyledSkill>
       <Icon iconId={iconId}/>
       <SkillTitle>{title}</SkillTitle>
       <SkillText>
         {children}
       </SkillText>
     </StyledSkill>
  );
};

const StyledSkill = styled.div`
  flex: 1 0 33.33%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 20px 40px;
  color: #FFF;

  svg:not(:last-child) {
    margin-bottom: 40px;
  }
`
const SkillTitle = styled.h4`
  font-size: 1rem;
  text-transform: uppercase;


  &:not(:last-child) {
    margin-bottom: 0.875em;
  }
`
const SkillText = styled.p`
  font-size: 0.875rem;
`
