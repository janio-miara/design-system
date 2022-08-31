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
/* eslint-disable no-undef */
import React, { forwardRef } from 'react';
import { BiLoaderCircle } from 'react-icons/bi';
import * as S from './styles';
const Button = (_a, ref) => {
    var { children, icon, size = 'medium', fullWidth = false, minimal = false, disable = false, loading = false, variant = 'primary' } = _a, props = __rest(_a, ["children", "icon", "size", "fullWidth", "minimal", "disable", "loading", "variant"]);
    return (React.createElement(S.Wrapper, Object.assign({ size: size, fullWidth: fullWidth, hasIcon: !!icon, minimal: minimal, ref: ref, disabled: disable, variant: variant }, props),
        loading && (React.createElement("div", { className: "animateBx" },
            React.createElement(BiLoaderCircle, null))),
        icon,
        !!children && React.createElement("span", { className: "text" }, children)));
};
export default forwardRef(Button);
//# sourceMappingURL=index.js.map