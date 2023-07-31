import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {IconWrapper} from "../../../../components/IconWrapper";
import {S} from '../Skills_Styles';

type SkillPropsType = {
  iconId: string
  title: string
  text: string
}

export const Skill = ({iconId, title, text}: SkillPropsType) => {
  return (
     <S.Skill>
       <IconWrapper>
         <Icon iconId={iconId}/>
       </IconWrapper>
       <S.SkillTitle>{title}</S.SkillTitle>
       <S.SkillText>
         {text}
       </S.SkillText>
     </S.Skill>
  );
};

