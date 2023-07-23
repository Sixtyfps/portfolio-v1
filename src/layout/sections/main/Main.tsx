import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/portf-main.png'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hello</span>
                    <Name>I'm Jurij</Name>
                    <MainTitle>Web Developer</MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #c0c4e5;
`

const Photo = styled.img`
  width: 350px;
  height: 460px;
  object-fit: cover;
`

const MainTitle = styled.h1`
    
`

const Name = styled.h2`
    
`