import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import photo from "../../../assets/images/image-about.png";
import {ButtonAccent} from "../../../components/ButtonAccent";
import {S} from "./About_Styles"

export const About: React.FC = () => {
    return (
        <S.About id={"about"}>
            <Container>
                <SectionTitle>about me</SectionTitle>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <S.AboutMeText><p>Hello, i’m Jurij!</p>
                        <br/>
                        <p>I’m a self-taught front-end developer based in Riga, Latvia. I can develop responsive
                            websites from scratch and raise them into modern user-friendly web experiences.
                            Transforming my creativity and knowledge into a websites is my true passion.
                            I always strive to learn about the latest technologies and frameworks and continuously
                            challenge myself by solving algorithmic problems to keep my skills sharp.</p>
                        <br/>
                        <p>Outside of work, I enjoy staying active, whether it's through physical exercises
                            or taking walks in nature. I also have a passion for road trips, particularly to new and
                            unexplored places, as they offer fresh perspectives and a mental refresh.</p>
                        {/*<ButtonAccent>Read more --{'>'}</ButtonAccent>*/}
                    </S.AboutMeText>
                    <S.PhotoContainer>
                        {/*<S.Photo src={photo} alt=""/>*/}
                    </S.PhotoContainer>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};

