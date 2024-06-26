import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "../skills/Skills_Styles"
import {HtmlIcon} from "../../../components/svgComponents/HtmlIcon";
import {CssIcon} from "../../../components/svgComponents/CsslIcon";
import {JavascriptlIcon} from "../../../components/svgComponents/JavascriptlIcon";
import {ReactlIcon} from "../../../components/svgComponents/ReactlIcon";
import {TypescriptlIcon} from "../../../components/svgComponents/TypescriptlIcon";
import {StorybookIcon} from "../../../components/svgComponents/StorybookIcon";
import {StyledcomponentsIcon} from "../../../components/svgComponents/StyledcomponentsIcon";
import {ReduxIcon} from "../../../components/svgComponents/ReduxIcon";
import {GitIcon} from "../../../components/svgComponents/GitIcon";

const skillData = [
    {
        iconComponent: <HtmlIcon/>,
        title: "html5",
        description: "HTML is a technology used for web pages and applications development. " +
            "It includes new elements and attributes that enable the development of more semantic, accessible, " +
            "and interactive websites"
    },
    {
        iconComponent: <CssIcon/>,
        title: "css3",
        description: "Cascading Style Sheets is a technology used for styling web pages. " +
            "It introduces new features and capabilities that allow for the creation of more visually appealing, " +
            "responsive, and interactive websites"
    },
    {
        iconComponent: <JavascriptlIcon/>,
        title: "JavaScript",
        description: "JavaScript is a versatile, high-level programming language that is primarily used to create interactive and " +
            "dynamic content on the web. It is an essential part of modern web development, enabling developers to " +
            "build feature-rich, responsive websites and applications"
    },
    {
        iconComponent: <ReactlIcon/>,
        title: "React",
        description: "\n" +
            "React is one of the most popular JavaScript libraries for building user interfaces, particularly for single-page " +
            "applications where efficient, fast rendering of dynamic content is required. It allows developers to " +
            "create large web applications that can update and render efficiently in response to data changes"
    },
    {
        iconComponent: <TypescriptlIcon/>,
        title: "TypeScript",
        description: "TypeScript is a statically typed superset of JavaScript that introduces static type definitions to the language. " +
            "By providing type checking at compile time, TypeScript helps developers identify and correct errors early " +
            "in the development process."
    },
    {
        iconComponent: <StyledcomponentsIcon/>,
        title: "styled components",
        description: "Styled components is React and React Native library that allows developers to use component-level styles in their " +
            "applications. By leveraging tagged template literals, it enables writing CSS directly within JavaScript, " +
            "promoting a seamless integration of styles and logic"
    },
    {
        iconComponent: <StorybookIcon/>,
        title: "Storybook",
        description: "Storybook is a comprehensive tool designed for the development, testing, and documentation of UI " +
            "components in isolation. By providing an environment where developers can work on individual components " +
            "separately from the main application, Storybook streamlines the development process and enhances the " +
            "overall quality of the user interface"
    },
    {
        iconComponent: <ReduxIcon/>,
        title: "Redux",
        description: "Redux is a predictable state management library for JavaScript applications, commonly used with " +
            "React but also compatible with other frameworks and libraries. Its principles of a single source of " +
            "truth, predictable state changes, and action-based updates make it an essential tool for building " +
            "complex, maintainable, and testable applications"
    },
    {
        iconComponent: <GitIcon/>,
        title: "Git",
        description: "Git is a distributed version control system that tracks changes in source code during software " +
            "development. It allows multiple developers to work on a project simultaneously, merging their " +
            "contributions seamlessly. Git also provides tools for collaboration, history tracking, and version " +
            "management, ensuring a robust and efficient workflow"
    },

]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    {skillData.map((s, index) => {
                        return <Skill iconComponent={s.iconComponent} title={s.title} key={index}
                                      description={s.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


