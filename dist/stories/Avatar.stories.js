import React from 'react';
import { Avatar } from '../components';
export default {
    title: 'Example/Avatar',
    component: Avatar,
};
const PlaygroundContent = args => {
    return React.createElement(Avatar, Object.assign({}, args));
};
export const Playground = PlaygroundContent.bind({});
Playground.args = {
    name: 'Janio Vinicius',
    active: true,
};
//# sourceMappingURL=Avatar.stories.js.map