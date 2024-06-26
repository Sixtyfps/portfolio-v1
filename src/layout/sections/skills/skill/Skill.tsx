import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "../Skills_Styles"


type SkillPropsType = {
    title: string
    description: string
    iconComponent: JSX.Element
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.SkillTitleContainer>
                    <S.SkillTitle>
                        {props.title}
                        {props.iconComponent}
                        {/*<Icon  iconId={props.iconId} height={'30'} width={'30'} viewBox={'0 0 110 140'}></Icon>*/}
                        {/*<HtmlIcon width={'30'} height={'30'}/>*/}
                    </S.SkillTitle>
                </S.SkillTitleContainer>
                    <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};
