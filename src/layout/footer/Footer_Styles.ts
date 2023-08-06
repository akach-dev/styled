import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../assets/adaptiveValue";
import {generateAdaptiveStyles} from "../../assets/generateAdaptiveStyles";

const Footer = styled.footer`
  position: relative;
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
  ${font({family: 'Josefin Sans, sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
  letter-spacing: 3px;
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
  ${generateAdaptiveStyles({
    property: 'font-size',
    startSize: 40,
    minSize: 18,
    widthFrom: 1140,
    widthTo: 480,
    keepSize: 2,
  })}
`

export const S = {
  Footer, Name, Copyright, SocialItem, SocialLink, SocialList
}
