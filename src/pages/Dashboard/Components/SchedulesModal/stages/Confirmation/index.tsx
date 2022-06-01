import React, {useCallback} from 'react';
import {Container, Content, Day, Hours, Month, Row, Text, Title} from "./styles";
import {useSchedules} from "../../../../pages/Schedules/hooks/useSchedules";
import moment from "moment";
import {ButtonContainer} from "../../styles";
import Button from "../../../../../../componentes/Button";

const Confirmation: React.FC = () => {
    const {chosenEmployee, chosenService, user, dateHours, createSchedule, setModal, dataClear} = useSchedules();

    const save = useCallback(async () => {
        try {
            await createSchedule()
            dataClear()
            setModal(false)
        } catch (e) {
            console.log(e);
        }
    }, [createSchedule, dataClear, setModal]);
    return (
        <>

            <Container>
                <Content>
                    <div>
                        <Row>
                            <Title>{chosenService.name}</Title>
                        </Row>
                        <Row>
                            <Title>Profissional:</Title>
                            <Text>{chosenEmployee.name}</Text>
                        </Row>
                        <Row>
                            <Title>Cliente:</Title>
                            <Text>{user.name}</Text>
                        </Row>
                    </div>

                    <div>
                        <Day>{moment(dateHours).format("DD")}</Day>
                        <Month>{moment(dateHours).subtract(1, "month").startOf("month").format("MMMM")}</Month>
                        <Hours>{moment(dateHours).format("HH:mm")}</Hours>
                    </div>
                </Content>
            </Container>
            <ButtonContainer>
                <Button onClick={save} expand>Confirmar</Button>
            </ButtonContainer>
        </>
    );
};

export default Confirmation;
