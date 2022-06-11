import React from 'react';
import * as Styles from './styles';
export const Avatar = ({ active, name }) => {
    const handleName = () => {
        const newName = name.split(' ');
        if (newName.length > 1) {
            return newName[0].substr(0, 1) + newName[1].substr(0, 1);
        }
        return newName[0].substr(0, 2);
    };
    return (React.createElement(Styles.Container, null,
        React.createElement(Styles.Wrapper, { active: active }, handleName())));
};
//# sourceMappingURL=index.js.map