import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
import {IEmployees, IService} from "../../../Components/SchedulesModal/stages/NewSchedules";
import moment from "moment";
import {api} from "../../../../../services/api";
import {log} from "util";

export interface IAppointments {
    id: number;
    customer: string;
    service: string,
    observation: string;
    start: string,
    end: string,
    status: boolean | number
}

export interface ISchedules {
    employee_id: number;
    name: string;
    occupation: string,
    allAppointments: IAppointments[]
}

interface SchedulesContext {
    schedules: ISchedules[],
    user: any;
    observation: string;
    dateHours: string;
    alterId: number | null;
    setAlterId: React.Dispatch<React.SetStateAction<number | null>>;
    setUser: any;
    modal: boolean;
    modalAlter: boolean;
    setModalAlter: React.Dispatch<React.SetStateAction<boolean>>;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    stageSelected: stageOptions;
    chosenService: IService,
    chosenEmployee: IEmployees,
    setObservation: React.Dispatch<React.SetStateAction<string>>,
    setStageSelected: React.Dispatch<React.SetStateAction<stageOptions>>,
    setChosenService: React.Dispatch<React.SetStateAction<IService>>
    setChosenEmployee: React.Dispatch<React.SetStateAction<IEmployees>>,
    setDateHours: React.Dispatch<React.SetStateAction<string>>,
    setSchedules: React.Dispatch<React.SetStateAction<ISchedules[]>>,
    createSchedule: () => Promise<void>
    dataClear: () => void,
    cancelSchedule: () => void,
    confirmSchedule: () => void,
}

type stageOptions = 'customer' | 'newSchedules' | 'confirmation'
const SchedulesContext = createContext<SchedulesContext>({} as SchedulesContext)
const SchedulesProvider: React.FC = ({children}) => {
    const [modalAlter, setModalAlter] = useState(false);
    const [schedules, setSchedules] = useState<ISchedules[]>([] as ISchedules[]);
    const [alterId, setAlterId] = useState<number | null>(null);

    const [dateHours, setDateHours] = useState('');
    const [observation, setObservation] = useState('');
    const [chosenEmployee, setChosenEmployee] = useState<IEmployees>({} as IEmployees);
    const [chosenService, setChosenService] = useState<IService>({} as IService);
    const [user, setUser] = useState({} as any);
    const [modal, setModal] = useState(false);
    const [stageSelected, setStageSelected] = useState<stageOptions>('customer');


    const dataClear = useCallback(() => {
        setDateHours('')
        setObservation('')
        setChosenEmployee({} as IEmployees)
        setChosenService({} as IService)
        setUser({} as any)
        setStageSelected('customer')
    }, []);

    const createSchedule = useCallback(async () => {
        try {
            const start = moment(dateHours).format('YYYY/MM/DD HH:mm:ss');
            const end = moment(dateHours).add(chosenService.duration, 'seconds').format('YYYY/MM/DD HH:mm:ss ');

            const newSchedules = {
                customer_id: user.id,
                employee_id: chosenEmployee.id,
                service_id: chosenService.id,
                start_date: start,
                end_date: end,
                observation
            }

            const {data} = await api.post('schedules', newSchedules)


            const existEmployee = schedules.findIndex((item) => item.employee_id === chosenEmployee.id)

            if (existEmployee === -1) {
                const newEmployee: ISchedules = {
                    employee_id: chosenEmployee.id,
                    name: chosenEmployee.name,
                    occupation: chosenEmployee.occupation,
                    allAppointments: [
                        {
                            id: data.id,
                            customer: user.name,
                            service: chosenService.name,
                            observation,
                            start,
                            end,
                            status: true,
                        }
                    ]
                }

                setSchedules([...schedules, newEmployee])
            } else {
                const copySchedules = [...schedules];

                copySchedules[existEmployee].allAppointments.push({
                    id: data.id,
                    customer: user.name,
                    service: chosenService.name,
                    observation,
                    start,
                    end,
                    status: true,
                })

                setSchedules(copySchedules)
            }

            setStageSelected("confirmation")

        } catch (e) {
            console.log(e);
        }
    }, [chosenEmployee.id, chosenEmployee.name, chosenEmployee.occupation, chosenService.duration, chosenService.id, chosenService.name, dateHours, observation, schedules, user.id, user.name]);

    const getSchedules = useCallback(async () => {
        try {
            const {data} = await api.get('schedules')
            setSchedules(data)
        } catch (e) {
            console.log(e)
        }
    }, []);

    const cancelSchedule = useCallback(async () => {
        try {
            await api.delete(`schedules/${alterId}`)

            const copySchedules = schedules;

            for (const copySchedule of copySchedules) {
                copySchedule.allAppointments.map((item) => {
                    if (item.id === alterId) item.status = 0
                    return item
                })
            }

            setSchedules(copySchedules)
            setAlterId(null)
            setModalAlter(false)
        } catch (e) {
            console.log(e);
        }
    }, [alterId, schedules])

    const confirmSchedule = useCallback(async () => {
        try {
            await api.put(`schedules/${alterId}`, {
                status: true
            })

            const copySchedules = schedules;

            for (const copySchedule of copySchedules) {
                copySchedule.allAppointments.map((item) => {
                    if (item.id === alterId) item.status = 1
                    return item
                })
            }

            setSchedules(copySchedules)
            setAlterId(null)
            setModalAlter(false)

        } catch (e) {
            console.log(e);
        }
    }, [alterId, schedules])

    useEffect(() => {
        getSchedules()
        // eslint-disable-next-line
    }, []);


    return (
        <SchedulesContext.Provider value={{
            schedules,
            modal,
            modalAlter,
            alterId,
            setAlterId,
            setModal,
            setModalAlter,
            stageSelected,
            setStageSelected,
            user,
            observation,
            chosenService,
            chosenEmployee,
            dateHours,
            setUser,
            setObservation,
            setChosenService,
            setChosenEmployee,
            setDateHours,
            setSchedules,
            createSchedule,
            dataClear,
            cancelSchedule,
            confirmSchedule
        }}>
            {children}
        </SchedulesContext.Provider>
    );
};

const useSchedules = () => {
    const context = useContext(SchedulesContext);

    if (!context) throw new Error('useSchedules deve ser usado com o SchedulesProvider')

    return context
}

export {SchedulesProvider, useSchedules};
