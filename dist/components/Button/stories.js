import React from 'react';
import { FiLayers } from 'react-icons/fi';
import Button from '.';
export default {
    title: 'Components/Buttons/Button',
    component: Button,
    args: {
        minimal: false,
        loading: false,
        variant: 'success',
    },
    argTypes: {
        children: {
            type: 'string',
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'error', 'default', 'warning', 'white', 'dark', 'lightDark'],
            },
        },
        icon: {
            type: '',
        },
    },
};
export const Default = args => React.createElement(Button, Object.assign({}, args));
Default.args = {
    children: 'Solicitar',
};
export const withIcon = args => React.createElement(Button, Object.assign({}, args));
withIcon.args = {
    children: 'Cotação',
    icon: React.createElement(FiLayers, null),
};
export const asLink = args => React.createElement(Button, Object.assign({}, args));
asLink.args = {
    size: 'large',
    children: 'Solicitar',
    as: 'a',
    href: '/link',
};
export const isDisabled = args => React.createElement(Button, Object.assign({}, args));
isDisabled.args = {
    children: 'Solicitar',
    disable: true,
};
//# sourceMappingURL=stories.js.map