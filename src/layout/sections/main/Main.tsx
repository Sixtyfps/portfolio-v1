import React from 'react';
import photo from '../../../assets/images/portf-main1.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {ButtonAccent} from "../../../components/ButtonAccent";
import {S} from "./Main_Styles";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.AboutMe>
                        {/*<span>Hello!👋🏻</span>*/}
                        <span>
                            <Typewriter
                                options={{
                                    strings: ['Hello, World!'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                        <S.Name>I'm <span>Jurij</span></S.Name>
                        <S.MainTitle>Web Developer</S.MainTitle>
                        <ButtonAccent>Contact me!</ButtonAccent>
                    </S.AboutMe>
                    <S.PhotoContainer>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoContainer>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

