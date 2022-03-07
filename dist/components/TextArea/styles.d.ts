import React from 'react';
import { sizeBasic } from '../../types/sizeTypes';
interface ILabel {
    icon?: React.ReactNode | React.Component;
    validate?: boolean;
    autoClear?: boolean;
    onClickClear?: boolean | any;
    spacing?: string;
    autocomplete?: string;
    size?: sizeBasic;
}
interface margin {
    margin?: string;
    size?: string;
}
interface size {
    size?: string;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ContainerIcon: import("styled-components").StyledComponent<"div", any, margin, never>;
export declare const ContainerInput: import("styled-components").StyledComponent<"div", any, ILabel, never>;
export declare const WrapperTextArea: import("styled-components").StyledComponent<"textarea", any, ILabel, never>;
export declare const LabelContainer: import("styled-components").StyledComponent<"span", any, any, never>;
export declare const WrapperLabel: import("styled-components").StyledComponent<"label", any, ILabel, never>;
export declare const CleanInput: import("styled-components").StyledComponent<"div", any, size, never>;
export declare const WrapperCleanInput: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Message: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
//# sourceMappingURL=styles.d.ts.map