import React, { useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ButtonRadius } from '../ButtonRadius';
import * as S from './styles';
export const TextArea = ({ size, validate, name, type, value, onChange, placeholder, icon, message, autoClear, id, props, }) => {
    const [viewLabel, setState] = useState(false);
    return (React.createElement(S.Container, null,
        React.createElement(S.LabelContainer, null,
            React.createElement(S.WrapperLabel, null, viewLabel && name)),
        React.createElement(S.ContainerInput, null,
            React.createElement(S.WrapperTextArea, Object.assign({ size: size, autocomplete: "off", autoCorrect: "off", autoCapitalize: "off" }, props, { id: id, name: name, type: type, value: value, onChange: (e) => onChange(e.target), icon: icon, placeholder: viewLabel ? placeholder : name, validate: validate, onFocus: () => setState(true), onBlur: () => !value && setState(false) })),
            autoClear && value.length > 3 && (React.createElement(S.CleanInput, null,
                React.createElement(S.WrapperCleanInput, null,
                    React.createElement(ButtonRadius, { icon: faTimes, size: "small", color: "default", onClick: () => onChange({ id, value: '' }), outlined: true }))))),
        !validate && React.createElement(S.Message, null, message)));
};
//# sourceMappingURL=index.js.map