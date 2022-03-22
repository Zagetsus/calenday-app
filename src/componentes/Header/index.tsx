import React from 'react';
import {Container, SearchContainer} from "./styles";
import SearchBar from "../SearchBar";
import ProfileHeader from "../ProfileHeader";

const Header: React.FC = () => {
    return (
        <Container>
            <SearchContainer>
                <SearchBar placeholder={'Pesquise por clientes'}/>
            </SearchContainer>

            <ProfileHeader />
        </Container>
    );
};

export default Header;
