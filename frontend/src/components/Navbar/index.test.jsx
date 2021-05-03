import { screen, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Navbar from './index';

let history = null;
beforeEach(() => {
  history = createMemoryHistory();
  render(
    <Router history={history}>
      <Navbar />
    </Router>,
  );
});

test('redirects to Home page', () => {
  const linkElement = screen.getByText('COVID-19');

  act(() => {
    linkElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(history.location.pathname).toBe('/');
});

test('redirects to schedule page', () => {
  const linkElement = screen.getByText('Agendar');

  act(() => {
    linkElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(history.location.pathname).toBe('/schedule');
});

test('redirects to listing page', () => {
  const linkElement = screen.getByText('Consultar');

  act(() => {
    linkElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(history.location.pathname).toBe('/listing');
});
