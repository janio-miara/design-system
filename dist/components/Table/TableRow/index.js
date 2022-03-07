import React from 'react';
import { Td } from './styles';
const TableRow = ({ children, width, maxCaracter, align, action }) => {
    return (React.createElement(Td, { width: width, maxCaracter: maxCaracter, align: align, onClick: () => action && action() }, children));
};
export default TableRow;
//# sourceMappingURL=index.js.map