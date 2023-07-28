import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledIcon href="">
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
`