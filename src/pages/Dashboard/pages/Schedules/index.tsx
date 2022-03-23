import React from 'react';
import Title from '../../../../componentes/Title';
import {Infos, InfosContainer, SchedulesList} from "./styles";
import Button from "../../../../componentes/Button";
import InfoCard from "../../../../componentes/InfoCard";
import SchedulesModal from "../../Components/SchedulesModal";
import {useSchedules} from "./hooks/useSchedules";
import SchedulesCard from "../../../../componentes/SchedulesCard";

const Schedules: React.FC = () => {
    const {setModal} = useSchedules();
    return (
        <div>
            <Title>Agendamentos</Title>
            <InfosContainer>
                <Infos>
                    <InfoCard title={'30 março'} text={'agendamentos'} specialText={'40'} highlight/>
                    <InfoCard title={'15'} text={'CONFIRMADOS'}/>
                    <InfoCard title={'25'} text={'PENDENTES'}/>
                    <InfoCard title={'3'} text={'CANCELADOS'}/>
                    <Button onClick={() => setModal(true)} expand>Novo agendamento</Button>
                </Infos>
            </InfosContainer>

            <SchedulesList>
                <SchedulesCard/>
                <SchedulesCard/>
                <SchedulesCard/>
                <SchedulesCard/>
                <SchedulesCard/>
                <SchedulesCard/>
                <SchedulesCard/>
                <SchedulesCard/>
                <SchedulesCard/>
            </SchedulesList>

            <SchedulesModal/>
        </div>
    );
};

export default Schedules;
