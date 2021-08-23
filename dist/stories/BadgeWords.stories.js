import React from 'react';
import { BadgeWords } from '../components';
export default {
    title: 'Example/BadgeWords',
    component: BadgeWords,
};
const PlaygroundContent = args => {
    const handleClose = (text) => {
        console.log(text);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(BadgeWords, Object.assign({}, args, { onClose: handleClose }))));
};
export const Playground = PlaygroundContent.bind({});
Playground.args = {
    color: 'primary',
    text: 'Text Primary',
    outlined: false,
};
//# sourceMappingURL=BadgeWords.stories.js.map