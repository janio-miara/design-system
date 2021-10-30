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
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';
import { Text } from '../Text';
import { Button } from '../Button';
import { ButtonRadius } from '../ButtonRadius';
export const Modal = (_a) => {
    var { icon, actionClick, textAction, open, title, size, close, children, offClose } = _a, props = __rest(_a, ["icon", "actionClick", "textAction", "open", "title", "size", "close", "children", "offClose"]);
    return ReactDOM.createPortal(React.createElement(S.FullScreen, { open: open },
        React.createElement(S.Container, Object.assign({ size: size || 'auto' }, props),
            React.createElement("header", null,
                React.createElement("div", { className: "logo" },
                    icon,
                    React.createElement(Text, { element: "p", bold: true, size: "p2", color: "white" }, title)),
                !offClose && (React.createElement("div", { className: "close" },
                    React.createElement(ButtonRadius, { onClick: close, size: "small", icon: React.createElement(FontAwesomeIcon, { icon: faTimes }) })))),
            React.createElement("div", { className: "body" }, children),
            React.createElement("footer", null,
                actionClick && (React.createElement(Button, { color: "primary", size: "small", onClick: actionClick }, textAction || 'Salvar')),
                !offClose && (React.createElement(Button, { size: "small", color: "primary", outlined: true, onClick: close }, "Fechar"))))), document.body);
};
//# sourceMappingURL=index.js.map