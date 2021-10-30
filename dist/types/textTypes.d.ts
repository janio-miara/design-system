import React from 'react';
import { sizeText } from './sizeTypes';
import { colorTypes } from './colorTypes';
export interface TextPros {
    color?: colorTypes;
    children?: React.ReactNode | any;
    element?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4';
    props?: any;
    size?: sizeText;
    transform?: 'uppercase' | 'lowercase' | 'capitalize';
    bold?: boolean;
    lighter?: boolean;
}
export interface TextLinkProps {
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    children?: React.ReactNode | any;
    onClick?: () => void;
    disabled?: boolean;
    size?: sizeText;
    href?: string;
    target?: '_self' | '_blank';
    icon?: any;
    props?: any;
}
//# sourceMappingURL=textTypes.d.ts.map