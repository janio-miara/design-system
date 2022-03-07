import * as React from 'react';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { TextArea } from '../components';
export default {
    title: 'TextArea',
    component: TextArea,
};
export const TextAreaComponent = () => {
    const [inputValue, setInputValue] = React.useState('');
    const handleValues = (target) => {
        const { value } = target;
        setInputValue(value);
        console.log('@@@', target, value);
    };
    return (React.createElement("div", { style: {
            width: '500px',
            height: '500px',
            background: 'rgb(239, 239, 239)',
            padding: '16px',
            display: 'flex',
            justifyContent: 'center',
        } },
        React.createElement(TextArea, { size: "small", id: "name", autoClear: true, icon: faBell, name: "Name", placeholder: "Wavecode...", value: inputValue, onChange: handleValues, validate: true, mensage: "Texto deve conter mais de 5 caracteres" })));
};
//# sourceMappingURL=TextArea.stories.js.map