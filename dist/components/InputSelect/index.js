var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlineCaretDown } from 'react-icons/ai';
import * as Style from './styles';
import { Popover } from '..';
import useOnClickOutside from '../../hooks/useOnClickOutside';
export function InputSelect(_a) {
    var { icon, id, placeholder, label, keyValue, defaultValue, object, onChange } = _a, props = __rest(_a, ["icon", "id", "placeholder", "label", "keyValue", "defaultValue", "object", "onChange"]);
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(defaultValue || '');
    const ref = useRef();
    const handleChangeActive = (event, item) => {
        event.stopPropagation();
        setValue(item);
        onChange(item);
        setActive(!active);
    };
    useOnClickOutside(ref, () => setActive(false));
    const handleClick = () => {
        setActive(!active);
    };
    const changeBackground = (select, value) => {
        if (select === value) {
            return 'selected';
        }
        return 'not-select';
    };
    return (React.createElement(Style.ContainerInput, { status: active, ref: ref, onBlur: () => active && setActive(false), onClick: handleClick },
        React.createElement("span", { className: "wrapper-label" }, (active || value) && label),
        React.createElement(Style.WrapperInput, Object.assign({}, props, { id: id, disabled: true, icon: icon, autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", value: value[keyValue], placeholder: !active ? placeholder : '', onChange: () => console.log() })),
        icon && (React.createElement("span", { className: "wrapper-icon" },
            React.createElement(FontAwesomeIcon, { icon: icon }))),
        React.createElement("span", { className: "wrapper-icon-selector" },
            React.createElement(AiOutlineCaretDown, null)),
        React.createElement(Style.ContainerPoper, { status: active },
            React.createElement(Popover, null, object.map((item) => (React.createElement(Style.ValueSelector, { id: item.id, className: changeBackground(item.id, value.id), key: item.id, onClick: (event) => handleChangeActive(event, item) },
                React.createElement(React.Fragment, null,
                    item.icon && item.icon,
                    item.image && React.createElement("img", { src: item.image, alt: "loading" }),
                    item[keyValue]))))))));
}
//# sourceMappingURL=index.js.map