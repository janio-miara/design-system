import React from 'react';
import { RiUserFill } from 'react-icons/ri';
import { ButtonRadius } from '../components';
export default {
    title: 'Example/ButtonRadius',
    component: ButtonRadius,
};
const PlaygroundContent = args => {
    return (React.createElement(React.Fragment, null,
        React.createElement(ButtonRadius, Object.assign({ color: "primary" }, args))));
};
export const Playground = PlaygroundContent.bind({});
Playground.args = {
    size: 'medium',
    icon: React.createElement(RiUserFill, null),
    disabled: false,
};
//# sourceMappingURL=ButtonRadius.stories.js.map