import React from 'react';
import {CheckMark, CheckMarkContainer, Container, Label, RadioInput} from "./styles";

export interface Props {
    name?: string;
    selected: boolean;
    label?: string;
}

const Radio: React.FC<Props> = ({ name, label, selected }) => {
    return(
        <Container>
            <Label>
                {label}
                <RadioInput type={'radio'} defaultChecked={selected} name={name}/>
                <CheckMarkContainer className={'checkmark'}>
                    <CheckMark className={'radio-mark'}/>
                </CheckMarkContainer>
            </Label>
        </Container>
    )

}

export default Radio;
