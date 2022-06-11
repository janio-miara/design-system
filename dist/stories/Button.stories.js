import React from 'react';
import { RiUserFill } from 'react-icons/ri';
import { Button } from '../components';
export default {
    title: 'Example/Button',
    component: Button,
};
const PlaygroundContent = args => {
    return React.createElement(Button, Object.assign({ color: "primary" }, args));
};
export const Playground = PlaygroundContent.bind({});
Playground.args = {
    size: 'medium',
    loading: false,
    children: 'Container',
    icon: React.createElement(RiUserFill, null),
    disabled: false,
};
const Template = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { color: "primary" }, "Color"),
        React.createElement(Button, { color: "secondary" }, "Color"),
        React.createElement(Button, { color: "success" }, "Color"),
        React.createElement(Button, { color: "warning" }, "Color"),
        React.createElement(Button, { color: "error" }, "Color"),
        React.createElement(Button, { color: "default" }, "Color")));
};
export const ButtonColor = Template.bind({});
const Templates = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { color: "primary", outlined: true }, "Color"),
        React.createElement(Button, { color: "secondary", outlined: true }, "Color"),
        React.createElement(Button, { color: "success", outlined: true }, "Color"),
        React.createElement(Button, { color: "warning", outlined: true }, "Color"),
        React.createElement(Button, { color: "error", outlined: true }, "Color"),
        React.createElement(Button, { color: "default", outlined: true }, "Color")));
};
export const ButtonOutlined = Templates.bind({});
const TemplateLoading = args => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, Object.assign({ color: "primary" }, args))));
};
export const ButtonLoading = TemplateLoading.bind({});
ButtonLoading.args = {
    size: 'medium',
    loading: true,
    children: 'Container',
    disabled: false,
};
const TemplateIcon = args => React.createElement(Button, Object.assign({ color: "primary" }, args));
export const ButtonIcon = TemplateIcon.bind({});
ButtonIcon.args = {
    size: 'medium',
    children: 'Container',
    icon: React.createElement(RiUserFill, null),
    disabled: false,
};
const TemplateIconLoading = args => React.createElement(Button, Object.assign({ color: "primary" }, args));
export const ButtonIconLoading = TemplateIconLoading.bind({});
ButtonIconLoading.args = {
    size: 'medium',
    loading: true,
    children: 'Container',
    icon: React.createElement(RiUserFill, null),
    disabled: false,
};
const TemplateDisabled = args => React.createElement(Button, Object.assign({ color: "primary" }, args));
export const ButtonDisabled = TemplateDisabled.bind({});
ButtonDisabled.args = {
    size: 'medium',
    children: 'Container',
    icon: React.createElement(RiUserFill, null),
    disabled: true,
};
//# sourceMappingURL=Button.stories.js.map