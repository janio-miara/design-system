export interface IFullScreen {
    open: boolean;
}
export interface IContainer {
    size?: 'small' | 'medium' | 'large' | 'auto';
}
export declare const FullScreen: import("styled-components").StyledComponent<"div", any, IFullScreen, never>;
export declare const changeSize: {
    small: import("styled-components").FlattenSimpleInterpolation;
    medium: import("styled-components").FlattenSimpleInterpolation;
    large: import("styled-components").FlattenSimpleInterpolation;
    auto: import("styled-components").FlattenSimpleInterpolation;
};
export declare const Container: import("styled-components").StyledComponent<"div", any, IContainer, never>;
//# sourceMappingURL=styles.d.ts.map