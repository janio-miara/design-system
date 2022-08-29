import React from 'react';
import Paginate from '.';
export default {
    title: 'Components/Paginate',
    component: Paginate,
    args: {
        startPage: 1,
        pageCount: 100,
    },
};
export const Default = args => React.createElement(Paginate, Object.assign({}, args));
//# sourceMappingURL=stories.js.map