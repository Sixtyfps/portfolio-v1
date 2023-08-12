import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
  font-family: Fira Code,sans-serif;
  color: ${theme.colors.accentSecondary};
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  border: 1px solid ${theme.colors.accentSecondary};

  
  :hover {
    background: rgba(171, 178, 191, 0.20);
  }
`