import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './index';

test('increase btn', () => {
    render(<Counter />);
})