import React, {ChangeEvent, useCallback, useState} from 'react';
import {Container, InputRow, InputSmall, Row, Subtitle, Title} from "./styles";
import Input from "../../../../../../componentes/Input";
import useForm from "../../../../../../hooks/useForm";
import {api} from "../../../../../../services/api";
import {removeMask} from "../../../../../../helpers/removeMasks";
import {useSchedules} from "../../../../pages/Schedules/hooks/useSchedules";
import Button from "../../../../../../componentes/Button";
import {ButtonContainer} from "../../styles";
import Textarea from "../../../../../../componentes/Textarea";

const Customer: React.FC = () => {
    const [existUser, setExistUser] = useState(true);
    const {setUser, setStageSelected, setObservation, observation} = useSchedules()

    const {form, onChange, onBlur, error, setValueForm, validateForm} = useForm({
        cpf: {
            type: 'cpf',
            required: true,
            limit: 14
        },
        phone: {
            type: 'phone',
            required: true,
            limit: 15
        },
        name: {
            type: 'fullname',
            required: true
        },
    })

    const changeCPF = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        onChange('cpf', e)

        if (e.target.value.length === 14) {
            const cpf = removeMask(e.target.value, 'cpf')
            const {data} = await api.get(`users/${cpf}`)

            if (data.user) {
                setExistUser(true)
                setUser(data.user)

                setValueForm('phone', data.user.phone)
                setValueForm('name', data.user.name)
            } else {
                setExistUser(false)
            }
        }
    }, [onChange, setUser, setValueForm])


    const handleSubmit = useCallback(async () => {
        try {
            if (!validateForm()) return

            if (!existUser) {

                const {data} = await api.post('/users', form)
                setUser(data)
            }


            setStageSelected('newSchedules')
        } catch (e) {
            console.log(e);
        }

    }, [existUser, form, setStageSelected, setUser, validateForm]);

    return (
        <>
            <Container>
                <Title>Cliente</Title>
                <Row>
                    <Subtitle>CPF</Subtitle>
                    <InputRow>
                        <InputSmall>
                            <Input
                                type='text'
                                value={form.cpf}
                                onChange={(e) => changeCPF(e)}
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
                                disabled={existUser}
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
                        disabled={existUser}
                    />
                </Row>
                <Row>
                    <Textarea
                        value={observation}
                        onChange={(e) => setObservation(e.target.value)}
                        placeholder="Observação. ex (alergia algum produto)"
                    />
                </Row>
            </Container>
            <ButtonContainer>
                <Button onClick={handleSubmit} expand>Avançar</Button>
            </ButtonContainer>
        </>
    );
};

export default Customer;
