import {theme} from "../styles/Theme";
import styled, {css} from "styled-components";

export const Link = styled.a<{active?: boolean}>`
  position: relative;
  z-index: 0;
  color: ${theme.colors.font};
  font-size: 20px;
  font-weight: 500;
  
  &:hover {
    background-image: linear-gradient(0deg, ${theme.colors.accent} 30%, ${theme.colors.accentSecondary} 70%);
    color: transparent;
    -webkit-background-clip: text;
  }

  ${props => props.active && css<{active?: boolean}>`
    background-image: linear-gradient(0deg, ${theme.colors.accent} 30%, ${theme.colors.accentSecondary} 70%);
    color: transparent;
    -webkit-background-clip: text;
  `}
  
`