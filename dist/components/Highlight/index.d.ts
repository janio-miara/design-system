/// <reference types="react" />
import { colorTypes } from '../../types/colorTypes';
import { sizeText } from '../../types/sizeTypes';
export interface PropsHighlight {
    text: string;
    searchWords: string[];
    color?: colorTypes;
    size?: sizeText;
    fontWeight?: 'bold' | 'lighter' | 'normal';
}
export declare const Highlight: ({ text, searchWords, color, size, fontWeight }: PropsHighlight) => JSX.Element;
//# sourceMappingURL=index.d.ts.map