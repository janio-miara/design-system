import React from 'react';
import * as Style from './styles';
export const Switch = ({ checked, onChange, color }) => {
    return (React.createElement(Style.Container, { color: color },
        React.createElement("input", { checked: checked, type: "checkbox", onChange: data => onChange(data.target.checked) }),
        React.createElement("span", { className: "slider round" })));
};
//# sourceMappingURL=index.js.map