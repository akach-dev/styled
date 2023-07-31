import {FC} from 'react';
import styled from "styled-components";
import {Title} from "../../../components/Title";

import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import social from '../../../assets/images/social.webp'
import timer from '../../../assets/images/timer.webp'
import {Container} from "../../../components/Container";
import {TabMenu} from "./tabMenu/TabMenu";


const workItems = [
  "All", 'landing page', 'React', 'spa'
]
const workData = [
  {
    id: '1',
    src: social,
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: '2',
    src: timer,
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'
  }
]


export const Works: FC = () => {
  return (
     <StyledWorks>
       <Container>
         <Title>My Works</Title>
         <TabMenu menuItems={workItems} color={'#fff'}/>
         <FlexWrapper justify={'space-between'} wrap={'wrap'}>
           {
             workData.map(work => (
                <Work key={work.id} src={work.src} text={work.text} title={work.title}/>
             ))
           }
         </FlexWrapper>
       </Container>
     </StyledWorks>
  );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }

  h2:not(:last-child) {
    margin-bottom: 2.25em;
  }
`

