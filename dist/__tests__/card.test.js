import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '../components';
describe('Component', () => {
    test('janio', () => {
        render(React.createElement(Card, null,
            React.createElement("div", null, "Janio")));
        const a = 1;
        expect(a).toEqual(1);
    });
});
//# sourceMappingURL=card.test.js.map