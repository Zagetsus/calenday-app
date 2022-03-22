import React, {useMemo, useState} from 'react';
import Modal from "../../../../componentes/Modal";
import {ButtonContainer, Container, Header, Title} from "./styles";
import Customer from "./stages/Customer";
import Button from "../../../../componentes/Button";
import NewSchedules from "./stages/NewSchedules";
import Confirmation from "./stages/Confirmation";

interface Stages {
    customer: JSX.Element,
    newSchedules: JSX.Element,
    confirmation: JSX.Element
}

type stageOptions = 'customer' | 'newSchedules' | 'confirmation'

const SchedulesModal: React.FC = () => {
    const [stageSelected, setStageSelected] = useState<stageOptions>('confirmation');

    const stages: Stages = useMemo(() => ({
        customer: <Customer />,
        newSchedules: <NewSchedules />,
        confirmation: <Confirmation />
    }), []);
    return (
        <Modal open={true} onClose={() => console.log('teste')}>
            <Container>
                <Header>
                    <Title>Criar novo agendamento</Title>
                </Header>
                {stages[stageSelected]}
                <ButtonContainer>
                    <Button expand>Avançar</Button>
                </ButtonContainer>
            </Container>
        </Modal>
    );
};

export default SchedulesModal;
