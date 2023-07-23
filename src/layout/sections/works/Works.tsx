import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/proj1.png"
import timerImg from "./../../../assets/images/proj2.png"

const worksItems = ["All", "Landing", "SPA", "React"]
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Soc net"}
                      src={socialImg}
                      text={"Lorem ipsum"} />
                <Work title={"Timer"}
                      src={timerImg}
                      text={"Lorem ipsum"}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #a2c8e0;
`