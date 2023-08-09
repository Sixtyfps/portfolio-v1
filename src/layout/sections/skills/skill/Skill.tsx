import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "../Skills_Styles"


type SkillPropsType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.SkillTitleContainer>
                    <S.SkillTitle>{props.title}</S.SkillTitle>
                </S.SkillTitleContainer>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};
