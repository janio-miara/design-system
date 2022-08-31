import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Input } from '../components';
export default {
    title: 'Example/Input ',
    component: Input,
    args: {
        id: 'name',
        variant: 'small',
        placeholder: 'Nome Completo',
        name: 'full-name',
        error: false,
        type: 'text',
        messageError: 'Digita direito',
        value: '',
        icon: React.createElement(FaUser, null),
    },
    argTypes: {
        icon: {
            type: 'symbol',
        },
    },
};
export const Default = args => {
    const [inputValue, setInputValue] = useState({ name: '' });
    const handleValues = (target) => {
        const { id, value } = target;
        setInputValue(Object.assign(Object.assign({}, inputValue), { [id]: value }));
    };
    return (React.createElement("div", { style: {
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
        } },
        React.createElement("div", { style: { width: '250px' } },
            React.createElement(Input, Object.assign({}, args, { value: inputValue.name, onChange: handleValues })))));
};
//# sourceMappingURL=Input.stories.js.map