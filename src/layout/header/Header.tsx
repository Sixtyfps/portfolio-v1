import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const items = ["home", "skills", "works", "about", "contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <LogoWrapper>
                        <Logo/>
                    </LogoWrapper>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>

                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
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
