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
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import * as Style from './styles';
import { Popover } from '..';
import useOnClickOutside from '../../hooks/useOnClickOutside';
export const InputSelect = (_a) => {
    var props = __rest(_a, []);
    const { icon, id, placeholder, label, keyValue, defaultValue, object } = props;
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(defaultValue || '');
    const ref = useRef();
    const handleChangeActive = (event, item) => {
        event.stopPropagation();
        setValue(item);
        setActive(false);
    };
    useOnClickOutside(ref, () => setActive(false));
    return (React.createElement(Style.ContainerInput, { status: active, onBlur: () => active && setActive(false), onClick: () => setActive(true) },
        React.createElement("span", { className: "wrapper-label" }, (active || value) && label),
        React.createElement(Style.WrapperInput, Object.assign({}, props, { id: id, disabled: true, autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", value: value[keyValue], placeholder: !active ? placeholder : '', onChange: () => console.log() })),
        icon && (React.createElement("span", { className: "wrapper-icon" },
            React.createElement(FontAwesomeIcon, { icon: icon }))),
        React.createElement("span", { className: "wrapper-icon-selector" },
            React.createElement(FontAwesomeIcon, { icon: faCaretDown })),
        React.createElement(Style.ContainerPoper, { status: active, ref: ref },
            React.createElement(Popover, { ref: ref }, object.map((item) => (React.createElement(Style.ValueSelector, { onClick: (event) => handleChangeActive(event, item) }, item[keyValue])))))));
};
//# sourceMappingURL=index.js.map