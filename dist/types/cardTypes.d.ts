import React from 'react';
import { colorTypes } from './colorTypes';
export interface ICard {
    children?: React.ReactNode;
    variant?: string;
    color?: colorTypes;
    onClick?: () => void;
    disabled?: boolean;
    width?: string;
    height?: string;
    effect?: boolean;
}
//# sourceMappingURL=cardTypes.d.ts.map