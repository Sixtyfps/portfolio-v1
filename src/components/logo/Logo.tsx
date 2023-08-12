import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <StyledIcon onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={'logoHeader'}/>
            <span>Jurij</span>
        </StyledIcon>
    );
};

const StyledIcon = styled.a`
  display: flex;
  span {
    color: #FFFFFF;
    font-size: 22px;
    font-weight: bold;
    margin: auto 5px;
  }
  &:hover {
    cursor: pointer;
  }
`