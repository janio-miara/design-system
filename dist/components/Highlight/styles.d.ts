import { colorTypes } from '../../types/colorTypes';
import { sizeText } from '../../types/sizeTypes';
export interface PropsHighlight {
    color?: colorTypes;
    size?: sizeText;
    fontWeight?: 'bold' | 'lighter' | 'normal';
}
export declare const changeFontWeight: {
    bold: import("styled-components").FlattenSimpleInterpolation;
    lighter: import("styled-components").FlattenSimpleInterpolation;
    normal: import("styled-components").FlattenSimpleInterpolation;
};
export declare const Container: import("styled-components").StyledComponent<"div", any, PropsHighlight, never>;
//# sourceMappingURL=styles.d.ts.map