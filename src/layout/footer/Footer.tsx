import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {S} from "./Footer_Styles";

const socialItemsData = [
    {
        iconId: "Github",
        href: "#"
    },
    {
        iconId: "Linkedin",
        href: "#"
    },
    {
        iconId: "Dribble",
        href: "#"
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"row"} justify={"space-between"}>
                    <S.MainInfo>
                        <Icon width={"16"} height={"16"} viewBox={"0 0 16 16"} iconId={'logoHeader'}/>
                        <S.Name>Jurij</S.Name>
                        <S.Description>Web designer and front-end developer</S.Description>
                    </S.MainInfo>

                    <S.SocialList>
                        <h3>Media</h3>

                        {socialItemsData.map((s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLink href={s.href}>
                                        <Icon width={"30"} height={"30"} viewBox={"0 0 30 30"} iconId={s.iconId}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}

                    </S.SocialList>
                </FlexWrapper>
                <S.Copyright>© 2023 Jurij, All Rights Reserved.</S.Copyright>
            </Container>

        </S.Footer>
    );
};
