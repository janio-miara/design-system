import React from 'react';
import { FiClock } from 'react-icons/all';
import { Heading } from '../components';
export default {
    title: 'Example/Heading',
    component: Heading,
};
const PlaygroundContent = args => {
    return React.createElement(Heading, Object.assign({}, args));
};
export const Playground = PlaygroundContent.bind({});
Playground.args = {
    title: 'Titulo da pagina principal',
    subTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: React.createElement(FiClock, null),
};
//# sourceMappingURL=Heading.stories.js.map