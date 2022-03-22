import React from 'react';
import Title from '../../../../componentes/Title';
import {Infos, InfosContainer} from "./styles";
import Button from "../../../../componentes/Button";
import InfoCard from "../../../../componentes/InfoCard";
import SchedulesModal from "../../Components/SchedulesModal";

const Schedules: React.FC = () => {
    return (
        <div>
            <Title>Agendamentos</Title>
            <InfosContainer>
                <Infos>
                    <InfoCard title={'30 março'} text={'agendamentos'} specialText={'40'} highlight/>
                    <InfoCard title={'15'} text={'CONFIRMADOS'}/>
                    <InfoCard title={'25'} text={'PENDENTES'}/>
                    <InfoCard title={'3'} text={'CANCELADOS'}/>
                    <Button expand>Novo agendamento</Button>
                </Infos>
            </InfosContainer>

            <SchedulesModal />
        </div>
    );
};

export default Schedules;
