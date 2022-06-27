import React from 'react';
import { render, RenderResult, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { MovieItem } from '../../../../components/molecules/MovieItem';

const mockData = {
    "id": "movie-1",
    "title": "Et quis quis",
    "director": "Jody Keebler",
    "description": "Quaerat occaecati et dolorem velit adipisci quo consequatur. Ullam quos saepe ratione non. Velit quaerat voluptatem rem est et dolore. Aut voluptatibus facere quo qui voluptas ipsa adipisci blanditiis quis.",
    "year": 2021,
    "coverImage": "http://placeimg.com/640/480/business"
};

//jest.mock('http://locahost:8080', () => {})

let documentBody: RenderResult;

describe('<MovieItem />', () => {
    
    test('test <MovieItem />', () => {
        documentBody = render(<MovieItem 
            imageSource={mockData.coverImage}
            textDescription={mockData.description}
            textTitle={mockData.title} />
        );
        
        expect(documentBody.getByText(mockData.title)).toBeInTheDocument();
        expect(documentBody.getByText(mockData.description)).toBeInTheDocument();
    });
});