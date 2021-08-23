import React from 'react';
import { sizeBasic } from './sizeTypes';
export interface IInput {
    mensagem?: string;
    name?: string;
    value: string;
    type?: string;
    color?: string;
    placeholder?: string;
    icon?: any;
    onClickClear?: any;
    autoClear?: any;
    spacing?: string;
    validate?: boolean | any;
    onChange: (text: any) => any;
    mensage?: string;
    id?: string;
    props?: any;
    size?: sizeBasic;
}
export interface ILabel {
    icon?: React.ReactNode | React.Component;
    validate?: boolean;
    autoClear?: boolean;
    onClickClear?: boolean | any;
    spacing?: string;
    autocomplete?: string;
    size?: sizeBasic;
}
//# sourceMappingURL=inputTypes.d.ts.map