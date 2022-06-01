import React, {useCallback, useState} from 'react';
import Title from '../../../../componentes/Title';
import {Infos, InfosContainer, SchedulesList} from "./styles";
import Button from "../../../../componentes/Button";
import InfoCard from "../../../../componentes/InfoCard";
import SchedulesModal from "../../Components/SchedulesModal";
import {useSchedules} from "./hooks/useSchedules";
import SchedulesCard from "../../../../componentes/SchedulesCard";
import moment from "moment";
import AlterSchedulesModal from "../../Components/AlterSchedulesModal";

const Schedules: React.FC = () => {
    const [date,] = useState(new Date());
    const {setModal, setModalAlter, schedules} = useSchedules();

    const getTotalSchedules = useCallback(() => {
        let total = 0

        for (const schedule of schedules) {
            for (const appointment of schedule.allAppointments) {
                if (appointment.status === 1) total = total + 1
            }
        }

        return total
    }, [schedules])

    const getTotalCancellation= useCallback(() => {
        let total = 0

        for (const schedule of schedules) {
            for (const appointment of schedule.allAppointments) {
                if (appointment.status === 0) total = total + 1
            }
        }

        return total
    }, [schedules])

    return (
        <div>
            <Title>Agendamentos</Title>
            <InfosContainer>
                <Infos>
                    <InfoCard title={`${moment(date).format('DD')} março`} text={'agendamentos'} specialText={getTotalSchedules().toString()} highlight/>
                    <InfoCard title={getTotalSchedules().toString()} text={'CONFIRMADOS'}/>
                    <InfoCard title={'0'} text={'PENDENTES'}/>
                    <InfoCard title={getTotalCancellation().toString()} text={'CANCELADOS'}/>
                    <Button onClick={() => setModal(true)} expand>Novo agendamento</Button>
                </Infos>
            </InfosContainer>

            <SchedulesList>
                {
                    schedules.map((item, key) => (
                        <SchedulesCard
                            name={item.name}
                            occupation={item.occupation}
                            allAppointments={item.allAppointments}
                            key={key}
                        />
                    ))
                }
            </SchedulesList>

            <AlterSchedulesModal />
            <SchedulesModal/>
        </div>
    );
};

export default Schedules;
