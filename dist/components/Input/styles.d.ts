import { InputProps } from '../../types/inputTypes';
import { sizeBasic } from '../../types/sizeTypes';
export declare const changeSize: {
    small: import("styled-components").FlattenSimpleInterpolation;
    medium: import("styled-components").FlattenSimpleInterpolation;
    large: import("styled-components").FlattenSimpleInterpolation;
};
export declare const changeScapingHeight: {
    small: import("styled-components").FlattenSimpleInterpolation;
    medium: import("styled-components").FlattenSimpleInterpolation;
    large: import("styled-components").FlattenSimpleInterpolation;
};
export declare const changeScapingWidth: {
    small: import("styled-components").FlattenSimpleInterpolation;
    medium: import("styled-components").FlattenSimpleInterpolation;
    large: import("styled-components").FlattenSimpleInterpolation;
};
interface propsInput {
    scapingHeight?: sizeBasic;
    scapingWidth?: sizeBasic;
}
export declare const ContainerInput: import("styled-components").StyledComponent<"div", any, propsInput, never>;
export declare const WrapperInput: import("styled-components").StyledComponent<"input", any, InputProps, never>;
export declare const WrapperMessage: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
//# sourceMappingURL=styles.d.ts.map