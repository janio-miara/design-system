import React, { useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../components';
export default {
    title: 'Example/Input ',
    component: Input,
};
const InputIconContent = () => {
    const [inputValue, setInputValue] = useState({ name: '' });
    const handleValues = (target) => {
        const { id, value } = target;
        setInputValue(Object.assign(Object.assign({}, inputValue), { [id]: value }));
    };
    return (React.createElement("div", { style: { width: '500px', height: '500px', padding: '50px' } },
        React.createElement(Input, { value: inputValue.name, onChange: handleValues, icon: faUser, id: "name", name: "Primeiro Nome", onClear: true, variant: "medium", placeholder: "Primeiro nome" })));
};
export const InputIcon = InputIconContent.bind({});
const InputIconErrorContent = () => {
    const [inputValue, setInputValue] = useState({ name: '' });
    const handleValues = (target) => {
        const { id, value } = target;
        setInputValue(Object.assign(Object.assign({}, inputValue), { [id]: value }));
    };
    return (React.createElement("div", { style: { width: '500px', height: '500px', padding: '50px' } },
        React.createElement(Input, { value: inputValue.name, onChange: handleValues, icon: faUser, id: "name", name: "Primeiro Nome", onClear: true, variant: "medium", placeholder: "Primeiro nome", error: true, messageError: "Nome Invalido" })));
};
export const InputIconError = InputIconErrorContent.bind({});
//# sourceMappingURL=Input.stories.js.map