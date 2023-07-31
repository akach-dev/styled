import React from 'react';
import hero from "../../../assets/images/photo.webp"
import {S} from './Hero_Styles';

export const Hero = () => {
  return (
     <S.Hero>
       <S.HeroContainer>

         <S.HeroBody>
           <S.HeroHi>Hi There</S.HeroHi>
           <S.HeroTitle>I am <span>Svetlana Dyablo</span></S.HeroTitle>
           <S.HeroSubTitle>A Web Developer. </S.HeroSubTitle>
         </S.HeroBody>

         <S.HeroImg>
           <S.Img src={hero} alt="my img"/>
         </S.HeroImg>

       </S.HeroContainer>
     </S.Hero>
  );
};


