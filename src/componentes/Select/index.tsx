import React, {useCallback, useEffect, useState} from 'react';
import {
    ArrowIcon, Color,
    Container,
    DropDownContainer,
    DropDownItem,
    DropDownText, HintContainer, HintText,
    SelectedLabel,
    SelectionContainer, Title
} from "./styles";
import CheckBox from "../CheckBox";
import Radio from "../Radio";

interface Option_I {
    id?: string | number;
    value?: string | number;
    name: string;
    selected?: boolean;
    checked?: boolean;
}

export interface Props {
    title?: string;
    scale?: 'sm' | 'md' | 'lg'
    options: Array<Option_I>;
    label?: string;
    type?: 'text' | 'checkbox' | 'radio';
    error?: string;
    onChange: React.Dispatch<React.SetStateAction<any>>;
    value?: number | string | Array<number> | Array<string>;
    disabled?: boolean;
    dropDownMode?: "relative" | "absolute";
    displayMessage?: boolean;
}


const Select: React.FC<Props> = ({
                                     title,
                                     onChange,
                                     type = 'text',
                                     label = 'Selecione uma opção',
                                     error,
                                     options: optionsProp,
                                     value,
                                     disabled,
                                     dropDownMode = "absolute",
                                     displayMessage = true,
                                 }) => {

    const [active, setActive] = useState<any>(null);
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState(optionsProp || [] as Option_I[]);

    const RenderText: React.FC<any> = ({options, callback}) => {
        return options.map((item: any, index: any) =>
            <DropDownItem onClick={() => callback(item)} key={index}>
                <DropDownText>{item.name}</DropDownText>
            </DropDownItem>
        )
    }

    const RenderCheckbox: React.FC<any> = ({options, callback}) => {
        return options.map((item: any, index: any) =>
            <DropDownItem onClick={() => callback(item)} key={index}>
                <DropDownText><CheckBox checked={item?.checked} label={item.name} onChange={({target}) => {
                    callback(item);
                    item.checked = target.checked;
                }}/></DropDownText>
            </DropDownItem>
        )
    }

    const RenderRadio: React.FC<any> = ({options, callback}) => {
        const name = `select-${new Date().getTime()}`;
        return options.map((item: any, index: number) =>
            <DropDownItem onClick={() => callback(item)} key={index}>
                <DropDownText><Radio label={item.name} selected={item.selected} name={name}/></DropDownText>
            </DropDownItem>
        )
    }

    const selectOption = useCallback((option) => {
        setOpen(false);

        if (!!onChange) onChange(option.value || option.id);

        setActive(option);
        // eslint-disable-next-line
    }, [active]);

    const checkOption = useCallback((option) => {
        if (!!onChange) onChange(option.value || option.id);
        option.checked = !option.checked;

        setActive(getLabelToActivesCheck());

        // eslint-disable-next-line
    }, [options]);

    const radioOption = useCallback((option) => {
        options.map((option) => option.selected = false);
        option.selected = !option.selected;

        if (!!onChange) onChange(option.value || option.id);

        setActive(option);
        // eslint-disable-next-line
    }, [options]);


    const getLabelToActivesCheck = useCallback(() => {
        const valuesActives = options.filter((item) => item?.checked === true);


        if (valuesActives.length <= 0) return null;

        return {name: valuesActives.map(item => item.name).join(", ")}

    }, [options]);

    const setSelectValue = useCallback((value) => {

        setOptions((prevState) => {
            const state = [...prevState];

            for (let item of state) {
                if (item.value === value) item.selected = true;
            }

            return state;
        });

        // eslint-disable-next-line
    }, [options, value]);

    const setCheckValues = useCallback((value) => {

        setOptions((prevState) => {
            const state = [...prevState];

            if (!Array.isArray(value)) return state;

            for (const item of state) {

                const indexValue = value.findIndex((itemValue) => itemValue === item.value);

                if (indexValue > -1) item.checked = true;
            }
            return state
        });

        // eslint-disable-next-line
    }, [value]);

    const handleDropDown = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const selectTypes = useCallback((type: 'text' | 'checkbox' | 'radio') => {
        const types = {
            text: <RenderText options={options} callback={selectOption}/>,
            checkbox: <RenderCheckbox options={options} callback={checkOption}/>,
            radio: <RenderRadio options={options} callback={radioOption}/>,
        }
        return types[type]
        // eslint-disable-next-line
    }, [type, options])


    useEffect(() => {
        if (value != null) {
            if (type === 'checkbox') {
                setCheckValues(value);
                setActive(getLabelToActivesCheck());
            } else {
                setSelectValue(value);
                setActive(options.find((option) => option.value === value || option.id === value));
            }
        }
        // eslint-disable-next-line
    }, [value]);


    return (
        <Container
            tabIndex={0}
            onClick={(e) => {
                if (e.currentTarget === e.target) setOpen(false);
            }}

            onBlur={() => {
                if (type !== "checkbox") setOpen(false);
            }}
        >
            {title && <Title>{title}</Title>}
            <SelectionContainer active={active} onClick={handleDropDown} $open={open} $error={error ?? ''}
                                $disabled={!!disabled}>
                <SelectedLabel>
                    {active ? active.name : label}
                </SelectedLabel>
                <ArrowIcon/>
            </SelectionContainer>
            {
                displayMessage &&
                <HintContainer $show={!!error && !open}>
                    <HintText $error={!!error}>{error}</HintText>
                </HintContainer>
            }
            {
                <DropDownContainer $open={open} $position={dropDownMode}>
                    {selectTypes(type)}
                </DropDownContainer>
            }

        </Container>
    )
}

export default Select;
