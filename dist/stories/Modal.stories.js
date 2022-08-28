import React, { useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { Button, Modal } from '../components';
export default {
    title: 'Example/Modal',
    component: Modal,
};
const PlaygroundCont = args => {
    const [open, setOpen] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { onClick: () => setOpen(true) }, "Open side filter"),
        React.createElement(Modal, Object.assign({}, args, { open: open, close: () => setOpen(false) }))));
};
export const Playground = PlaygroundCont.bind({});
Playground.args = {
    title: 'Modal Title',
    open: true,
    size: 'small',
    offClose: false,
    icon: React.createElement(BiHelpCircle, null),
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas.',
    textAction: 'janio',
    actionClick: () => (React.createElement(Button, { size: "small", color: "primary", minimal: true }, "Salvarddd")),
};
//# sourceMappingURL=Modal.stories.js.map