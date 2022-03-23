import React from 'react';
import {Container, Content, EmployeeAvatar, EmployeeCard, EmployeeName, EmployeeSpecialty} from "./styles";


const SchedulesCard: React.FC = () => {
    return (
        <Container>
            <EmployeeCard>
                <EmployeeAvatar/>
                <div>
                    <EmployeeName>Leila Ferreira</EmployeeName>
                    <EmployeeSpecialty>Cabeleireira</EmployeeSpecialty>
                </div>
            </EmployeeCard>
            <Content></Content>
        </Container>
    );
};

export default SchedulesCard;
