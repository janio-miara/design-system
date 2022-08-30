import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlineCaretDown } from 'react-icons/ai';
import * as Style from './styles';
import { Checkbox, Popover } from '..';
import useOnClickOutside from '../../hooks/useOnClickOutside';
export function InputMultiSelect({ icon, id, placeholder, label, keyValue, object, height, onChange, defaultValue, }) {
    const [active, setActive] = useState(false);
    const [activeAll, setActiveAll] = useState(false);
    const [value, setValue] = useState(object);
    const ref = useRef();
    useEffect(() => {
        if (defaultValue) {
            setValue(value === null || value === void 0 ? void 0 : value.map((el) => {
                return Object.assign(Object.assign({}, el), { checked: !!defaultValue.find((ell) => el.id === ell) });
            }));
        }
    }, []);
    const handleChangeActiveNew = (check, item) => {
        if (activeAll) {
            setActiveAll(false);
        }
        const newValue = value === null || value === void 0 ? void 0 : value.map((el) => (el.id === item.id ? Object.assign(Object.assign({}, el), { checked: check }) : Object.assign({}, el)));
        const dados = newValue.filter((object) => object.checked);
        onChange(dados);
        setValue(newValue);
    };
    const handleCount = () => {
        return value.filter((objects) => objects.checked).map((el) => el[keyValue]).length;
    };
    const handleSelectAll = () => {
        const newValue = value === null || value === void 0 ? void 0 : value.map((el) => (!el.disabled ? Object.assign(Object.assign({}, el), { checked: !activeAll }) : el));
        setValue(newValue);
        const dados = newValue.filter((object) => object.checked);
        onChange(dados);
        setActiveAll(!activeAll);
    };
    const handleTratamentoValue = () => {
        return value
            .filter((object) => object.checked)
            .map((el) => el[keyValue])
            .join(', ');
    };
    const closeInput = () => {
        setActive(false);
    };
    useOnClickOutside(ref, closeInput);
    const handleClose = () => {
        if (active === true) {
            setActive(false);
        }
        else if (active === false) {
            setActive(true);
        }
    };
    console.log(value);
    return (React.createElement(Style.ContainerInput, { ref: ref, status: active },
        React.createElement(Style.ContentInput, { onClick: handleClose },
            React.createElement("span", { className: "wrapper-label" }, (active || value) && label),
            React.createElement(Style.WrapperInput, { icon: icon, id: id, disabled: true, autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", value: handleTratamentoValue(), placeholder: !active ? placeholder : '', onChange: onChange }),
            icon && (React.createElement("span", { className: "wrapper-icon" },
                React.createElement(FontAwesomeIcon, { icon: icon }))),
            handleCount() >= 2 && React.createElement("div", { className: "wrapper-badge-selector" }, handleCount()),
            React.createElement("span", { className: "wrapper-icon-selector" },
                React.createElement(AiOutlineCaretDown, null))),
        React.createElement(Style.ContainerPoper, { status: active },
            React.createElement(Popover, { height: height },
                React.createElement("div", null,
                    React.createElement(Style.ValueSelector, null,
                        React.createElement(Checkbox, { checked: activeAll, onChange: () => handleSelectAll() }),
                        React.createElement("b", null, "Selecionar Todos")),
                    value.length > 0 &&
                        value.map((item) => (React.createElement(Style.ValueSelector, { key: item.id },
                            React.createElement(Checkbox, { id: item.id, disabled: item === null || item === void 0 ? void 0 : item.disabled, checked: item.checked, onChange: (check) => handleChangeActiveNew(check, item) }),
                            React.createElement("label", { htmlFor: item.id }, item[keyValue])))))))));
}
//# sourceMappingURL=index.js.map