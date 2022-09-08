import React from 'react';
import Lottie from 'react-lottie';
import { Text } from '../Text';
import * as Style from './styles';
import notData from './animations/notData.json';
import notPage from './animations/notPage.json';
const SelectAnimation = (animation) => {
    if (animation === 'notData') {
        return notData;
    }
    return notPage;
};
const Empty = ({ title = 'Pagina não encontrada', subTitle, alertType = 'notData', height = 250, width = 200, asLink = '#', linkText = '', }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: SelectAnimation(alertType),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (React.createElement(Style.Container, null,
        React.createElement(Style.ContainerEmpty, null,
            React.createElement(Lottie, { options: defaultOptions, height: height, width: width }),
            React.createElement(Text, { size: "p2", color: "default", bold: true, element: "p" }, title),
            React.createElement(Text, { size: "p2", color: "default", element: "p" },
                !!subTitle && subTitle,
                !!linkText && (React.createElement("a", { href: asLink, target: "_blank", rel: "noreferrer" }, linkText))))));
};
export default Empty;
//# sourceMappingURL=index.js.map