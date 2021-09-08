import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Container, ContainerLink, WrapperLink } from './styles';
const Modulo = ({ side, open, active, setActive }) => {
    const { icon, childrenLink, link, subLink, title } = side;
    const [newOpen, setNewOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(false);
    const [activePaiLink, setActivePaiLink] = useState(false);
    useEffect(() => {
        setActivePaiLink(childrenLink === null || childrenLink === void 0 ? void 0 : childrenLink.includes(active));
    }, [active]);
    useEffect(() => {
        if (open) {
            setTimeout(() => {
                setNewOpen(() => open);
            }, 250);
        }
        else {
            setNewOpen(() => open);
        }
    }, [open]);
    const handleActiveSubLink = (event) => {
        event.stopPropagation();
        setActiveLink(!activeLink);
    };
    const handleActive = (event, propslink) => {
        event.stopPropagation();
        setActive(propslink || link);
    };
    return (React.createElement(React.Fragment, null, !subLink ? (React.createElement(Container, { open: open, active: !subLink && active === link, onClick: (event) => handleActive(event) },
        React.createElement("div", { className: "wrapper" },
            React.createElement(FontAwesomeIcon, { icon: icon, size: "lg" }),
            newOpen && (React.createElement("span", { className: "title" },
                React.createElement("b", null, title)))))) : (React.createElement(ContainerLink, { open: open, activeLink: activeLink, onClick: (event) => handleActiveSubLink(event), activePaiLink: activePaiLink },
        React.createElement("div", { className: "wrapperTitle" },
            React.createElement("span", null,
                React.createElement(FontAwesomeIcon, { icon: icon, size: "lg" }),
                newOpen && (React.createElement("span", { className: "title" },
                    React.createElement("b", null, title)))),
            newOpen && (React.createElement("div", null,
                React.createElement(FontAwesomeIcon, { icon: faAngleDown, size: "sm", rotation: activeLink ? 180 : undefined })))),
        activeLink &&
            subLink.map((link) => (React.createElement(WrapperLink, { open: open, active: link.link === active, onClick: (event) => handleActive(event, link.link) },
                React.createElement("div", { className: "wrapper" },
                    React.createElement(FontAwesomeIcon, { icon: link.icon, size: "lg" }),
                    newOpen && React.createElement("span", { className: "titleLink" }, link.title)))))))));
};
export default Modulo;
//# sourceMappingURL=index.js.map