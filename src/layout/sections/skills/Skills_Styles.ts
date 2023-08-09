import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
  ${FlexWrapper} {
    gap: 20px;
  }
`

const Skill = styled.div`
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

export const S = {
  Skills,
  Skill,
  SkillTitleContainer,
  SkillTitle,
  SkillText
}