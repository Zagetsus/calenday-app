import React from 'react';
import LayoutDash from "../../componentes/LayoutDash";
import {Container} from "./styles";
import {Route, Routes} from "react-router-dom";
import Schedules from "./pages/Schedules";
import {SchedulesProvider} from "./pages/Schedules/hooks/useSchedules";

const Dashboard: React.FC = () => {
    return (
        <LayoutDash>
            <Container>
                <Routes>
                    <SchedulesProvider>
                        <Route path={'/agendamentos'} element={<Schedules/>}/>
                    </SchedulesProvider>
                </Routes>
            </Container>
        </LayoutDash>
    );
};

export default Dashboard;
