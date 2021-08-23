import React from 'react';
import * as Style from './styles';
export const TextLink = (props) => {
    const { href, target, onClick, icon } = props;
    return (React.createElement(Style.Container, Object.assign({}, props, { href: href, target: target, onClick: onClick }),
        React.createElement("span", null, icon),
        "TextLink"));
};
//# sourceMappingURL=index.js.map