import styled from "styled-components";
import {Container} from "../../../components/Container";
import {generateAdaptiveStyles} from "../../../assets/generateAdaptiveStyles";

//=============== Skill ========================//

const Skill = styled.div`
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
//=============== Skill ========================//

//============== Skills =========================//

const Skills = styled.section`
  position: relative;
  ${generateAdaptiveStyles({
    property: 'padding-bottom',
    startSize: 140,
    minSize: 120,
    widthFrom: 1170,
    keepSize: 1,
  })}

`
const SkillsContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  column-gap: 40px;


`
//============== Skills =========================//

export const S = {
  Skill, SkillsContainer, SkillText, SkillTitle, Skills
}
