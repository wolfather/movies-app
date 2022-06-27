import React from 'react';
import { render, RenderResult, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { MovieTitle } from '../../../../components/atoms/MovieTitle';

let documentBody: RenderResult;

describe('<MovieTitle />', () => {
    
    test('test <MovieTitle />', () => {
        documentBody = render(<MovieTitle text='Title Movie' />);
        
        expect(documentBody.getByText('Title Movie')).toBeInTheDocument();
    });
    
    test('test <MovieTitle /> with some attribute', () => {
        documentBody = render(<MovieTitle text='Title Movie' role='heading' />);
        
        expect(documentBody.getByRole('heading')).toBeInTheDocument();
    });
});
