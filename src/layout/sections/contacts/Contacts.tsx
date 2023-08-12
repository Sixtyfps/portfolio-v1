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
                        <S.Field placeholder={""}/>
                        <span>Name</span>
                    </S.Label>
                    <S.Label>
                        <S.Field placeholder={""}/>
                        <span>Subject</span>
                    </S.Label>
                    <S.Label>
                        <S.Field placeholder={""} as={"textarea"}/>
                        <span>Message</span>
                    </S.Label>

                    <Button type={"submit"}>Send message</Button>
                </S.StyledForm>
            </Container>
        </S.Contact>
    );
};
