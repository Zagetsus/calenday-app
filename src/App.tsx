import React from 'react';
import theme from "./styles/theme";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import RoutesChatto from "./routes";
import {BrowserRouter} from "react-router-dom";
import AppProvider from "./AppProvider";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <AppProvider>
                    <GlobalStyles/>
                    <RoutesChatto/>
                </AppProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
