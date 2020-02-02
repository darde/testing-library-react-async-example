import React from 'react';
import {render, cleanup, waitForElement, act } from '@testing-library/react';
import mockAxios from 'axios';
import Hello from '.';

it('show loading message', () => {
  mockAxios.get.mockImplementationOnce(() => new Promise());
  const { getByText } = render(<Hello />);

  expect(getByText(/Loading/i)).toBeInTheDocument();
});

xit('renders hello correctly', async () => {
  mockAxios.get.mockResolvedValue({
    data: [
        { id: 1, title: 'image one' },
        { id: 2, title: 'image two' },
      ],
  });

  const { asFragment } = await waitForElement(() => render(<Hello />));
  
  expect(asFragment()).toMatchSnapshot();
});