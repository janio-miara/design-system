import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import * as Style from './styles';
export const Button = (props) => {
    const { loading, icon, children, disabled } = props;
    return (React.createElement(Style.ContainerButton, Object.assign({ disabled: disabled }, props),
        loading && (React.createElement("span", { className: "spinner" },
            React.createElement(FaSpinner, null))),
        React.createElement("span", { className: "icon-button" }, icon),
        React.createElement("span", null, children)));
};
//# sourceMappingURL=index.js.map