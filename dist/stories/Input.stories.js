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
    return (React.createElement("div", { style: { display: 'flex', width: '700px', height: '500px', padding: '50px' } },
        React.createElement(Input, { value: inputValue.name, icon: faUser, onChange: handleValues, scapingHeight: "small", scapingWidth: "small", id: "name", name: "Primeiro Nome", onClear: true, placeholder: "Primeiro nome" }),
        React.createElement(Input, { value: inputValue.name, icon: faUser, onChange: handleValues, scapingHeight: "small", scapingWidth: "small", type: "password", id: "password", name: "Password", onClear: true, placeholder: "Primeiro nome" }),
        React.createElement("div", null,
            React.createElement(Input, { value: inputValue.name, onChange: handleValues, scapingHeight: "small", scapingWidth: "small", id: "name", name: "Primeiro Nome", onClear: true, placeholder: "Primeiro nome", error: true, messageError: "Nome Invalido" }),
            React.createElement(Input, { value: inputValue.name, onChange: handleValues, scapingHeight: "small", scapingWidth: "small", id: "name", name: "Primeiro Nome", onClear: true, placeholder: "Primeiro nome", error: true, messageError: "Nome Invalido" }))));
};
export const InputIcon = InputIconContent.bind({});
const InputIconErrorContent = () => {
    const [inputValue, setInputValue] = useState({ name: '' });
    const handleValues = (target) => {
        const { id, value } = target;
        setInputValue(Object.assign(Object.assign({}, inputValue), { [id]: value }));
    };
    return (React.createElement("div", { style: { width: '500px', height: '500px', padding: '50px' } },
        React.createElement(Input, { value: inputValue.name, onChange: handleValues, icon: faUser, type: "text", id: "name", name: "Primeiro Nome", onClear: true, variant: "medium", placeholder: "Primeiro nome", error: true, messageError: "Nome Invalido" })));
};
export const InputIconError = InputIconErrorContent.bind({});
//# sourceMappingURL=Input.stories.js.map