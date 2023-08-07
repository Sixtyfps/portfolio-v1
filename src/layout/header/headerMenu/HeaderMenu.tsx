import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map( (item, index)=>{
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
      justify-content: center;
      display: flex;
      gap: 50px;
    }
  
  @media ${theme.media.tablet} {
    display: none;
  }
`

const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  &::before {
    content: "#";
    color: ${theme.colors.accent};
    
  }
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 12px;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.font};
  
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top:50%;
    left: 15px;
    right: -5px;
    z-index: 1;
    transform: scale(0);
  }
  
  &:hover {
    &::before{
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(15deg);
      color: ${theme.colors.font};
      
      & + ${Mask} {
        transform: skewX(15deg);
      }
    }
    
  }
`