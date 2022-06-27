import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { Message } from '../../../../components/atoms/Message';

let documentBody: RenderResult;

describe('<Message />', () => {
    
    test('test <Message />', () => {
        documentBody = render(<Message text=' Some message ' />);
        expect(documentBody.getByText('Some message')).toBeInTheDocument();
    });
});
