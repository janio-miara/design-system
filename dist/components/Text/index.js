import React from 'react';
import * as Style from './styles';
export const Text = (props) => {
    const { children, element } = props;
    const handleElementP = () => {
        return React.createElement("p", Object.assign({}, props), children);
    };
    const handleElementSpan = () => {
        return React.createElement("span", Object.assign({}, props), children);
    };
    const handleElementH1 = () => {
        return React.createElement("h1", Object.assign({}, props), children);
    };
    const handleElementH2 = () => {
        return React.createElement("h2", Object.assign({}, props), children);
    };
    const handleElementH3 = () => {
        return React.createElement("h3", Object.assign({}, props), children);
    };
    const handleElementH4 = () => {
        return React.createElement("h4", Object.assign({}, props), children);
    };
    return (React.createElement(Style.Container, Object.assign({}, props),
        element === 'h1' && handleElementH1(),
        element === 'h2' && handleElementH2(),
        element === 'h3' && handleElementH3(),
        element === 'h4' && handleElementH4(),
        element === 'p' && handleElementP(),
        !element && handleElementP(),
        element === 'span' && handleElementSpan()));
};
//# sourceMappingURL=index.js.map