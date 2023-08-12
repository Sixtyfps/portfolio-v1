import {theme} from "../styles/Theme";
import styled, {css} from "styled-components";

export const Link = styled.a<{active?: boolean}>`
  font-family: 'Fira Code',sans-serif;
  text-transform: lowercase;
  position: relative;
  z-index: 0;
  color: ${theme.colors.font};
  font-size: 24px;
  font-weight: 500;
  transition: ${theme.animations.transition};
  
  &:hover {
    color: ${theme.colors.accent}
  }

  ${props => props.active && css<{active?: boolean}>`
    color: ${theme.colors.accent}
  `}
  
`