import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles";

export const Contact: React.FC = () => {
    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>contact</SectionTitle>
                <S.StyledForm>

                    <S.Label>
                        <S.Input placeholder={""}/>
                        <span>Name</span>
                    </S.Label>
                    <S.Label>
                        <S.Input placeholder={""}/>
                        <span>Subject</span>
                    </S.Label>
                    <S.Label>
                        <S.Input placeholder={""} as={"textarea"}/>
                        <span>Message</span>
                    </S.Label>

                    <Button type={"submit"}>Send message</Button>
                </S.StyledForm>
            </Container>
        </S.Contact>
    );
};
