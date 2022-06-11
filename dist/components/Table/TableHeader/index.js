import React, { useState } from 'react';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RowHeaders } from './styles';
function CellHeader({ children, align, width, action }) {
    const [ordenBy, setOrdenBy] = useState(false);
    const toogleOrdenBy = () => {
        action();
        setOrdenBy(!ordenBy);
    };
    return (React.createElement(RowHeaders, { align: align, width: width, action: action, onClick: () => action && toogleOrdenBy() },
        React.createElement("div", null,
            children,
            action && !ordenBy && React.createElement(FontAwesomeIcon, { icon: faCaretDown }),
            action && ordenBy && React.createElement(FontAwesomeIcon, { icon: faCaretUp }))));
}
export default CellHeader;
//# sourceMappingURL=index.js.map