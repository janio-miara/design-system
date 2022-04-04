import React from 'react';
import { Label } from './styles';
export const Checkbox = ({ checked, disabled, onChange }) => {
    return (React.createElement(Label, { disabled: disabled },
        React.createElement("input", { type: "checkbox", checked: checked, onChange: e => onChange(e.target.checked) }),
        React.createElement("span", null)));
};
//# sourceMappingURL=index.js.map