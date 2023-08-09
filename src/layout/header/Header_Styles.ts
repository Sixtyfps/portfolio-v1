import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
  padding: 10px 0 10px;
  background-color: ${theme.colors.header};
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  
  &::before {
    backdrop-filter: blur(10px);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const LogoWrapper = styled.div`
  z-index: 999;
`

export const S = {
    Header,
    LogoWrapper,
}