import React from 'react';
import {Container, InputRow, InputSmall, Row, Subtitle, Title} from "./styles";
import Input from "../../../../../../componentes/Input";
import useForm from "../../../../../../hooks/useForm";

const Customer: React.FC = () => {
    const {form, onChange, onBlur, error} = useForm({
        cpf: {
            type: 'cpf',
            required: true,
        },
        phone: {
            type: 'phone',
            required: true
        },
        name: {
            type: 'fullname',
            required: true
        },
    })

    return (
        <Container>
            <Title>Cliente</Title>
            <Row>
                <Subtitle>CPF</Subtitle>
                <InputRow>
                    <InputSmall>
                        <Input
                            type='text'
                            value={form.cpf}
                            onChange={(e) => onChange('cpf', e)}
                            onBlur={() => onBlur('cpf')}
                            error={error.cpf}
                            placeholder={'Digite o seu cpf'}
                            displayMessage={false}
                        />
                    </InputSmall>
                    <InputSmall>
                        <Input
                            type='text'
                            value={form.phone}
                            onChange={(e) => onChange('phone', e)}
                            onBlur={() => onBlur('phone')}
                            error={error.phone}
                            placeholder={'Celular'}
                            displayMessage={false}
                        />
                    </InputSmall>
                </InputRow>
            </Row>
            <Row>
                <Subtitle>Nome</Subtitle>
                <Input
                    type='text'
                    value={form.name}
                    onChange={(e) => onChange('name', e)}
                    onBlur={() => onBlur('name')}
                    error={error.name}
                    placeholder={'Digite o nome do cliente'}
                    displayMessage={false}
                />
            </Row>
        </Container>
    );
};

export default Customer;
