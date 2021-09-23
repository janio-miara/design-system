import React from 'react';
import Highlighter from 'react-highlight-words';
import * as Style from './styles';
export const Highlight = ({ text, searchWords, color, size, fontWeight }) => {
    return (React.createElement(Style.Container, { color: color, size: size, fontWeight: fontWeight },
        React.createElement(Highlighter, { highlightClassName: "highlight", searchWords: searchWords, autoEscape: true, textToHighlight: text })));
};
//# sourceMappingURL=index.js.map