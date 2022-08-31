import React from 'react';
import { Table } from './index';
export default {
    title: 'Components/Table',
    component: Table,
    args: {
        ContainerVisible: true,
        loading: false,
    },
    argTypes: {
        data: {
            type: '',
        },
    },
};
export const Default = args => {
    return (React.createElement("div", { style: { width: '100%', height: '400px', margin: '0 auto' } },
        React.createElement(Table, Object.assign({}, args))));
};
export const NoData = args => {
    return (React.createElement("div", { style: {
            width: '100%',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        } },
        React.createElement(Table, Object.assign({}, args))));
};
NoData.args = {
    titleEmpty: 'Não Localizamos Nenhum Item !!!',
    subTitleEmpty: 'Pesquise novamente',
    data: {},
};
//# sourceMappingURL=stories.js.map