import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const AboutMe = styled.div`
  ${font({family:"'Fira Code', sans-serif", weight: 600, FontMax: 32, FontMin: 20})};
  
  @media ${theme.media.tablet} {
  margin: 40px 0;
}
`

const PhotoContainer = styled.div`
  position: relative;
  &::after {
    top: 99%;
    font-size: 20px;
    position: absolute;
    width: 100%;
    padding: 0 10px;
    display: flex;
    content: "Currently open for offers";
    border: 1px solid ${theme.colors.accentSecondary};
    background-color: ${theme.colors.primaryBg};
  }
  
`

const Main = styled.section`
  min-height: 100vh;
  display: flex;
`

const Photo = styled.img`
  width: 430px;
  height: 560px;
  object-fit: cover;
  
  @media ${theme.media.mobile} {
    width: 350px;
    height: 460px;
  }
`

const MainTitle = styled.h1`
  ${font({family:"'Fira Code', sans-serif", weight: 700, FontMax: 52, FontMin: 36})}
  background-image: linear-gradient(0deg, ${theme.colors.accent} 30%, ${theme.colors.primaryBg} 100%);
  margin-bottom: 60px;
  color: transparent;
  -webkit-background-clip: text;
  white-space: nowrap;
`

const Name = styled.h2`
  ${font({family:"'Fira Code', sans-serif", weight: 700, FontMax: 52, FontMin: 36})}
  span {
    position: relative;
    z-index: 0;

    &::before {
      content: "{";
      background-image: linear-gradient(0deg, ${theme.colors.accent}, ${theme.colors.primaryBg});
      color: transparent;
      -webkit-background-clip: text;
    }

    &::after {
      content: "}";
      background-image: linear-gradient(0deg, ${theme.colors.accent}, ${theme.colors.primaryBg});
      color: transparent;
      -webkit-background-clip: text;
    }
  }
`

export const S = {
    AboutMe,
    PhotoContainer,
    Main,
    Photo,
    MainTitle,
    Name
}