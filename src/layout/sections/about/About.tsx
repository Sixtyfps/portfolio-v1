import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import photo from "../../../assets/images/image-about.png";
import {ButtonAccent} from "../../../components/ButtonAccent";
import {S} from "./About_Styles"

export const About: React.FC = () => {
    return (
        <S.About>
            <Container>
                <SectionTitle>about me</SectionTitle>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <S.AboutMeText><p>Hello, i’m Jurij!</p>
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
                    </S.AboutMeText>
                    <S.PhotoContainer>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoContainer>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};

