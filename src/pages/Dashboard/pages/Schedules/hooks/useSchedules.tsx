import React, {createContext, useContext, useState} from 'react';


interface SchedulesContext {
    schedules: any;
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    stageSelected: stageOptions;
    nextStage: () => void;
}

type stageOptions = 'customer' | 'newSchedules' | 'confirmation'
const SchedulesContext = createContext<SchedulesContext>({} as SchedulesContext)
const SchedulesProvider: React.FC = ({children}) => {
    const [schedules, setSchedules] = useState({} as any);
    const [modal, setModal] = useState(false);
    const [stageSelected, setStageSelected] = useState<stageOptions>('customer');

    const nextStage = () => {
        const stages = {
            customer: () => setStageSelected('newSchedules'),
            newSchedules: () => setStageSelected('confirmation'),
            confirmation: () => {
                setModal(false)
                setStageSelected('customer')
            }
        }

        return stages[stageSelected]()
    }


    return (
        <SchedulesContext.Provider value={{modal, setModal, stageSelected, schedules, nextStage}}>
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
