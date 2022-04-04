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
import * as Style from './styles';
export const Text = (_a) => {
    var { color, children, element, size, transform, bold } = _a, props = __rest(_a, ["color", "children", "element", "size", "transform", "bold"]);
    const handleElementP = () => {
        return React.createElement("p", Object.assign({}, props), children);
    };
    const handleElementSpan = () => {
        return React.createElement("span", Object.assign({}, props), children);
    };
    const handleElementH1 = () => {
        return React.createElement("h1", Object.assign({}, props), children);
    };
    const handleElementH2 = () => {
        return React.createElement("h2", Object.assign({}, props), children);
    };
    const handleElementH3 = () => {
        return React.createElement("h3", Object.assign({}, props), children);
    };
    const handleElementH4 = () => {
        return React.createElement("h4", Object.assign({}, props), children);
    };
    return (React.createElement(Style.Container, { color: color, size: size, transform: transform, bold: bold },
        element === 'h1' && handleElementH1(),
        element === 'h2' && handleElementH2(),
        element === 'h3' && handleElementH3(),
        element === 'h4' && handleElementH4(),
        element === 'p' && handleElementP(),
        !element && handleElementP(),
        element === 'span' && handleElementSpan()));
};
//# sourceMappingURL=index.js.map