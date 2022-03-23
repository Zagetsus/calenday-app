import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const RoutesChatto: React.FC = () => {
    return (
        <Routes>
            <ProtectedRoute noLogged path={'/'} element={<Login/>}/>
            <ProtectedRoute path={'/dashboard/*'} element={<Dashboard />}/>
        </Routes>
    );
};

export default RoutesChatto;
