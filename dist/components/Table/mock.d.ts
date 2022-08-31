export declare const customStylesTable: {
    table: {
        style: {
            fontWeight: string;
            boxShadow: string;
            maxHeight: string;
            height: string;
        };
    };
    headRow: {
        style: {
            fontWeight: string;
            borderRadius: string;
            background: string;
            paddingRight: string;
        };
    };
    head: {
        style: {
            height: string;
            minHeight: string;
        };
    };
    rows: {
        style: {
            minHeight: string;
        };
    };
    headCells: {
        style: {
            minHeight: string;
            paddingLeft: string;
            paddingRight: string;
            paddingBottom: string;
        };
    };
    cells: {
        style: {
            minHeight: string;
            paddingLeft: string;
            paddingRight: string;
        };
    };
};
export declare const columnsMock: ({
    name: string;
    selector: (row: {
        title: any;
    }) => any;
} | {
    name: string;
    selector: (row: {
        year: any;
    }) => any;
} | {
    name: string;
    selector: (row: {
        other: any;
    }) => any;
} | {
    name: string;
    selector: (row: {
        another: any;
    }) => any;
})[];
export declare const dataMock: {
    id: number;
    title: string;
    year: string;
    other: string;
    another: string;
    another2: string;
    another3: string;
    another4: string;
}[];
//# sourceMappingURL=mock.d.ts.map