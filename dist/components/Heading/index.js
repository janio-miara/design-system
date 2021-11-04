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
import { Text } from '..';
import { Container } from './styles';
export const Heading = (_a) => {
    var props = __rest(_a, []);
    const { title, subTitle, element, icon } = props;
    return (React.createElement(Container, null,
        icon && React.createElement("div", { className: "icon" }, icon),
        React.createElement("div", null,
            React.createElement(Text, { element: element || 'h4', color: "primary" }, title),
            React.createElement(Text, { color: "lightDark" }, subTitle))));
};
//# sourceMappingURL=index.js.map