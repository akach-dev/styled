import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {S} from './Footer_Styles';

export const Footer = () => {

  return (
     <S.Footer>
       <S.Name>Svetlana</S.Name>
       <S.SocialList>
         <S.SocialItem>
           <S.SocialLink>
             <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'instagram'}/>
           </S.SocialLink>
         </S.SocialItem>
         <S.SocialItem>S.
           <S.SocialLink>
             <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'telegram'}/>
           </S.SocialLink>
         </S.SocialItem>
         <S.SocialItem>
           <S.SocialLink>
             <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'vk'}/>
           </S.SocialLink>
         </S.SocialItem>
         <S.SocialItem>
           <S.SocialLink>
             <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'linkedin'}/>
           </S.SocialLink>
         </S.SocialItem>
       </S.SocialList>
       <S.Copyright>
         © 2023 Svetlana Dyablo, All Rights Reserved.
       </S.Copyright>
     </S.Footer>
  );
};



