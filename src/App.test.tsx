import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import {BrowserRouter} from "react-router-dom";

test('renders learn react link', () => {
  const { getByText } = render(
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  );
// не знаю зачем, но починил тест :)
  expect(getByText(/ToDo List/i)).toBeInTheDocument();
});
