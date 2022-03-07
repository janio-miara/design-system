import * as React from 'react';
import styled from 'styled-components';
import { Tabs } from '../components';
export default {
    title: 'Tabs',
    component: Tabs,
};
const Wrapper = styled.div `
  width: 500px;
  height: 500px;
  background: rgb(239, 239, 239);
  padding: 50px;
`;
const tabs = ['Pagina1', 'Pagina2', 'Pagina3'];
export const DefaultTabs = () => (React.createElement(Wrapper, null,
    React.createElement(Tabs, { tabs: tabs, onChange: tab => alert(tab), size: "p2" })));
export const CustomTabColor = () => (React.createElement(Wrapper, null,
    React.createElement(Tabs, { tabs: tabs, onChange: tab => alert(tab), size: "p2", colorActive: "error", colorDefault: "success" })));
//# sourceMappingURL=Tabs.stories.js.map