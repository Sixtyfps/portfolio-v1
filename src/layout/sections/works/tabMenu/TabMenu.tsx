import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";

export type TabsStatusType = "all" | "landing" | "react" | "spa";

type TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType,title: string}>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map( (item, index)=>{
                    return <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={()=> {props.changeFilterStatus(item.status)} }>{item.title}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`

  ul {
    justify-content: space-between;
    display: flex;
    max-width: 350px;
    width: 100%;
    margin: 0 auto 50px;
  }
`

const ListItem = styled.li`
  ::before{
    content: "#";
    color: ${theme.colors.accent};
    font-size: 20px;
    font-weight: 500;
  }
`

