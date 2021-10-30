import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { Button } from '../Button';
import { Text } from '../Text';
import * as Style from './styles';
export const ModalDrawer = props => {
    const { open, close, title, subTitle, icon, children, action } = props;
    const ref = useRef();
    useOnClickOutside(ref, close);
    return open
        ? ReactDOM.createPortal(React.createElement(Style.Container, Object.assign({}, props),
            React.createElement("div", { ref: ref },
                React.createElement(Style.ContainerFilter, Object.assign({}, props),
                    React.createElement("div", { className: "wrapper-heading" },
                        icon && React.createElement("span", { className: "icon" }, icon),
                        React.createElement("div", null,
                            React.createElement(Text, { element: "h3", bold: true, color: "white" }, title),
                            React.createElement(Text, { element: "span", size: "p3", color: "default" }, subTitle && subTitle))),
                    React.createElement("div", { className: "content" }, children),
                    React.createElement("div", { className: "button-wrapp" },
                        action && action(),
                        React.createElement(Button, { size: "small", outlined: true, color: "primary", onClick: close }, "Fechar"))))), document.body)
        : null;
};
//# sourceMappingURL=index.js.map