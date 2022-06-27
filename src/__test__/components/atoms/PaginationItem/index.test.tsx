import React from 'react';
import { render, RenderResult, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { PaginationItem } from '../../../../components/atoms/PaginationItem';

let documentBody: RenderResult;

describe('<PaginationItem />', () => {
    
    test('test <PaginationItem />', () => {
        documentBody = render(<PaginationItem text='21' />);
        
        expect(documentBody.getByText('21')).toBeInTheDocument();
    });
    
    test('test <PaginationItem /> with role type button', () => {
        documentBody = render(<PaginationItem text='12' />);
        
        expect(documentBody.getByRole('button')).toBeInTheDocument();
    });
});
