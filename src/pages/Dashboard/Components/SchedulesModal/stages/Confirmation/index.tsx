import React from 'react';
import {Container, Content, Day, Hours, Month, Row, Text, Title} from "./styles";

const Confirmation: React.FC = () => {
    return (
        <Container>
            <Content>
                <div>
                    <Row>
                        <Title>DEPILAÇÃO COMPLETA</Title>
                    </Row>
                    <Row>
                        <Title>Profissional:</Title>
                        <Text>Sheila Depiladora</Text>
                    </Row>
                    <Row>
                        <Title>Cliente:</Title>
                        <Text>Natália Santos</Text>
                    </Row>
                </div>

                <div>
                    <Day>31</Day>
                    <Month>MARÇO</Month>
                    <Hours>11:00</Hours>
                </div>
            </Content>
        </Container>
    );
};

export default Confirmation;
