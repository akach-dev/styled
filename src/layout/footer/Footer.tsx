import React, {FC} from 'react';
import {Icon} from "../../components/icon/Icon";
import {S} from './Footer_Styles';

const socialItemData = [
  {
    iconId: 'instagram'
  },
  {
    iconId: 'telegram'
  },
  {
    iconId: 'vk'
  },
  {
    iconId: 'linkedin'
  },

]

export const Footer: FC = () => {
  return (
     <S.Footer>
       <S.Name>Svetlana</S.Name>
       <S.SocialList>

         {
           socialItemData.map((social, i) => (
              <S.SocialItem key={i}>
                <S.SocialLink>
                  <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={social.iconId}/>
                </S.SocialLink>
              </S.SocialItem>
           ))
         }

       </S.SocialList>
       <S.Copyright>
         © 2023 Svetlana Dyablo, All Rights Reserved.
       </S.Copyright>
     </S.Footer>
  );
};



