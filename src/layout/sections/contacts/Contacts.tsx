import React, { useRef } from 'react';
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_xjoxnmu', 'template_b6qllbh', form.current, 'Rd1hWf8Mx-3yKeQip')
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <S.Contact id="contact">
            {/*<Container>*/}
            {/*    <SectionTitle>contact</SectionTitle>*/}

            {/*    <S.StyledForm ref={form} onSubmit={sendEmail}>*/}
            {/*        <S.Label>Name</S.Label>*/}
            {/*        <S.Input placeholder="" type="text" name="from_name" />*/}

            {/*        <S.Label>Email</S.Label>*/}
            {/*        <S.Input placeholder="" type="email" name="reply_to" />*/}

            {/*        <S.Label>Message</S.Label>*/}
            {/*        <S.Input placeholder="" as="textarea" name="message" />*/}

            {/*        <Button type="submit" value="Send">Send message</Button>*/}
            {/*    </S.StyledForm>*/}
            {/*</Container>*/}

            <Container>
                <SectionTitle>contact</SectionTitle>
                <S.StyledForm ref={form} onSubmit={sendEmail}>

                    <S.Label>
                        <S.Input placeholder={""} type="text" name="from_name"/>
                        <span>Name</span>
                    </S.Label>
                    <S.Label>
                        <S.Input  placeholder="" type="email" name="reply_to"/>
                        <span>Email</span>
                    </S.Label>
                    <S.Label>
                        <S.Input  placeholder="" as="textarea" name="message" />
                        <span>Message</span>
                    </S.Label>

                    <Button type={"submit"}>Send message</Button>
                </S.StyledForm>
            </Container>


        </S.Contact>
    );
};
