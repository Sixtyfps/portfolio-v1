import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/portf-main1.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {ButtonAccent} from "../../../components/ButtonAccent";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <AboutMe>
                        <span>Hello!👋🏻</span>
                        <Name>I'm <span>Jurij</span></Name>
                        <MainTitle>Web Developer</MainTitle>
                        <ButtonAccent>Contact me!</ButtonAccent>
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
  ${font({family:"'Fira Code', sans-serif", weight: 600, FontMax: 32, FontMin: 20})};
  
  @media ${theme.media.tablet} {
  margin: 40px 0;
}
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
  
`

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const Photo = styled.img`
  width: 430px;
  height: 560px;
  object-fit: cover;
  
  @media ${theme.media.mobile} {
    width: 350px;
    height: 460px;
  }
`

const MainTitle = styled.h1`
  ${font({family:"'Fira Code', sans-serif", weight: 700, FontMax: 52, FontMin: 36})}
  background-image: linear-gradient(0deg, ${theme.colors.accent} 30%, ${theme.colors.primaryBg} 100%);
  margin-bottom: 60px;
  color: transparent;
  -webkit-background-clip: text;
  white-space: nowrap;
`

const Name = styled.h2`
  ${font({family:"'Fira Code', sans-serif", weight: 700, FontMax: 52, FontMin: 36})}
  span {
    position: relative;
    z-index: 0;

    &::before {
      content: "{";
      background-image: linear-gradient(0deg, ${theme.colors.accent}, ${theme.colors.primaryBg});
      color: transparent;
      -webkit-background-clip: text;
    }

    &::after {
      content: "}";
      background-image: linear-gradient(0deg, ${theme.colors.accent}, ${theme.colors.primaryBg});
      color: transparent;
      -webkit-background-clip: text;
    }
  }
`