import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
  return (
     <StyledFooter>
       <Name>Svetlana</Name>
       <SocialList>
         <SocialItem>
           <SocialLink>
             <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'instagram'}/>
           </SocialLink>
         </SocialItem>
         <SocialItem>
           <SocialLink>
             <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'tg'}/>
           </SocialLink>
         </SocialItem>
         <SocialItem>
           <SocialLink>
             <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'vk'}/>
           </SocialLink>
         </SocialItem>
         <SocialItem>
           <SocialLink>
             <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'linkedin'}/>
           </SocialLink>
         </SocialItem>
       </SocialList>
       <Copyright>
         © 2023 Svetlana Dyablo, All Rights Reserved.
       </Copyright>
     </StyledFooter>
  );
};


const StyledFooter = styled.footer`
  background: #1F1F20;
  min-width: 200px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;


  & > *:not(:last-child) {
    margin-bottom: 2em;
  }
`
const Name = styled.span`
  color: #FFF;
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 22px;
`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`
const SocialItem = styled.li`


`
const SocialLink = styled.a`


`
const Copyright = styled.small`
  color: rgba(255, 255, 255, 0.50);
  font-size: 0.75rem;
`

