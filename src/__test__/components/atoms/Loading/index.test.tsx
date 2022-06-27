import React from 'react';
import { render, RenderResult, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { Loading } from '../../../../components/atoms/Loading';

let documentBody: RenderResult;

describe('<Loading />', () => {
    
    test('test <Loading />', () => {
        documentBody = render(<Loading />);
        expect(documentBody.getByText('...loading')).toBeInTheDocument();
    });
});
