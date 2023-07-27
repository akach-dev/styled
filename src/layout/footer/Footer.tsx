import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";

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
             <Icon width={'21px'} height={'21px'} viewBox={'0 0 21 21'} iconId={'telegram'}/>
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
  background: ${theme.colors.primaryBg};
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 2em;
  }
`
const Name = styled.span`
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 1.375rem;
  font-family: Josefin Sans, sans-serif;
`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.10);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  @media (any-hover: hover) {
    &:hover {
      background: ${theme.colors.accent};
      transform: translateY(-4px);

      svg {
        color: ${theme.colors.primaryBg};
      }
    }
  }
`
const Copyright = styled.small`
  opacity: 0.5;
  font-size: 0.75rem;
`

