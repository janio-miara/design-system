/// <reference types="react" />
interface Ivalue {
    value?: string | any;
    align?: string;
    width?: string;
    action?: () => void;
    maxCaracter?: number | string;
}
interface Ibody {
    id?: number | string;
    values?: Array<Ivalue>;
}
interface IData {
    name?: string | any;
    id?: number | string;
    align?: string;
    width?: string;
    action?: () => void;
}
export interface ITable {
    header: IData[];
    body: Ibody[];
}
export declare const Table: ({ header, body }: ITable) => JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map