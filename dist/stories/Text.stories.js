import React from 'react';
import { Text } from '../components';
export default {
    title: 'Example/Text',
    component: Text,
};
const PlaygroundContent = args => {
    return React.createElement(Text, Object.assign({}, args));
};
export const Playground = PlaygroundContent.bind({});
Playground.args = {
    element: 'p',
    children: 'Texto Janio',
};
//# sourceMappingURL=Text.stories.js.map