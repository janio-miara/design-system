import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';
declare type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>;
export declare type ButtonProps = {
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    minimal?: boolean;
    icon?: JSX.Element;
    variant?: 'primary' | 'secondary' | 'success' | 'error' | 'default' | 'warning' | 'white' | 'dark' | 'lightDark';
    disable?: boolean;
    loading?: true;
    as?: React.ElementType;
} & ButtonTypes;
declare const _default: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<S.WrapperProps>>;
export default _default;
//# sourceMappingURL=index.d.ts.map