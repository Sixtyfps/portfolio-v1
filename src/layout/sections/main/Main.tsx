import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/portf-main1.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <span>Hello</span>
                        <Name>I'm Jurij</Name>
                        <MainTitle>Web Developer</MainTitle>
                    </div>
                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #c0c4e5;
  display: flex;
`

const Photo = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`