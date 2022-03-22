import React from 'react';
import {CheckBoxInput, CheckMark, CheckMarkContainer, Container, Label} from "./styles";

export interface Props {
    checked: boolean;
    label?: string;
    onChange?: React.Dispatch<React.SetStateAction<any>>
}

const CheckBox: React.FC<Props> = ({checked, label, onChange}) => {
    return(
        <Container>
            <Label>
                {label}
                <CheckBoxInput type={'checkbox'} defaultChecked={checked ?? false} onChange={onChange}/>
                <CheckMarkContainer className={'checkmark'}>
                    <CheckMark/>
                </CheckMarkContainer>
            </Label>
        </Container>
    )
}

export default CheckBox;
