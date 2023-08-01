import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {TabsItemsPropsTypes} from "../Works";

export type FilterStatusType = 'all' | 'loading' | 'react' | 'spa'

type TabMenuPropsTypes = {
  tabsItems: TabsItemsPropsTypes[]
  color?: string
  currentFilterStatus: FilterStatusType
  changeFilterStatus: (value: FilterStatusType) => void
}

export const TabMenu = ({tabsItems, color, changeFilterStatus, currentFilterStatus}: TabMenuPropsTypes) => {
  return (
     <StyledTabMenu color={color}>
       <ul>
         {
           tabsItems.map((tab, index) => (
              <ListItem key={index}>
                <Link
                   active={currentFilterStatus === tab.status}
                   as={'button'}
                   onClick={() => changeFilterStatus(tab.status)}
                >{tab.title}</Link>
              </ListItem>
           ))
         }
       </ul>
     </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`

  &:not(:last-child) {
    margin-bottom: 3em;
  }

  ul {
    margin-inline: auto;
    max-width: 352px;
    display: flex;
    justify-content: space-between;
  }
`
const ListItem = styled.li`
  button {
    width: auto;
    height: auto;
  }
`

