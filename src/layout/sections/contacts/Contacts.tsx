import React, { useRef } from 'react';
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";
import emailjs from '@emailjs/browser';
import {enqueueSnackbar, SnackbarProvider} from "notistack";

export const Contact: React.FC = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {

            // Validate the form fields
            const formData = new FormData(form.current);
            const fromName = formData.get('from_name') as string;
            const replyTo = formData.get('reply_to') as string;
            const message = formData.get('message') as string;

            if (!fromName || !replyTo || !message) {
                enqueueSnackbar('All fields are required.', {variant: "warning"})
                console.log('All fields are required.')
                return;
            }

            emailjs
                .sendForm('service_xjoxnmu', 'template_b6qllbh', form.current, 'Rd1hWf8Mx-3yKeQip')
                .then(
                    () => {
                        enqueueSnackbar('Success', {variant: "success"})
                        console.log('SUCCESS!')
                        form.current?.reset()  // Reset the form after successful submission
                    },
                    (error) => {
                        enqueueSnackbar('Error', {variant: "error"})
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <S.Contact id="contact">
            <Container>
                <SectionTitle>contact</SectionTitle>
                <SnackbarProvider />
                <S.StyledForm ref={form} onSubmit={sendEmail}>
                    <S.Label>Name</S.Label>
                    <S.Input placeholder="" type="text" name="from_name" />

                    <S.Label>Email</S.Label>
                    <S.Input placeholder="" type="email" name="reply_to" />

                    <S.Label>Message</S.Label>
                    <S.Input placeholder="" as="textarea" name="message" />

                    <Button type="submit" value="Send">Send message</Button>
                </S.StyledForm>
            </Container>
        </S.Contact>
    );
};
