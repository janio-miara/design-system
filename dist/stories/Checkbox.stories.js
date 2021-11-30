import React, { useState } from 'react';
import { Checkbox } from '../components';
export default {
    title: 'Example/Checkbox ',
    component: Checkbox,
};
const PlaygroundContent = () => {
    const [state, setState] = useState(false);
    return (React.createElement("div", { style: { width: '500px', height: '500px', background: 'rgb(239, 239, 239)', padding: '50px' } },
        React.createElement(Checkbox, { checked: state, onClick: () => setState(!state), disabled: true })));
};
export const Playground = PlaygroundContent.bind({});
//# sourceMappingURL=Checkbox.stories.js.map