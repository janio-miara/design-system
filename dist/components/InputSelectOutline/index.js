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
import { Popover } from '..';
import useOnClickOutside from '../../hooks/useOnClickOutside';
export function InputSelectOutline(_a) {
    var { icon, id, placeholder, keyValue, defaultValue, object, onChange } = _a, props = __rest(_a, ["icon", "id", "placeholder", "keyValue", "defaultValue", "object", "onChange"]);
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(defaultValue || '');
    const ref = useRef();
    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        }
    }, [defaultValue]);
    const handleChangeActive = (event, item) => {
        event.stopPropagation();
        setValue(item);
        onChange(item);
        setActive(false);
    };
    useOnClickOutside(ref, () => setActive(false));
    const changeBackground = (select, value) => {
        if (select === value) {
            return 'selected';
        }
        return 'not-select';
    };
    return (React.createElement("span", null,
        React.createElement(Style.ContainerInput, { status: active, ref: ref, onBlur: () => active && setActive(false), onClick: () => setActive(!active) },
            React.createElement(Style.WrapperInput, Object.assign({ icon: icon }, props, { id: id, disabled: true, autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", value: value[keyValue], placeholder: !active ? placeholder : '' })),
            icon && (React.createElement("span", { className: "wrapper-icon" },
                React.createElement(FontAwesomeIcon, { icon: icon }))),
            React.createElement("span", { className: "wrapper-icon-selector" },
                React.createElement(FontAwesomeIcon, { icon: faCaretDown })),
            React.createElement(Style.ContainerPoper, { status: active },
                React.createElement(Popover, null, object.map((item) => (React.createElement(Style.ValueSelector, { key: item.id + keyValue, className: changeBackground(item.id, value.id), onClick: (event) => handleChangeActive(event, item) }, item[keyValue])))))),
        !active && (React.createElement(Style.WrapperMessage, null,
            React.createElement("div", null, "Empresa Selecionada")))));
}
//# sourceMappingURL=index.js.map