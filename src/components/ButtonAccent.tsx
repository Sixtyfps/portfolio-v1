import styled from "styled-components";
import {theme} from "../styles/Theme";

export const ButtonAccent = styled.button`
  font-family: Fira Code,sans-serif;
  color: ${theme.colors.accentSecondary};
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  //text-transform: uppercase;
  border: 1px solid ${theme.colors.accent};
  
  :hover {
    background: rgba(199, 120, 221, 0.20);;
  }
`