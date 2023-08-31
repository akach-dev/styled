import React, {FC, useState} from 'react';
import {Title} from "../../../components/Title";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import social from '../../../assets/images/social.webp'
import timer from '../../../assets/images/timer.webp'
import {Container} from "../../../components/Container";
import {FilterStatusType, TabMenu} from "./tabMenu/TabMenu";
import {S} from './Works_Styles';
import {AnimatePresence, motion} from "framer-motion";

export type TabsItemsPropsTypes = {
  title: string,
  status: FilterStatusType
}

const tabsItems: Array<TabsItemsPropsTypes> = [
  {
    title: 'All',
    status: 'all'
  },
  {
    title: 'landing page',
    status: 'loading'
  },
  {
    title: 'React',
    status: 'react'
  },
  {
    title: 'spa',
    status: 'spa'
  },

]

const worksData = [
  {
    id: '1',
    type: 'spa',
    src: social,
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: '2',
    type: 'react',
    src: timer,
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'
  },
  {
    id: '3',
    type: 'spa',
    src: social,
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: '4',
    type: 'react',
    src: timer,
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'
  },
  {
    id: '5',
    type: 'spa',
    src: social,
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: '6',
    type: 'react',
    src: timer,
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'
  },


]

export const Works: FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState<FilterStatusType>('all')
  let filterWorks = worksData

  switch (currentFilterStatus) {
    case "loading":
      filterWorks = worksData.filter(work => work.type === 'loading');
      break;
    case "react":
      filterWorks = worksData.filter(work => work.type === 'react');
      break;
    case  'spa':
      filterWorks = worksData.filter(work => work.type === 'spa');
      break;
  }

  const changeFilterStatus = (value: FilterStatusType) => setCurrentFilterStatus(value)

  return (


     <S.Works id={'works'}>
       <Container>
         <Title>My Works</Title>
         <TabMenu
            currentFilterStatus={currentFilterStatus}
            changeFilterStatus={changeFilterStatus}
            tabsItems={tabsItems}
            color={'#fff'}/>
         <FlexWrapper justify={'space-between'} wrap={'wrap'}>
           <AnimatePresence>
             {
               filterWorks.map(work => (
                  <motion.div
                     style={{
                       width: '400px',
                       flexGrow: 1,
                       maxWidth: '540px',
                       marginInline: "auto",
                     }}
                     layout
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     exit={{opacity: 0}}
                     key={work.id}
                  >
                    <Work key={work.id} src={work.src} text={work.text} title={work.title}/>
                  </motion.div>
               ))
             }
           </AnimatePresence>

         </FlexWrapper>
       </Container>
     </S.Works>
  );
};



