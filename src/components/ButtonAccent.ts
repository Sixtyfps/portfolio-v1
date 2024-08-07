import styled from "styled-components";
import {theme} from "../styles/Theme";

export const ButtonAccent = styled.button`
    width: 100%;
    font-family: Fira Code, sans-serif;
    color: ${theme.colors.accentSecondary};
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    //text-transform: uppercase;
    border: 1px solid ${theme.colors.accent};
    transition: ${theme.animations.transition};

    :hover {
        background: rgba(199, 120, 221, 0.20);;
    }

    @media ${theme.media.tablet} {
        width: 100%;
    }
`