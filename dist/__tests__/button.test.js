import React from 'react';
import { render, screen } from '@testing-library/react';
import { RiUserFill } from 'react-icons/ri';
import { Button } from '../components';
import { theme } from '../components/Themes';
const titleButton = 'Container';
describe('Testing button', () => {
    test('testing the props of button contanded children', () => {
        render(React.createElement(Button, { color: "primary", "data-test-id": "button" }, titleButton));
        const element = screen.getByTestId('button');
        expect(element.textContent).toBe(titleButton);
    });
    test('testing the props of button contanded and colors props', () => {
        render(React.createElement(Button, { color: "primary", "data-test-id": "button" }, titleButton));
        const element = screen.getByTestId('button');
        expect(element).toHaveStyle({ background: theme.colors.blue40, color: theme.colors.white });
    });
    test('testing the props of button outlined and colors props', () => {
        render(React.createElement(Button, { color: "primary", outlined: true, "data-test-id": "button" }, titleButton));
        const element = screen.getByTestId('button');
        expect(element).toHaveStyle({
            color: theme.colors.blue40,
            background: theme.colors.blue10,
            borderColor: theme.colors.blue40,
        });
    });
    test('testing the props of button contanded and size small props', () => {
        render(React.createElement(Button, { color: "primary", size: "small", "data-test-id": "button" }, titleButton));
        const element = screen.getByTestId('button');
        expect(element).toHaveStyle({ fontSize: '12px' });
    });
    test('testing the props of button contanded and size small props', () => {
        render(React.createElement(Button, { color: "primary", size: "medium", "data-test-id": "button" }, titleButton));
        const element = screen.getByTestId('button');
        expect(element).toHaveStyle({ fontSize: '14px' });
    });
    test('testing the props of button disabled true', () => {
        render(React.createElement(Button, { color: "primary", disabled: true, "data-test-id": "button" }, titleButton));
        const element = screen.getByTestId('button');
        expect(element.textContent).toBe(titleButton);
    });
    test('testing the props of button contanded and  icon props', () => {
        render(React.createElement(Button, { color: "primary", size: "small", "data-test-id": "button", icon: React.createElement(RiUserFill, null) }, titleButton));
        const element = screen.getByTestId('button');
        const elementSVG = element.querySelector('.icon-button');
        expect(elementSVG).toBeInTheDocument();
        expect(elementSVG.lastChild.nodeName).toBe('svg');
    });
    test('testing the props of button contanded and  loading props', () => {
        render(React.createElement(Button, { color: "primary", loading: true, "data-test-id": "button", icon: React.createElement(RiUserFill, null) }, titleButton));
        const element = screen.getByTestId('button');
        const elementSVG = element.querySelector('.spinner');
        expect(elementSVG).toBeInTheDocument();
        expect(elementSVG.lastChild.nodeName).toBe('svg');
    });
});
//# sourceMappingURL=button.test.js.map