import React, { useState } from 'react';
import { Switch } from '../components';
export default {
    title: 'Example/Switch ',
    component: Switch,
};
const PlaygroundContent = () => {
    const [state, setState] = useState(false);
    return (React.createElement("div", { style: { width: '500px', height: '500px', background: 'rgb(239, 239, 239)', padding: '50px' } },
        React.createElement(Switch, { checked: state, onChange: (data) => setState(data), color: "success" })));
};
export const Playground = PlaygroundContent.bind({});
//# sourceMappingURL=Switch.stories.js.map