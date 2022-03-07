import React, { useState } from 'react';
import * as S from './styles';
import { Text } from '../Text';
export const Tabs = ({ onChange, tabs, size, colorActive, colorDefault }) => {
    const [active, setActive] = useState(tabs[0]);
    const handleTab = (tab) => {
        setActive(tab);
        if (onChange) {
            onChange(tab);
        }
    };
    return (React.createElement(S.Container, null, tabs.map(tab => {
        return (React.createElement(S.Wrapper, { onClick: () => handleTab(tab), colorActive: colorActive },
            React.createElement(Text, { element: "span", bold: active === tab, size: size || 'p2', color: active === tab ? colorActive || 'secondary' : colorDefault || 'default' }, tab),
            active === tab && React.createElement("div", { className: "divider" })));
    })));
};
//# sourceMappingURL=index.js.map