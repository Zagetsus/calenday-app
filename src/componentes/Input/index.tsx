import React, {InputHTMLAttributes} from 'react';
import {Container, InputText, Message, MessageContainer, Title} from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    error?: string;
    title?: string;
    message?: string;
    displayMessage?: boolean;
}

const Input: React.FC<Props> = ({error, title, message, displayMessage = true, ...props}) => {
    return (
        <Container >
            {title && <Title>{title}</Title>}
            <InputText error={!!error} {...props} />
            {
                displayMessage &&
                <MessageContainer>
                    <Message error={!!error}>{error || message}</Message>
                </MessageContainer>
            }
        </Container>
    );
};

export default Input;
