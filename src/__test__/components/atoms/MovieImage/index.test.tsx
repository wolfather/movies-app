import React from 'react';
import { render, RenderResult, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { MovieImage } from '../../../../components/atoms/MovieImage';

let documentBody: RenderResult;
const imageSrc = 'http://placeimg.com/640/480/business';

describe('<MovieImage />', () => {
    
    test('test <MovieImage />', () => {
        documentBody = render(<MovieImage src={imageSrc} />);
        
        expect(documentBody.getByRole('img')).toBeInTheDocument();
    });
    
    test('test <MovieImage /> alt text', () => {
        documentBody = render(<MovieImage src={imageSrc} altText="some alternative text to image" />);
        
        expect(documentBody.getByAltText('some alternative text to image')).toBeInTheDocument();
    });
});
