import React, {useCallback, useEffect, useState} from 'react';
import {Container, Price, Row, RowNotBetween, SelectContainer, SmallInput, Subtitle} from "./styles";
import Select from "../../../../../../componentes/Select";
import Input from "../../../../../../componentes/Input";
import Button from "../../../../../../componentes/Button";
import {ButtonContainer} from "../../styles";
import {api} from "../../../../../../services/api";
import {useSchedules} from "../../../../pages/Schedules/hooks/useSchedules";
import useForm from "../../../../../../hooks/useForm";

export interface IService {
    id: number
    name: string;
    duration: number;
    price: string;
}

export interface IEmployees {
    id: number;
    name: string;
    email: string;
    cpf: string;
    birth_date: string | null;
    phone: string;
    occupation: string;
}

const NewSchedules: React.FC = () => {
    const [errorService, setErrorService] = useState('');
    const [errorEmployee, setErrorEmployee] = useState('');
    const [service, setService] = useState<IService[]>([] as IService[]);
    const [employees, setEmployees] = useState<IEmployees[]>([] as IEmployees[]);

    const {form, onChange, onBlur, error, validateForm} = useForm({
        date: {
            type: '',
            required: true,
        },
    })

    const {setChosenService, chosenService, chosenEmployee, setChosenEmployee, setDateHours, setStageSelected} = useSchedules()

    const serviceSelected = (id: number) => {
        setChosenService(service.filter((item: any) => item.id === id)[0])
    }

    const employeeSelected = (id: number) => {
        setChosenEmployee(employees.filter((item: any) => item.id === id)[0])
    }

    const getServices = async () => {
        try {
            const {data} = await api.get('services')
            setService(data)

        } catch (e) {
            console.log(e);
        }
    }

    const getEmployees = async () => {
        try {
            const {data} = await api.get('employees')
            setEmployees(data)

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getServices()
        getEmployees()
    }, []);

    const save = useCallback(() => {

        if (!chosenService.id) setErrorService('Campo obrigatório')
        if (!chosenEmployee.id) setErrorEmployee('Campo obrigatório')

        if (!validateForm() || !chosenEmployee.id || !chosenService.id ) return;

        setStageSelected("confirmation")

    }, [chosenEmployee.id, chosenService.id, setStageSelected, validateForm]);

    return (
        <>
            <Container>
                <Row>
                    <SelectContainer>
                        {
                            service.length > 0 &&
                            <Select
                                displayMessage={false}
                                options={service}
                                title={'Serviço que deseja agendar:'}
                                error={errorService}
                                value={chosenService.id}
                                onChange={(item) => serviceSelected(item)}
                            />
                        }
                    </SelectContainer>
                    {
                        chosenService.id &&
                        <Price>{service.length > 0 && service.filter((item: any) => item.id === chosenService.id)[0].price}</Price>
                    }
                </Row>

                <Row>
                    <SelectContainer>
                        {
                            employees.length > 0 &&
                            <Select
                                options={employees}
                                displayMessage={false}
                                title={'Escolha o profissional:'}
                                error={errorEmployee}
                                value={chosenEmployee.id}
                                onChange={(value) => employeeSelected(value)}
                            />
                        }
                    </SelectContainer>
                </Row>

                <Container>
                    <Subtitle>Data e hora</Subtitle>

                    <RowNotBetween>
                        <SmallInput>
                            <Input
                                type="datetime-local"
                                value={form.date}
                                onChange={(e) => {
                                    onChange("date", e)
                                    setDateHours(e.target.value)
                                }}
                                onBlur={() => onBlur('date')}
                                error={error.date}
                                displayMessage={false}
                            />
                        </SmallInput>
                    </RowNotBetween>

                </Container>

            </Container>
            <ButtonContainer>
                <Button onClick={save} expand>Avançar</Button>
            </ButtonContainer>
        </>
    );
};

export default NewSchedules;
