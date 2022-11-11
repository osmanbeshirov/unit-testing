import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './index';

describe(('todo tests'), () => {
    let button: HTMLElement, input: HTMLElement;

    beforeEach(() => {
        render(<Todo />)

        button = screen.getByText('Add todo');
        input = screen.getByLabelText('Text')
    })

    test('Have not been rendered 3 objects which pass default', () => {
        const items = screen.getAllByText(/Item/i)

        expect(items.length).toEqual(3)
    })

    test('Input and Button are must be within component', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })

    test('The text should be added to the list when will be the button click', () => {
        const name = 'Mehmet';
        userEvent.type(input, name);

        userEvent.click(button);
        expect(screen.getByText(name)).toBeInTheDocument()
    })
})

