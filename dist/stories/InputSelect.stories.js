import React, { useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { InputSelect } from '../components';
export default {
    title: 'Example/InputSelect ',
    component: InputSelect,
};
const InputSelectContent = () => {
    const [inputValue, setInputValue] = useState({ id: 3, value: 'Joao', sobrenome: 'Martins' });
    const object = [
        { id: 1, value: 'Janio', sobrenome: 'Miara Tadeu Ribeiro Fernando Suares' },
        { id: 2, value: 'Marcelo', sobrenome: 'Ribeiro' },
        { id: 3, value: 'Joao', sobrenome: 'Martins' },
    ];
    return (React.createElement("div", { style: { width: '500px', height: '500px', padding: '50px' } },
        React.createElement(InputSelect, { keyValue: "sobrenome", object: object, defaultValue: inputValue, onChange: setInputValue, icon: faUser, id: "name", label: "Primeiro Nome", onClear: true, variant: "medium", placeholder: "Primeiro nome" })));
};
export const InputSelects = InputSelectContent.bind({});
//# sourceMappingURL=InputSelect.stories.js.map