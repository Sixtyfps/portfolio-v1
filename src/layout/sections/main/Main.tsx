import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/portf-main1.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <AboutMe>
                        <span>Hello!👋🏻</span>
                        <Name>I'm <span>Jurij</span></Name>
                        <MainTitle>Web Developer</MainTitle>
                    </AboutMe>
                    <PhotoContainer>
                        <Photo src={photo} alt=""/>
                    </PhotoContainer>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const AboutMe = styled.div`
  font-size: 32px;
  font-weight: 600;
`

const PhotoContainer = styled.div`
  position: relative;
  &::after {
    top: 99%;
    font-size: 20px;
    position: absolute;
    width: 100%;
    padding: 0 10px;
    display: flex;
    content: "Currently open for offers";
    border: 1px solid ${theme.colors.accentSecondary};
    background-color: ${theme.colors.primaryBg};
  }
  
  &::before {
    
  }
`

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const Photo = styled.img`
  width: 430px;
  height: 560px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  color: ${theme.colors.accent};
  font-size: 40px;
`

const Name = styled.h2`
  span {
    position: relative;
    z-index: 0;

    &::before {
      content: "{";
      color: ${theme.colors.accent};
    }

    &::after {
      content: "}";
      color: ${theme.colors.accent};
    }
  }
`