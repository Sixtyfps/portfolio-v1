import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles"

const skillData = [
    {
        title: "html5",
        description: "The latest version of the HTML markup language used for web pages and applications development. It includes new elements and attributes that enable the development of more semantic, accessible, and interactive websites",
    },
    {
        title: "css3",
        description: "CSS3 is the latest version of the CSS (Cascading Style Sheets) language used for styling web pages. It introduces new features and capabilities that allow for the creation of more visually appealing, responsive, and interactive websites",

    },
    {
        title: "JavaScript",
        description: "Versatile, high-level programming language that is primarily used to create interactive and dynamic content on the web. It is an essential part of modern web development, enabling developers to build feature-rich, responsive websites and applications",

    },
    {
        title: "React",
        description: "\n" +
            "One of the most popular JavaScript libraries for building user interfaces, particularly for single-page applications where efficient, fast rendering of dynamic content is required. It allows developers to create large web applications that can update and render efficiently in response to data changes",

    },
    {
        title: "TypeScript",
        description: "Statically typed superset of JavaScript that introduces static type definitions to the language. By providing type checking at compile time, TypeScript helps developers identify and correct errors early in the development process. Additionally, it enhances the development experience through robust tooling and integrated development environment (IDE) support, facilitating features such as autocompletion, navigation, and refactoring",

    },
    {
        title: "styled components",
        description: "React and React Native library that allows developers to use component-level styles in their applications. By leveraging tagged template literals, it enables writing CSS directly within JavaScript, promoting a seamless integration of styles and logic",

    },

]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                        {skillData.map((s, index) => {
                            return <Skill title={s.title} key={index}
                                          description={s.description}/>
                        })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


