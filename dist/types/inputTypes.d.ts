import React from 'react';
import { sizeBasic } from './sizeTypes';
export interface InputProps {
    id?: string;
    variant?: sizeBasic;
    value: string | number;
    placeholder?: string;
    name?: string;
    icon?: React.ReactNode;
    onClear?: boolean;
    onChange?: any;
    error?: boolean;
    type?: string;
    messageError?: string;
    autocomplete?: string;
    props?: any;
}
export interface InputPropsSelect {
    id?: string;
    variant?: sizeBasic;
    placeholder?: string;
    label?: string;
    icon?: any;
    onClear?: boolean;
    onChange?: any;
    object?: any;
    defaultValue?: any;
    keyValue?: any;
    height?: string;
    props?: any;
}
//# sourceMappingURL=inputTypes.d.ts.map