import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({family: "'Fira Code',sans-serif", weight: 500, FontMax: 32, FontMin: 28})}
  margin: 0 0 50px;
  color: ${theme.colors.font};
  position: relative;
  
    &::before {
      content: "#";
      color: ${theme.colors.accent};
    }
  
    &::after {
      margin: 0 16px;
      position: absolute;
      top: 50%;
      content: "";
      display: inline-block;
      width: 30%;
      height: 1px;
      background-color: ${theme.colors.accent};
    }
`