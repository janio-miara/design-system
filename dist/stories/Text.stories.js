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
    bold: true,
    lighter: false,
};
const TextContent = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { lighter: true }, "Texto Lighter"),
        React.createElement(Text, null, "Texto Normal"),
        React.createElement(Text, { bold: true }, "Texto Bold")));
};
export const TextContentStyle = TextContent.bind({});
const TextSize = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { size: "p0" }, "Texto Normal P0"),
        React.createElement(Text, { size: "p1" }, "Texto Normal P1"),
        React.createElement(Text, { size: "p2" }, "Texto Normal P2"),
        React.createElement(Text, { size: "p3" }, "Texto Normal P3"),
        React.createElement(Text, { size: "p4" }, "Texto Normal P4")));
};
export const TextContentSize = TextSize.bind({});
//# sourceMappingURL=Text.stories.js.map