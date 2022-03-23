import React, {useCallback} from 'react';
import Input from "../../componentes/Input";
import {ButtonField, Container, Content, InputField, LoginTextContainer, Subtitle, Title} from "./styles";
import Button from "../../componentes/Button";
import useForm from "../../hooks/useForm";
import {useToast} from "../../hooks/useToast";
import {useAuth} from "../../hooks/useAuth";

const Login: React.FC = () => {
    const {form, onChange, onBlur, error, validateForm} = useForm({
        email: {
            type: 'email',
            required: true,
        },
        password: {
            type: 'password',
            required: true
        }
    })

    const { toast } = useToast();
    const { signIn } = useAuth();

    const handleSubmit = useCallback((e) => {
        try {
            e.preventDefault()

            if (!validateForm()) {
                toast({
                    type: 'error',
                    description: 'Por favor, insira corretamente os seus dados.'
                })
                return false;
            }


            const {email, password} = form;

            signIn({email, password})
        } catch (e: any) {
            console.log(e);
        }
    }, [form, signIn, toast, validateForm]);

    return (
        <Container>
            <Content>
                <LoginTextContainer>
                    <Title>Entrar</Title>
                    <Subtitle>O gerenciador do seu salão</Subtitle>
                </LoginTextContainer>
                <form onSubmit={handleSubmit}>
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
