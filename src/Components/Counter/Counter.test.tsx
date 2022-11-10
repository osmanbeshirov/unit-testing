import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './index';

describe('Counter tester', () => {

    let number: HTMLElement, increaseBtn: HTMLElement, decreaseBtn: HTMLElement;

    //beforeEach - her test kodundan evvel isleyecek olan section
    //beforeAll - butun test kodlarindan once bir defe isleyecek olan section
    
    //afterAll - butun test kodlari yoxlanilib bitenden sonra bir defe isleyecek olan section
    //afterEach - her testden sonra isleyecek olan section 

    beforeEach(() => {
        render(<Counter />);
        number = screen.getByText('0');
        increaseBtn = screen.getByText('Increase');
        decreaseBtn = screen.getByText('Decrease');

    })

    test('increase btn', () => {

        userEvent.click(increaseBtn);

        expect(number).toHaveTextContent('1')
    })


    test('decrease btn', () => {

        userEvent.click(decreaseBtn);

        expect(number).toHaveTextContent('-1')
    })

})

