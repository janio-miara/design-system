import React from 'react';
import TableRow from './TableRow';
import CellHeader from './TableHeader';
import { Container } from './styles';
export const Table = ({ header, body }) => {
    return (React.createElement(Container, null,
        React.createElement("div", { className: "tbl-header" },
            React.createElement("table", { cellPadding: "0", cellSpacing: "0" },
                React.createElement("thead", null,
                    React.createElement("tr", null, header.map(({ align, width, name, action, id }) => {
                        return (React.createElement(CellHeader, { align: align, width: width, action: action }, name));
                    }))))),
        React.createElement("div", { className: "tbl-content" },
            React.createElement("table", { cellPadding: "0", cellSpacing: "0" },
                React.createElement("tbody", null, body.map(({ id, values }) => {
                    return (React.createElement("tr", null, values === null || values === void 0 ? void 0 : values.map(({ value, maxCaracter, align, action, width }) => {
                        return (React.createElement(TableRow, { align: align, width: width, action: action, maxCaracter: maxCaracter }, value));
                    })));
                }))))));
};
//# sourceMappingURL=index.js.map