import React from 'react';
import { RiUserFill } from 'react-icons/all';
import { TextLink } from '../components';
export default {
    title: 'Example/TextLink',
    component: TextLink,
};
const TextLinkContent = args => {
    return React.createElement(TextLink, Object.assign({}, args));
};
export const TextLinks = TextLinkContent.bind({});
TextLinks.args = {
    icon: React.createElement(RiUserFill, null),
    children: 'Texto Link',
    href: 'www.globo.com.br',
    target: '_blank',
};
//# sourceMappingURL=TextLink.stories.js.map