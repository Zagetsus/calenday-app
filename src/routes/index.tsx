import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const RoutesChatto: React.FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'/dashboard/*'} element={<Dashboard />}/>
        </Routes>
    );
};

export default RoutesChatto;
