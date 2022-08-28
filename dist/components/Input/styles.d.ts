import { InputProps } from '../../types/inputTypes';
interface Error {
    error?: boolean;
}
export declare type ErrorMessage = {
    error?: boolean;
} & Pick<InputProps, 'variant'>;
export declare const changeSize: {
    small: import("styled-components").FlattenSimpleInterpolation;
    medium: import("styled-components").FlattenSimpleInterpolation;
    large: import("styled-components").FlattenSimpleInterpolation;
};
export declare const changeSizeMessage: {
    small: import("styled-components").FlattenSimpleInterpolation;
    medium: import("styled-components").FlattenSimpleInterpolation;
    large: import("styled-components").FlattenSimpleInterpolation;
};
export declare const ContainerInput: import("styled-components").StyledComponent<"div", any, Error, never>;
export declare const WrapperInput: import("styled-components").StyledComponent<"input", any, InputProps, never>;
export declare const WrapperMessage: import("styled-components").StyledComponent<"div", any, {
    error?: boolean | undefined;
} & Pick<InputProps, "variant">, never>;
export {};
//# sourceMappingURL=styles.d.ts.map