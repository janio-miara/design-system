import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Text } from '../Text';
import { Container, Overlay } from './styles';
export const Loading = ({ active }) => {
    if (!active)
        return null;
    return (React.createElement(React.Fragment, null, active && (React.createElement(Overlay, null,
        React.createElement(Container, null,
            React.createElement(FontAwesomeIcon, { icon: faSpinner, size: "2x", spin: true }),
            React.createElement(Text, { size: "p3", color: "default" }, "CARREGANDO"))))));
};
//# sourceMappingURL=index.js.map