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
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import * as Style from './styles';
export const Input = (_a) => {
    var { icon, onChange, value, id, onClear, placeholder, name, messageError, error, type } = _a, props = __rest(_a, ["icon", "onChange", "value", "id", "onClear", "placeholder", "name", "messageError", "error", "type"]);
    return (React.createElement(Style.ContainerInput, { error: error },
        value && React.createElement("div", { className: "wrapper-label" }, name),
        React.createElement(Style.WrapperInput, Object.assign({ icon: icon, error: error }, props, { id: id, type: type || 'text', placeholder: placeholder, value: value, onChange: (e) => onChange(e.target) })),
        icon && React.createElement("div", { className: "wrapper-icon" }, icon),
        value && onClear && (React.createElement("button", { type: "button", className: "wrapper-icon-close", onClick: () => onChange({ id, name, value: '' }) },
            React.createElement(AiOutlineCloseCircle, null))),
        error && React.createElement(Style.WrapperMessage, null, messageError)));
};
//# sourceMappingURL=index.js.map