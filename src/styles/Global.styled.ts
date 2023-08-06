import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Fira Code', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.font};
  }
  
  section {
    padding: 70px 0;
    background-color: ${theme.colors.primaryBg};
  }

  h3 {
    font-family: 'Fira Code', sans-serif;
    font-size: 20px;
    font-weight: 600;
  }
  
  p {
    line-height: 1.5em;
    color: ${theme.colors.accentSecondary};
  }
  
`