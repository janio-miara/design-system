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
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../Text';
import * as Style from './styles';
export const Input = (_a) => {
    var { icon, onChange, value, id, onClear, placeholder, name, messageError, error, type, scapingWidth, scapingHeight } = _a, props = __rest(_a, ["icon", "onChange", "value", "id", "onClear", "placeholder", "name", "messageError", "error", "type", "scapingWidth", "scapingHeight"]);
    const [active, setActive] = useState(false);
    const handleClearValue = (event) => {
        event.stopPropagation();
        onChange({ id, value: '' });
        setActive(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Style.ContainerInput, { onBlur: () => active && setActive(false), onClick: () => setActive(true), scapingWidth: scapingWidth, scapingHeight: scapingHeight },
            React.createElement("span", { className: "wrapper-label" }, (active || value) && name),
            React.createElement(Style.WrapperInput, Object.assign({ icon: icon }, props, { autoComplete: "off", id: id, type: type || 'text', placeholder: !active ? placeholder : '', value: value, onChange: (e) => onChange(e.target) })),
            icon && (React.createElement("span", { className: "wrapper-icon" },
                React.createElement(FontAwesomeIcon, { icon: icon }))),
            value && onClear && (React.createElement("span", { className: "wrapper-icon-close" },
                React.createElement(FontAwesomeIcon, { icon: faTimesCircle, onClick: (event) => handleClearValue(event) })))),
        error && (React.createElement(Style.WrapperMessage, null,
            React.createElement(Text, { color: "error", size: "p4", element: "p" }, messageError)))));
};
//# sourceMappingURL=index.js.map