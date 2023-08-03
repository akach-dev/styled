import React from 'react';
import {Title} from "../../../components/Title";
import {Skill} from "./skill/Skill";
import {S} from './Skills_Styles';

const skillData = [
  {
    iconId: 'code',
    title: 'html5',
    text: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n' +
       '           dolore magna aliqua Ut enim'
  },
  {
    iconId: 'css',
    title: 'css3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, deserunt eaque earum, eveniet fuga\n' +
       '           inventore nam non obcaecati quam quasi quis, repellendus vel. Aliquid cum delectus ipsam magni\n' +
       '           temporibus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, deserunt eaque earum,\n' +
       '           eveniet fuga\n' +
       '           inventore nam non obcaecati quam quasi quis, repellendus vel. Aliquid cum delectus ipsam magni\n' +
       '           temporibus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque, deserunt eaque earum,\n' +
       '           eveniet fuga\n' +
       '           inventore nam non obcaecati quam quasi quis, repellendus vel. Aliquid cum delectus ipsam magni temporibus!'
  },
  {
    iconId: 'react',
    title: 'React',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam\n' +
       '           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia\n' +
       '           tempore.'
  },
  {
    iconId: 'ts',
    title: 'typescript',
    text: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam\n' +
       '           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia\n' +
       '           tempore.'
  },
  {
    iconId: 'st',
    title: 'styled components',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam\n' +
       '           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia\n' +
       '           tempore.'
  },
  {
    iconId: 'figma',
    title: 'WEB DESIgN',
    text: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam\n' +
       '           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia\n' +
       '           tempore.Lorem ipsum dolor s1it amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa\n' +
       '           ipsam\n' +
       '           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia\n' +
       '           tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi deserunt earum ipsa ipsam\n' +
       '           quisquam quod saepe vel voluptas. At aut distinctio dolore, earum exercitationem ipsa libero quaerat quia\n' +
       '           tempore.'
  },
]

export const Skills = () => {
  return (
     <S.Skills id={'skills'}>
       <Title>My Skills</Title>
       <S.SkillsContainer>
         {
           skillData.map((skill, i) => (
              <Skill key={i} iconId={skill.iconId} title={skill.title} text={skill.text}/>
           ))
         }
       </S.SkillsContainer>
     </S.Skills>
  );
};


