import React from 'react';
import { Highlight } from '../components';
export default {
    title: 'Example/Highlight',
    component: Highlight,
};
const PlaygroundContent = args => {
    return (React.createElement("div", { style: { width: '500px', height: '500px', background: 'rgb(239, 239, 239)', padding: '50px' } },
        React.createElement(Highlight, Object.assign({}, args))));
};
export const Playground = PlaygroundContent.bind({});
Playground.args = {
    size: 'p3',
    color: 'success',
    fontWeight: 'lighter',
    searchWords: ['Prezado', 'margem'],
};
//# sourceMappingURL=Highlight.stories.js.map