import React, { useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { Button, ModalDrawer } from '../components';
export default {
    title: 'Example/ModalDrawer',
    component: ModalDrawer,
};
// eslint-disable-next-line react/function-component-definition
const PlaygroundContent = (args) => {
    const [open, setOpen] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { onClick: () => setOpen(true) }, "Open side filter"),
        React.createElement(ModalDrawer, Object.assign({}, args, { open: open, close: () => setOpen(false) }))));
};
export const Playground = PlaygroundContent.bind({});
Playground.args = {
    title: 'Modal Title',
    open: true,
    side: 'right',
    notHeader: true,
    icon: React.createElement(BiHelpCircle, null),
    children: ' sdifhiushdfiuh sdifhiusdf sidufhiusdfhsdiufh iusdfhiusdf  jsdfjh skdjfhjksd sdkfjksd sdkjfhkjsd sdkjkjsd kjsdfkj sdkjfhkjsdf skdjhf ksdhkj  kjsdfkj kjshdf ',
    subTitle: 'Teste subtitle',
    action: () => (React.createElement(Button, { size: "small", color: "primary" }, "Salvar")),
};
//# sourceMappingURL=ModalDrawer.stories.js.map