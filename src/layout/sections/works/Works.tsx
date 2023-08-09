import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/proj1.png"
import todoImg from "./../../../assets/images/proj2.png"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"



const worksItems = ["All", "Landing", "SPA", "React"]

const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat harum, nesciunt odio qui vitae?"
    },

    {
        title: "Todo List",
        src: todoImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugiat harum, nesciunt odio qui vitae?"
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((w, index) => {
                        return <Work title={w.title}
                                     src={w.src}
                                     text={w.text}
                                     key={index}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

