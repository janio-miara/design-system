import React from 'react';
import { Label } from './styles';
export const Checkbox = ({ checked, disabled, onChange, id }) => {
    return (React.createElement(Label, { disabled: disabled },
        React.createElement("input", { type: "checkbox", id: id, checked: checked, onChange: e => onChange(e.target.checked) }),
        React.createElement("span", null)));
};
//# sourceMappingURL=index.js.map