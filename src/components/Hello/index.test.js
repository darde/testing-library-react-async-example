import React from 'react';
import {render, cleanup, waitForElement, act } from '@testing-library/react';
import mockAxios from 'axios';
import Hello from '.';

afterEach(cleanup);

it('renders hello correctly', async () => {
  mockAxios.get.mockResolvedValue({
    data: [
        { id: 1, title: 'post one' },
        { id: 2, title: 'post two' },
      ],
  });

  const { asFragment } = await waitForElement(() => render(<Hello />));
  
  expect(asFragment()).toMatchSnapshot();
});