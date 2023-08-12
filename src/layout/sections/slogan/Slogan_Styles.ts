import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Slogan = styled.section`
  position: relative;
  ${FlexWrapper} {
    gap: 20px;
  }
  padding-bottom: 150px;
`

const Description = styled.p`
  width: 50%;
  @media ${theme.media.tablet} {
    flex-grow: 1;
  }
`

const Contact = styled.a`
  color: ${theme.colors.accentSecondary};
  margin: 5px 0;
  display: flex;
  align-items: center;
  transition: ${theme.animations.transition};
  
  &:hover {
    color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`

const ContactBox = styled.div`
  padding: 16px;
  border: 1px solid ${theme.colors.accentSecondary};
  
  @media ${theme.media.tablet} {
    flex-grow: 1; 
  }
  
`

const IconText = styled.p`
  display: inline-block;
  margin-left: 5px;
  line-height: 30px;
`

export const S = {
    Slogan,
    Description,
    Contact,
    ContactBox,
    IconText
}