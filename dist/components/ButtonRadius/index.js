import React from 'react';
import * as Style from './styles';
export const ButtonRadius = (props) => {
    const { disabled, icon } = props;
    return (React.createElement(Style.ButtonRadius, Object.assign({ disabled: disabled }, props), icon));
};
//# sourceMappingURL=index.js.map