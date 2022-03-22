import React, {useMemo} from 'react';
import {Container, Price, Row, RowNotBetween, SelectContainer, SmallInput, Subtitle} from "./styles";
import Select from "../../../../../../componentes/Select";
import Input from "../../../../../../componentes/Input";

const NewSchedules: React.FC = () => {
    const option = useMemo(() => ([
        {
            value: 1,
            name: 'cortes de cabelo',
        },
        {
            value: 2,
            name: 'cortes de cabelo',
        },
        {
            value: 3,
            name: 'cortes de cabelo',
        },
        {
            value: 4,
            name: 'cortes de cabelo',
        },
        {
            value: 5,
            name: 'cortes de cabelo',
        },
        {
            value: 6,
            name: 'cortes de cabelo',
        },
        {
            value: 7,
            name: 'cortes de cabelo',
        },
        {
            value: 8,
            name: 'cortes de cabelo',
        },
    ]), []);

    const hours = useMemo(() => ([
        {
            value: 1,
            name: '11:00',
        },
        {
            value: 2,
            name: '11:30',
        },
        {
            value: 3,
            name: '12:00',
        },
        {
            value: 4,
            name: '12:30',
        },
        {
            value: 5,
            name: '13:00',
        },
        {
            value: 6,
            name: '13:30',
        },
        {
            value: 7,
            name: '14:00',
        },
        {
            value: 8,
            name: '14:30',
        },
    ]), []);

    return (
        <Container>
            <Row>
                <SelectContainer>
                    <Select
                        displayMessage={false}
                        options={option} title={'Serviço que deseja agendar:'}
                        onChange={() => console.log('entrou')}
                    />
                </SelectContainer>
                <Price>R$ 150,00</Price>
            </Row>

            <Row>
                <SelectContainer>
                    <Select
                        options={option}
                        displayMessage={false}
                        title={'Escolha o profissional:'}
                        onChange={() => console.log('entrou')}
                    />
                </SelectContainer>
            </Row>

            <Container>
                <Subtitle>Data e hora</Subtitle>

                <RowNotBetween>
                    <SmallInput>
                        <Input displayMessage={false}/>
                    </SmallInput>

                    <SmallInput>
                        <Select
                            options={hours}
                            label={'Hora'}
                            displayMessage={false}
                            onChange={() => console.log('entrou')}
                        />
                    </SmallInput>
                </RowNotBetween>

            </Container>

        </Container>
    );
};

export default NewSchedules;
