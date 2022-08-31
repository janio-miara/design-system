import React from 'react';
import { Loading } from '../components';
export default {
    title: 'Components/Loaders/Loading',
    component: Loading,
};
export const LoadingActive = () => (React.createElement("div", { style: { height: '400px' } },
    React.createElement(Loading, { active: true })));
//# sourceMappingURL=Loading.stories.js.map