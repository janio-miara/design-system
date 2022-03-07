import { sizeText } from './sizeTypes';
import { colorTypes } from './colorTypes';
export interface TabsTypes {
    tabs: string[];
    onChange?: (tab: string) => void;
    disabled?: boolean;
    colorActive?: colorTypes;
    colorDefault?: colorTypes;
    size?: sizeText;
    props?: any;
}
//# sourceMappingURL=tabsTypes.d.ts.map