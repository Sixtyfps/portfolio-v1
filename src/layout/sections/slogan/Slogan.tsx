import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <SectionTitle>I Am Available For Freelance</SectionTitle>
                <FlexWrapper direction={"row"} justify={"space-between"}>
                    <Text>I’m interested in freelance opportunities.
                        However, if you have other request or question, don’t hesitate to contact me</Text>
                    <ContactBox>
                        <h3>Message me here</h3>
                        <Text>34411ds@gmail.com</Text>
                        <Text>linkedin</Text>
                        <Text>telegram</Text>
                    </ContactBox>

                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`

`

const Text = styled.p`
  width: 50%;
`

const ContactBox = styled.div`
  padding: 16px;
  border: 1px solid ${theme.colors.accentSecondary};
`