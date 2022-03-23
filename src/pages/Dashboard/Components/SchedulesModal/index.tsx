import React, {useMemo, useState} from 'react';
import Modal from "../../../../componentes/Modal";
import {ButtonContainer, Container, Header, Title} from "./styles";
import Customer from "./stages/Customer";
import Button from "../../../../componentes/Button";
import NewSchedules from "./stages/NewSchedules";
import Confirmation from "./stages/Confirmation";
import {useSchedules} from "../../pages/Schedules/hooks/useSchedules";

interface Stages {
    customer: JSX.Element,
    newSchedules: JSX.Element,
    confirmation: JSX.Element
}

const SchedulesModal: React.FC = () => {
    const {modal,setModal, stageSelected, nextStage} = useSchedules();

    const stages: Stages = useMemo(() => ({
        customer: <Customer />,
        newSchedules: <NewSchedules />,
        confirmation: <Confirmation />
    }), []);

    return (
        <Modal open={modal} onClose={() => setModal(false) }>
            <Container>
                <Header>
                    <Title>Criar novo agendamento</Title>
                </Header>
                {stages[stageSelected]}
                <ButtonContainer>
                    <Button onClick={nextStage} expand>Avançar</Button>
                </ButtonContainer>
            </Container>
        </Modal>
    );
};

export default SchedulesModal;
