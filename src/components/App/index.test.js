import React from 'react';
import {render, cleanup, waitForElement, act } from '@testing-library/react';
import mockRepository from '../../repositories/unsplash_repository';
import App from '.';

jest.mock('../../repositories/unsplash_repository');

afterEach(cleanup);

beforeEach(() => {
  mockRepository.mockClear();
});

describe('when the App component is not yet mounted', () => {
  it('renders the loading text', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('loading')).toHaveTextContent('Loading...');
  });
})

it('renders title', async () => {
  const { getByText } = render(<App />);

  const titleElement = await waitForElement(() => getByText(/Images from Unsplash/i));
  expect(titleElement).toBeInTheDocument();
});

it('renders a list of images', async () => {
  mockRepository.mockImplementationOnce(() => [
    {
      id: 1,
      alt_description: 'Photo of beach!',
      urls: {
        thumb: 'http://beach.jpg',
      },
    },
    {
      id: 2,
      alt_description: 'Photo of boat!',
      urls: {
        thumb: 'http://boat.jpg',
      },
    },
  ]);

  const { container } = await waitForElement(() => render(<App />));

  expect(container.querySelector('ul')).toBeInTheDocument();
  expect(mockRepository).toHaveBeenCalledTimes(1);
});
