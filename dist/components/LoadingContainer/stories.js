import React from 'react';
import LoadingContainer from '.';
export default {
    title: 'Components/Loaders/LoadingContainer',
    component: LoadingContainer,
    args: {
        color: 'primary',
        loading: true,
    },
};
export const Default = args => React.createElement(LoadingContainer, Object.assign({}, args));
//# sourceMappingURL=stories.js.map