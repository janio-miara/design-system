import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Text } from '../Text';
import * as Styles from './styles';
const LoadingContainer = ({ loading, color }) => {
    return (React.createElement(React.Fragment, null, loading && (React.createElement(Styles.Container, { color: color },
        React.createElement(AiOutlineLoading3Quarters, null),
        React.createElement(Text, { size: "p3" }, "CARREGANDO...")))));
};
export default LoadingContainer;
//# sourceMappingURL=index.js.map