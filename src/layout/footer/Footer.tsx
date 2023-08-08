import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {Logo} from "../../components/logo/Logo";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"row"} justify={"space-between"}>
                    <MainInfo>
                        <Icon width={"16"} height={"16"} viewBox={"0 0 16 16"} iconId={'logoHeader'}/>
                        <Name>Jurij</Name>
                        <Description>Web designer and front-end developer</Description>
                    </MainInfo>

                    <SocialList>
                        <h3>Media</h3>
                        <SocialItem>
                            <SocialLink href={"#"}>
                                <Icon width={"30"} height={"30"} viewBox={"0 0 30 30"} iconId={"Github"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href={"#"}>
                                <Icon width={"30"} height={"30"} viewBox={"0 0 30 30"} iconId={"Linkedin"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href={"#"}>
                                <Icon width={"30"} height={"30"} viewBox={"0 0 30 30"} iconId={"Dribble"}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </FlexWrapper>
                <Copyright>© 2023 Jurij, All Rights Reserved.</Copyright>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding: 30px 0;
  border-top: 1px solid ${theme.colors.accentSecondary};
  background-color: ${theme.colors.primaryBg};
  text-align: center;

  ${FlexWrapper} {
  gap: 10px;
  }
`

const MainInfo = styled.div`
  text-align: left;
`

const Description = styled.div`

`

const Name = styled.span`
  margin-bottom: 16px;
  margin-left: 10px;
  display: inline-block;
  color: ${theme.colors.font};
  font-size: 16px;
  font-weight: 500;
`

const SocialList = styled.ul`
  text-align: left;
  white-space: nowrap;
  
  h3 {
    margin-left: 10px;
    margin-bottom: 5px;
    color: ${theme.colors.font};
    font-size: 24px;
    font-weight: 500;
  }
`

const SocialItem = styled.li`
  display: inline-block;
  margin: 0 7px;
`

const SocialLink = styled.a`
  color: ${theme.colors.accentSecondary};
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    transform: translateY(-4px);
    color: ${theme.colors.accent};
  }
`

const Copyright = styled.small`
  color: ${theme.colors.accentSecondary};
  font-size: 16px;
  display: inline-block;
  margin-top: 50px;
`