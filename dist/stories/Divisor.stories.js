import React from 'react';
import { Divisor } from '../components';
export default {
    title: 'Example/Divisor ',
    component: Divisor,
};
const PlaygroundContent = args => {
    return (React.createElement("div", { style: { width: '500px', height: '500px', padding: '50px' } },
        React.createElement(Divisor, Object.assign({}, args))));
};
export const Playground = PlaygroundContent.bind({});
Playground.args = {
    color: 'primary',
    size: '1px',
    orientation: 'vertical',
};
//# sourceMappingURL=Divisor.stories.js.map