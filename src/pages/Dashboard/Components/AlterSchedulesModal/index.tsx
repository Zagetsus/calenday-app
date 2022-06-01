import React, {useCallback, useEffect, useState} from 'react';
import Modal from "../../../../componentes/Modal";
import {ButtonContainer, ButtonLink, Column, Container, Header, Title} from "./styles";
import {IAppointments, useSchedules} from "../../pages/Schedules/hooks/useSchedules";
import Button from "../../../../componentes/Button";
import {RowNotBetween, Subtitle} from "../SchedulesModal/stages/NewSchedules/styles";
import Input from "../../../../componentes/Input";
import useForm from "../../../../hooks/useForm";
import {api} from "../../../../services/api";
import moment from "moment";
import {useLocation} from "react-router-dom";


const AlterSchedulesModal: React.FC = () => {
    const [showSchedule, setShowSchedule] = useState<IAppointments>({} as IAppointments);
    const {modalAlter, setModalAlter, alterId, cancelSchedule, confirmSchedule} = useSchedules()

    const {form, onChange, onBlur, error, validateForm, setValueForm} = useForm({
        date: {
            type: '',
            required: true,
        },
    })

    const getSchedules = useCallback(async () => {
        try {
            const {data} = await api.get(`schedules/${alterId}`)
            setShowSchedule(data)

            setValueForm("date", data.start_date)

        } catch (e) {
            console.log(e);
        }
    }, [alterId, setValueForm]);


    const save = useCallback(async () => {
        try {
            if (!validateForm()) return;

            const start = moment(form.date).format('YYYY/MM/DD HH:mm:ss');
            const end = moment(form.date).add(60, 'minutes').format('YYYY/MM/DD HH:mm:ss ');

            await api.put(`schedules/${alterId}`, {
                start_date: start,
                end_date: end
            })

            window.location.reload()

        } catch (e) {
            console.log(e);
        }


    }, [form.date, validateForm]);

    useEffect(() => {
        getSchedules()
        // eslint-disable-next-line
    }, [alterId]);

    return (
        <Modal open={modalAlter} onClose={() => setModalAlter(false)}>
            <Container>
                <Header>
                    <Title>Alterar agendamento</Title>
                </Header>

                <Column>
                    <Subtitle>Data e hora</Subtitle>

                    <RowNotBetween>
                        <Input
                            type="datetime-local"
                            value={form.date}
                            onChange={(e) => onChange("date", e)}
                            onBlur={() => onBlur('date')}
                            error={error.date}
                            displayMessage={false}
                        />
                    </RowNotBetween>
                    <ButtonLink
                        onClick={() => !!showSchedule.status ? cancelSchedule() : confirmSchedule()}>{!!showSchedule.status ? 'Cancelar' : 'Confirmar'} agendamento</ButtonLink>
                </Column>

                <ButtonContainer>
                    <Button onClick={save} expand>Salvar</Button>
                </ButtonContainer>
            </Container>
        </Modal>
    );
};

export default AlterSchedulesModal;
