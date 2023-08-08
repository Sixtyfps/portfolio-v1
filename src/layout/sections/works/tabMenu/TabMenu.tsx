import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map( (item, index)=>{
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  //margin-bottom: 50px;

  ul {
  text-transform: lowercase;
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

