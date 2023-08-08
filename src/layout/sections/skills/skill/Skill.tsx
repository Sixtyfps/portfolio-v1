import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <SkillTitleContainer>
                    <SkillTitle>{props.title}</SkillTitle>
                </SkillTitleContainer>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  ${FlexWrapper} {
    gap: 0;
  }
  margin: 0 0 20px;
  width: 300px;
  flex-grow: 1;
  border: 1px solid ${theme.colors.accentSecondary};
`

const SkillTitleContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.accentSecondary};
  width: 100%;
`

const SkillTitle = styled.h3`
  padding: 8px;
`
const SkillText = styled.p`
  padding: 8px;
`