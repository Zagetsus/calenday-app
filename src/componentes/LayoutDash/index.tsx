import React from 'react';
import {Container, Main, Navigator} from "./styles";
import Menu from "../Menu";
import Header from "../Header";

const LayoutDash: React.FC = ({children}) => {
    return (
        <Container>
            <Navigator>
                <Menu/>
            </Navigator>
            <Main>
                <Header />
                {children}
            </Main>
        </Container>
    );
};

export default LayoutDash;
