import React, {FunctionComponent, ReactElement, useLayoutEffect} from 'react';
import {Route} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

interface OwnProps {
    element: ReactElement;
    path: string;
    noLogged?: boolean;
}

const ProtectedRoute: FunctionComponent<OwnProps> = ({path, element, noLogged}) => {
    const {token} = useAuth();

    useLayoutEffect(() => {
        if (noLogged && token) {
            window.location.href = process.env.REACT_APP_BASEURL + 'dashboard/agendamentos'
        }

        if (!token && !noLogged) {
            window.location.href = process.env.REACT_APP_BASEURL + 'login'
        }
        // eslint-disable-next-line
    }, [])

    return <Route path={path} element={element}/>;
};

export default ProtectedRoute;
