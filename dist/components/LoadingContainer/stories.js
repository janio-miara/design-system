import React from 'react';
import LoadingContainer from '.';
export default {
    title: 'Components/Loaders/LoadingContainer',
    component: LoadingContainer,
    args: {
        color: '#c3c',
        loading: true,
    },
    argsTypes: {
        color: {
            type: 'color',
        },
    },
};
export const Default = args => React.createElement(LoadingContainer, Object.assign({}, args));
//# sourceMappingURL=stories.js.map