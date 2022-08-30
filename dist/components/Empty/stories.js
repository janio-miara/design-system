import React from 'react';
import Empty from '.';
export default {
    title: 'Components/Empty',
    component: Empty,
    args: {
        title: 'Pagina não encontrada',
        subTitle: 'Verifique se existem solicitações com filtro especifico',
        alertType: 'notPage',
        height: 250,
        width: 200,
    },
};
export const Default = args => (React.createElement("div", { style: { width: '100%', margin: '0 auto' } },
    React.createElement(Empty, Object.assign({}, args))));
//# sourceMappingURL=stories.js.map