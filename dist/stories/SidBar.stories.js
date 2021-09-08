import React from 'react';
import { SidBar } from '../components';
export default {
    title: 'Example/SidBar',
    component: SidBar,
};
const PlaygroundContent = args => {
    return (React.createElement("div", { style: { width: '100vw', height: '100vh', background: 'rgb(239, 239, 239)' } },
        React.createElement(SidBar, null)));
};
export const Playground = PlaygroundContent.bind({});
//# sourceMappingURL=SidBar.stories.js.map