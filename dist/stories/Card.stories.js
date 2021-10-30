import React from 'react';
import { Card } from '../components';
export default {
    title: 'Example/Card',
    component: Card,
};
const PlaygroundContent = args => {
    return (React.createElement("div", { style: { width: '500px', height: '500px', background: 'rgb(239, 239, 239)', padding: '50px' } },
        React.createElement(Card, Object.assign({}, args))));
};
export const Playground = PlaygroundContent.bind({});
Playground.args = {
    color: 'white',
    height: '200px',
    children: 'Height 200px',
    effect: true,
};
//# sourceMappingURL=Card.stories.js.map