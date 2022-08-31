import React from 'react';
import Tabela from '.';
export default {
    title: 'Components/Table',
    component: Tabela,
    args: {
        ContainerVisible: true,
        loading: false,
        height: '400px',
    },
    argTypes: {
        data: {
            type: '',
        },
    },
};
export const Default = args => {
    return (React.createElement("div", { style: { width: '100%', height: '400px', margin: '0 auto' } },
        React.createElement(Tabela, Object.assign({}, args))));
};
export const NoData = args => {
    return (React.createElement("div", { style: {
            margin: '0 auto',
            width: '100%',
            height: '400px',
        } },
        React.createElement(Tabela, Object.assign({}, args))));
};
NoData.args = {
    titleEmpty: 'Não Localizamos Nenhum Item !!!',
    subTitleEmpty: 'Pesquise novamente',
    data: {},
};
//# sourceMappingURL=stories.js.map