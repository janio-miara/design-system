var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import * as Style from './styles';
import { Badge, Checkbox, Popover } from '..';
import useOnClickOutside from '../../hooks/useOnClickOutside';
export const InputMultiSelect = (_a) => {
    var { icon, id, placeholder, label, keyValue, object, height, onChange, defaultValue } = _a, props = __rest(_a, ["icon", "id", "placeholder", "label", "keyValue", "object", "height", "onChange", "defaultValue"]);
    const [active, setActive] = useState(false);
    const [activeAll, setActiveAll] = useState(false);
    const [value, setValue] = useState(object);
    const ref = useRef();
    useEffect(() => {
        if (defaultValue) {
            setValue(value.map((el) => {
                return Object.assign(Object.assign({}, el), { check: !!defaultValue.find((ell) => el.id === ell) });
            }));
        }
    }, []);
    const handleChangeActiveNew = (checked, item) => {
        if (activeAll) {
            setActiveAll(false);
        }
        const newValue = value === null || value === void 0 ? void 0 : value.map((el) => (el.id === item.id ? Object.assign(Object.assign({}, el), { check: checked }) : el));
        const dados = newValue.filter((object) => object.check);
        onChange(dados);
        setValue(newValue);
    };
    const handleCount = () => {
        return value.filter((object) => object.check).map((el) => el[keyValue]).length;
    };
    const handleSelectAll = () => {
        const newValue = value === null || value === void 0 ? void 0 : value.map((el) => (!el.disabled ? Object.assign(Object.assign({}, el), { check: !activeAll }) : el));
        setValue(newValue);
        const dados = newValue.filter((object) => object.check);
        onChange(dados);
        setActiveAll(!activeAll);
    };
    const handleTratamentoValue = () => {
        return value
            .filter((object) => object.check)
            .map((el) => el[keyValue])
            .join(', ');
    };
    const closeInput = () => {
        setActive(false);
    };
    useOnClickOutside(ref, closeInput);
    return (React.createElement(Style.ContainerInput, { status: active, onClick: () => setActive(true) },
        React.createElement("span", { className: "wrapper-label" }, (active || value) && label),
        React.createElement(Style.WrapperInput, Object.assign({ icon: icon }, props, { id: id, disabled: true, autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", value: handleTratamentoValue(), placeholder: !active ? placeholder : '', onChange: onChange })),
        icon && (React.createElement("span", { className: "wrapper-icon" },
            React.createElement(FontAwesomeIcon, { icon: icon }))),
        handleCount() >= 2 && (React.createElement("div", { className: "wrapper-badge-selector" },
            React.createElement(Badge, null, handleCount()))),
        React.createElement("span", { className: "wrapper-icon-selector" },
            React.createElement(FontAwesomeIcon, { icon: faCaretDown })),
        React.createElement(Style.ContainerPoper, { status: active, ref: ref },
            React.createElement(Popover, { height: height },
                React.createElement(Style.ValueSelector, null,
                    React.createElement(Checkbox, { checked: activeAll, onChange: () => handleSelectAll() }),
                    React.createElement("b", null, "Selecionar Todos")),
                value.map((item) => (React.createElement(Style.ValueSelector, { key: item.id },
                    React.createElement(Checkbox, { disabled: item === null || item === void 0 ? void 0 : item.disabled, checked: item.check, onChange: (checked) => handleChangeActiveNew(checked, item) }),
                    item[keyValue])))))));
};
//# sourceMappingURL=index.js.map