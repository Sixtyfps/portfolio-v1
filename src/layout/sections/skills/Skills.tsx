import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"flex-start"}>
                    <Skill title={"html5"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa"}/>
                    <Skill title={"css"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa"}/>
                    <Skill title={"js"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa"}/>
                    <Skill title={"js"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa"}/>
                    <Skill title={"js"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa"}/>
                    <Skill title={"js"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`
