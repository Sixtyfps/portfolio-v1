import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <SectionTitle>freelance</SectionTitle>
                <FlexWrapper direction={"row"} justify={"space-between"} wrap={"wrap"}>
                    <Description>I’m interested in freelance opportunities.
                        However, if you have other request or question, don’t hesitate to contact me
                    </Description>
                    <ContactBox>
                        <h3>Message me here</h3>
                        <Contact href={"#"}>
                            <Icon width={"30"} height={"30"} viewBox={"0 0 30 30"} iconId={"Email"}/>
                            <IconText>34411ds@gmail.com</IconText>
                        </Contact>
                        <Contact href={"#"}>
                            <Icon width={"30"} height={"30"} viewBox={"0 0 30 30"} iconId={"Linkedin"}/>
                            <IconText>Linkedin</IconText>
                        </Contact>
                        <Contact href={"#"}>
                            <Icon width={"30"} height={"30"} viewBox={"0 0 30 30"} iconId={"Telegram"}/>
                            <IconText>Telegram</IconText>
                        </Contact>
                    </ContactBox>

                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  ${FlexWrapper} {
    gap: 20px;
  }
  padding-bottom: 150px;
`

const Description = styled.p`
  width: 50%;
  @media ${theme.media.tablet} {
    flex-grow: 1;
  }
`

const Contact = styled.a`
  color: ${theme.colors.accentSecondary};
  margin: 5px 0;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`

const ContactBox = styled.div`
  padding: 16px;
  border: 1px solid ${theme.colors.accentSecondary};
  
  @media ${theme.media.tablet} {
    flex-grow: 1; 
  }
  
`

const IconText = styled.p`
  display: inline-block;
  margin-left: 5px;
  line-height: 30px;
`