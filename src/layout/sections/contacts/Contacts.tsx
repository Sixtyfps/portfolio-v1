import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>contact</SectionTitle>
                <StyledForm>

                    <Label>
                        <Field placeholder={""}/>
                        <span>Name</span>
                    </Label>
                    <Label>
                        <Field placeholder={""}/>
                        <span>Subject</span>
                    </Label>
                    <Label>
                        <Field placeholder={""} as={"textarea"}/>
                        <span>Message</span>
                    </Label>

                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`

`

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
  
  span {
    padding:10px;
    pointer-events: none;
    position:absolute;
    left:0;
    top:0;
    transition: 0.2s;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    opacity:0.5;
  }
`


const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 150px;
  }
`

const Field = styled.input`
  display: inline-block;
  font-family: Fira Code, sans-serif;
  width: 100%;
  padding: 8px;
  border: 1px solid ${theme.colors.accentSecondary};
  color: ${theme.colors.font};
  background-color: ${theme.colors.primaryBg};
  font-size: 16px;

  &::placeholder {
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.accentSecondary};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.font};
  }
  
  &:focus + span{
    opacity:1;
    transform: translateY(-35px) translateX(-5px);
  }
`
