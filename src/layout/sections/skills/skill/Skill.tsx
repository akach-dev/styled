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
       <IconWrapper>
         <Icon iconId={iconId}/>
       </IconWrapper>
       <SkillTitle>{title}</SkillTitle>
       <SkillText>
         {children}
       </SkillText>
     </StyledSkill>
  );
};

const IconWrapper = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 70px;
  }

  &::before {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%) rotate(45deg);
    display: inline-block;
    content: '';
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.10);
  }
`

const StyledSkill = styled.div`
  padding: 30px 0 40px;
  color: #FFF;
  text-align: center;
`
const SkillTitle = styled.h4`
  font-family: Josefin Sans, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-bottom: 0.875em;
  }
`
const SkillText = styled.p`
  font-size: 0.875rem;

  &:not(:last-child) {
    margin-bottom: 0.875em;
  }
`
