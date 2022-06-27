import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { MovieDescription } from '../../../../components/atoms/MovieDescription';

let documentBody: RenderResult;

describe('<MovieDescription />', () => {

    test('test <MovieDescription />', () => {
        documentBody = render(<MovieDescription text='Movie description example...' />);
        
        expect(documentBody.getByText('Movie description example...')).toBeInTheDocument();
    });
});
