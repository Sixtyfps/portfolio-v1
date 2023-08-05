import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import photo from "../../../assets/images/image-about.png";
import {ButtonAccent} from "../../../components/ButtonAccent";
import {theme} from "../../../styles/Theme";

export const About = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>about me</SectionTitle>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <AboutMeText><p>Hello, i’m Jurij!</p>
                        <br/>
                        <p>I’m a self-taught front-end developer based in Riga, Latvia. I can develop responsive
                            websites from scratch and raise them into modern user-friendly web experiences.
                            Transforming my creativity and knowledge into a websites has been my passion for over a
                            year.
                            I have been helping various clients to establish their presence online. I always strive to
                            learn about the newest technologies and frameworks.</p>
                        <br/>
                        <p>Transforming my creativity and knowledge into a websites has been my passion for over a year.
                            I have been helping various clients to establish their presence online. I always strive to
                            learn about the newest technologies and frameworks.</p>
                        <ButtonAccent>Read more --{'>'}</ButtonAccent>
                    </AboutMeText>
                    <PhotoContainer>
                        <Photo src={photo} alt=""/>
                    </PhotoContainer>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`

`

const AboutMeText = styled.div`
  width: 60%;
  //align-self: flex-start;

  ${ButtonAccent} {
    margin: 60px 0 0;
  }
`

const PhotoContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.accentSecondary};
`

const Photo = styled.img`
  width: 400px;
`