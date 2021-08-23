import React from 'react';
import * as Style from './styles';
export const BadgeWords = (props) => {
    const { text, onClose } = props;
    return (React.createElement(Style.Container, Object.assign({}, props),
        text,
        onClose && (React.createElement("button", { type: "button", onClick: () => onClose(text) }, "x"))));
};
//# sourceMappingURL=index.js.map