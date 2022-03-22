import React from 'react';
import Input from "../../componentes/Input";
import {ButtonField, Container, Content, InputField, LoginTextContainer, Subtitle, Title} from "./styles";
import Button from "../../componentes/Button";
import useForm from "../../hooks/useForm";

const Login: React.FC = () => {
    const {form, onChange, onBlur, error} = useForm({
        email: {
            type: 'email',
            required: true,
        },
        password: {
            type: 'password',
            required: true
        }
    })
    return (
        <Container>
            <Content>
                <LoginTextContainer>
                    <Title>Entrar</Title>
                    <Subtitle>O gerenciador do seu salão</Subtitle>
                </LoginTextContainer>
                <form>
                    <InputField>
                        <Input
                            value={form.email}
                            onChange={(e) => onChange('email', e)}
                            onBlur={() => onBlur('email')}
                            error={error.email}
                            title={'E-mail'}
                            placeholder={'Digite o seu email'}
                        />
                    </InputField>
                    <InputField>
                        <Input
                            value={form.password}
                            onChange={(e) => onChange('password', e)}
                            onBlur={() => onBlur('password')}
                            error={error.password}
                            title={'Senha'}
                            type={'password'}
                            placeholder={'Sua senha'}
                        />
                    </InputField>

                    <ButtonField>
                        <Button expand>Entrar</Button>
                    </ButtonField>
                </form>
            </Content>
        </Container>
    );
};

export default Login;
