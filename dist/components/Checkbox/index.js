import React, { useEffect, useState } from 'react';
import { Label } from './styles';
export const Checkbox = ({ checked, onClick, disabled }) => {
    const [status, setStatus] = useState(checked || false);
    useEffect(() => {
        if (!disabled) {
            setStatus(checked || false);
        }
    }, [checked]);
    return (React.createElement(Label, { disabled: disabled, onClick: () => onClick(!status) },
        React.createElement("input", { type: "checkbox", checked: status }),
        React.createElement("span", null)));
};
//# sourceMappingURL=index.js.map