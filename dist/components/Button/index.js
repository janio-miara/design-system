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
import { FaSpinner } from 'react-icons/fa';
import * as Style from './styles';
export const Button = (_a) => {
    var { loading, icon, children, disabled } = _a, props = __rest(_a, ["loading", "icon", "children", "disabled"]);
    return (React.createElement(Style.ContainerButton, Object.assign({ disabled: disabled }, props),
        loading && (React.createElement("span", { className: "spinner" },
            React.createElement(FaSpinner, null))),
        React.createElement("span", { className: "icon-button" }, icon),
        React.createElement("span", null, children)));
};
//# sourceMappingURL=index.js.map