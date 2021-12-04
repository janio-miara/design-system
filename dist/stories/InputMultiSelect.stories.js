import React, { useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { InputMultiSelect } from '../components';
export default {
    title: 'Example/InputMultiSelect ',
    component: InputMultiSelect,
};
const InputSelectContent = () => {
    const [inputValue, setInputValue] = useState({ id: 3, value: 'Joao', sobrenome: 'Martins' });
    const object = [
        {
            id: 1,
            check: false,
            value: 'Janio',
            sobrenome: 'Miara Tadeu Ribeiro Fernando Suares',
        },
        { id: 2, check: false, disabled: true, value: 'Marcelo', sobrenome: 'Ribeiro' },
        { id: 3, check: true, value: 'Joao', sobrenome: 'Martins' },
    ];
    return (React.createElement("div", { style: { width: '500px', height: '500px', padding: '50px' } },
        React.createElement(InputMultiSelect, { keyValue: "sobrenome", object: object, defaultValue: [1, 2], onChange: (e) => console.log(e), icon: faUser, id: "name", label: "Primeiro Nome", onClear: true, variant: "medium", placeholder: "Primeiro nome" })));
};
export const InputSelectContentPlay = InputSelectContent.bind({});
//# sourceMappingURL=InputMultiSelect.stories.js.map