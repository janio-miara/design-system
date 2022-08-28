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
import Lottie from 'react-lottie';
import load from './load.json';
import * as S from './styles';
const Button = (_a, ref) => {
    var { children, icon, size = 'medium', fullWidth = false, minimal = false, background = 'primary', disable = false, loading = false } = _a, props = __rest(_a, ["children", "icon", "size", "fullWidth", "minimal", "background", "disable", "loading"]);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: load,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (React.createElement(S.Wrapper, Object.assign({ background: background, size: size, fullWidth: fullWidth, hasIcon: !!icon, minimal: minimal, ref: ref, disabled: disable }, props),
        loading && (React.createElement("div", { className: "animateBx" },
            React.createElement(Lottie, { options: defaultOptions, height: 60, width: "100%" }))),
        !loading && icon,
        !!children && React.createElement("span", null, children)));
};
export default forwardRef(Button);
//# sourceMappingURL=index.js.map