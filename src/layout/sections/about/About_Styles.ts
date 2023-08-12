import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {ButtonAccent} from "../../../components/ButtonAccent";
import {FlexWrapper} from "../../../components/FlexWrapper";

const About = styled.section`
  ${FlexWrapper} {
    gap: 20px;
  }
`

const AboutMeText = styled.div`
  width: 40%;
  flex-grow: 1;

  ${ButtonAccent} {
    margin: 60px 0 0;
  }
`

const PhotoContainer = styled.div`
  position: relative;
  border-bottom: 1px solid ${theme.colors.accentSecondary};
  @media ${theme.media.tablet} {
    display: none;
  }
`

const Photo = styled.img`
  width: 400px;
`

export const S = {
    About,
    AboutMeText,
    PhotoContainer,
    Photo
}