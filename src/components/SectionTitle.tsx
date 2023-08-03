import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  margin: 0 0 50px;
  color: ${theme.colors.font};
  font-family: "Fira Code",sans-serif;
  font-size: 32px;
  font-weight: 500;
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