import React from 'react';
import theme from "./styles/theme";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import RoutesChatto from "./routes";
import {BrowserRouter} from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <RoutesChatto />
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
