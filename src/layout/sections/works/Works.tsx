import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/proj1.png"
import timerImg from "./../../../assets/images/proj2.png"
import {Container} from "../../../components/Container";

const worksItems = ["All", "Landing", "SPA", "React"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Work title={"Soc net"}
                          src={socialImg}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat harum, nesciunt odio qui vitae?"}/>
                    <Work title={"Timer"}
                          src={timerImg}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quasi."}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`