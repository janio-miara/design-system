import React from 'react';
import * as Style from './styles';
export const TextLink = (props) => {
    const { href, target, onClick, icon, children } = props;
    return (React.createElement(Style.Container, Object.assign({}, props, { href: href, target: target, onClick: onClick }),
        React.createElement("span", null, icon),
        children));
};
//# sourceMappingURL=index.js.map