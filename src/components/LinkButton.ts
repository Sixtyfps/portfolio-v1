import styled from "styled-components";
import {theme} from "../styles/Theme";

export const LinkButton = styled.a`
    font-family: Fira Code, sans-serif;
    color: ${theme.colors.accentSecondary};
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    border: 1px solid ${theme.colors.accentSecondary};
    display: inline-block;
    text-decoration: none;
    outline: none;

    :hover {
        background: rgba(171, 178, 191, 0.20);
    }
`