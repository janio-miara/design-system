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
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker, { registerLocale } from 'react-datepicker';
// eslint-disable-next-line import/no-extraneous-dependencies
import { pt } from 'date-fns/locale';
import * as Style from './styles';
import 'react-datepicker/dist/react-datepicker.css';
registerLocale('pt', pt);
export const Datepicker = (_a) => {
    var { width, label } = _a, props = __rest(_a, ["width", "label"]);
    return (React.createElement(Style.Container, { width: width },
        React.createElement("div", { className: "wrapper-label" }, label),
        React.createElement(DatePicker, Object.assign({ locale: "pt", dateFormat: "dd/MM/yyyy" }, props)),
        React.createElement("button", { type: "button", className: "icon" },
            React.createElement(AiOutlineCalendar, null))));
};
//# sourceMappingURL=index.js.map