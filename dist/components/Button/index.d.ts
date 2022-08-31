import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';
declare type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>;
export declare type ButtonPropsType = {
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    minimal?: boolean;
    icon?: JSX.Element;
    variant?: 'primary' | 'secondary' | 'success' | 'error' | 'default' | 'warning' | 'white' | 'dark' | 'lightDark';
    disable?: boolean;
    loading?: boolean;
    as?: React.ElementType;
} & ButtonTypes;
declare const _default: React.ForwardRefExoticComponent<ButtonPropsType & React.RefAttributes<S.WrapperProps>>;
export default _default;
//# sourceMappingURL=index.d.ts.map