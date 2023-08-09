import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {S} from "./Slogan_Styles"

export const Slogan: React.FC = () => {
    return (
        <S.Slogan>
            <Container>
                <SectionTitle>freelance</SectionTitle>
                <FlexWrapper direction={"row"} justify={"space-between"} wrap={"wrap"}>
                    <S.Description>I’m interested in freelance opportunities.
                        However, if you have other request or question, don’t hesitate to contact me
                    </S.Description>
                    <S.ContactBox>
                        <h3>Message me here</h3>
                        <S.Contact href={"#"}>
                            <Icon width={"30"} height={"30"} viewBox={"0 0 30 30"} iconId={"Email"}/>
                            <S.IconText>34411ds@gmail.com</S.IconText>
                        </S.Contact>
                        <S.Contact href={"#"}>
                            <Icon width={"30"} height={"30"} viewBox={"0 0 30 30"} iconId={"Linkedin"}/>
                            <S.IconText>Linkedin</S.IconText>
                        </S.Contact>
                        <S.Contact href={"#"}>
                            <Icon width={"30"} height={"30"} viewBox={"0 0 30 30"} iconId={"Telegram"}/>
                            <S.IconText>Telegram</S.IconText>
                        </S.Contact>
                    </S.ContactBox>

                </FlexWrapper>
            </Container>
        </S.Slogan>
    );
};

