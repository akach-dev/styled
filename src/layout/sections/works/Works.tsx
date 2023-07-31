import {FC} from 'react';
import {Title} from "../../../components/Title";

import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import social from '../../../assets/images/social.webp'
import timer from '../../../assets/images/timer.webp'
import {Container} from "../../../components/Container";
import {TabMenu} from "./tabMenu/TabMenu";
import {S} from './Works_Styles';


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
     <S.Works>
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
     </S.Works>
  );
};



