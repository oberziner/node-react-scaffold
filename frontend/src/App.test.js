import { render, fireEvent, waitForElement } from '@testing-library/react'
import React from 'react'
import App from './App.js'
import client from './rest-client.js';
import '@testing-library/jest-dom/extend-expect'

  debugger;
jest.mock('./rest-client.js');

test('Should add backend value to welcome message', (done) => {

  client.getHelloMessage.mockResolvedValue({message: 'Mocked value'})

  const { getByText, getByRole } = render(<App/>)

  waitForElement(() => getByText('Welcome to React', { exact: false  }))
    .then( () => {
      expect(getByRole('heading')).toHaveTextContent("Welcome to React - Mocked value")
      done()
    })
})
