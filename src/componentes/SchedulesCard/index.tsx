import React from 'react';
import {
    Card, CardHours, CardStrong, CardText,
    Container,
    Content, CustomerRow,
    EmployeeAvatar,
    EmployeeCard,
    EmployeeName,
    EmployeeSpecialty,
    ServiceName
} from "./styles";
import {ISchedules, useSchedules} from "../../pages/Dashboard/pages/Schedules/hooks/useSchedules";
import moment from "moment";


const SchedulesCard: React.FC<Omit<ISchedules, 'employee_id'>> = ({name, occupation, allAppointments}) => {
    const {setModalAlter, setAlterId} = useSchedules()
    return (
        <Container>
            <EmployeeCard>
                <EmployeeAvatar/>
                <div>
                    <EmployeeName>{name}</EmployeeName>
                    <EmployeeSpecialty>{occupation}</EmployeeSpecialty>
                </div>
            </EmployeeCard>
            <Content>
                {
                    allAppointments.map((item, key) => (
                        <Card
                            onClick={() => {
                                setModalAlter(true);
                                setAlterId(item.id)
                            }}
                            confirmed={!!item.status}
                            key={`schedules-${key}`}
                        >
                            <ServiceName>{item.service}</ServiceName>
                            <CustomerRow>
                                <CardStrong>
                                    Cliente:
                                </CardStrong>
                                <CardText>{item.customer}</CardText>
                            </CustomerRow>
                            <CustomerRow>
                                <CardHours>{moment(item.start).format("HH:mm")}</CardHours>
                                -
                                <CardHours>{moment(item.end).format("HH:mm")}</CardHours>
                            </CustomerRow>
                        </Card>
                    ))
                }
            </Content>
        </Container>
    );
};

export default SchedulesCard;
