import React from 'react';
import hero from "../../../assets/images/photo.webp"
import {S} from './Hero_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Hero = () => {
  return (
     <S.Hero id={'hero'}>
       <S.HeroContainer>

         <S.HeroBody>

           <S.HeroHi>Hi There</S.HeroHi>
           <S.HeroTitle>I am <span>Svetlana Dyablo</span></S.HeroTitle>
           <S.HeroSubTitle>
             <p>
               A Frontend Developer
             </p>
             <Typewriter
                options={{
                  strings: ['A Web Developer.', 'A Frontend Developer'],
                  autoStart: true,
                  loop: true,
                }}
             />
           </S.HeroSubTitle>
         </S.HeroBody>

         <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
         >
           <S.HeroImg>
             <S.Img src={hero} alt="my img"/>
           </S.HeroImg>
         </Tilt>
       </S.HeroContainer>
     </S.Hero>
  );
};

