var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Button } from '../Button';
import { Text } from '../Text';
import * as Style from './styles';
import { animationCloseSideModal } from '../../utils/animationCloseSideModal';
export const ModalDrawer = props => {
    const { open, close, title, subTitle, icon, children, action, notHeader, side, refScroll } = props;
    const ref = useRef();
    const closeModal = () => __awaiter(void 0, void 0, void 0, function* () {
        yield animationCloseSideModal(ref.current, side);
        if (close)
            close();
    });
    useOnClickOutside(ref, closeModal);
    return open
        ? ReactDOM.createPortal(React.createElement(Style.Container, Object.assign({}, props),
            React.createElement(Style.ContainerFilter, Object.assign({}, props, { ref: ref }),
                !notHeader ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "wrapper-heading" },
                        icon && React.createElement("span", { className: "icon" }, icon),
                        React.createElement("div", null,
                            React.createElement(Text, { element: "h3", bold: true, color: "white" }, title),
                            React.createElement(Text, { element: "span", size: "p3", color: "white" }, subTitle && subTitle))),
                    React.createElement("div", { className: "content", ref: refScroll }, children))) : (React.createElement("div", { className: "content-not-header", ref: refScroll }, children)),
                React.createElement("div", { className: "button-wrapp" },
                    action && action(),
                    React.createElement(Button, { size: "small", outlined: true, color: "primary", onClick: closeModal }, "Fechar")))), document.body)
        : null;
};
//# sourceMappingURL=index.js.map