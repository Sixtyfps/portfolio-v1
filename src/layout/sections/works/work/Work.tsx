import React from 'react';
import {LinkButton} from "../../../../components/LinkButton";
import {Button} from "../../../../components/Button";
import {S} from "./../Works_Styles"


type WorkPropsType = {
    title: string
    text: string
    src: string
    codeLink: string
    demoLink: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <S.ButtonContainer className={'buttonContainer'}>
                    <LinkButton href={props.demoLink} target="_blank">View Project</LinkButton>
                </S.ButtonContainer>

            </S.ImageWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                {/*<LinkButton href={props.demoLink} target="_blank">Demo</LinkButton>*/}
                <LinkButton href={props.codeLink} target="_blank">view code</LinkButton>
            </S.Description>

        </S.Work>
    );
};

