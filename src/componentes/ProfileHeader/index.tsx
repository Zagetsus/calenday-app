import React from 'react';
import {Avatar, Container, Name, Status} from "./styles";

const ProfileHeader: React.FC = () => {
    return (
        <Container>
            <div>
                <Name>Luan Verdelho</Name>
                <Status>Proprietário</Status>
            </div>
            <Avatar/>
        </Container>
    );
};

export default ProfileHeader;
