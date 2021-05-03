import { screen, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import HomePage from './index';

let history = null;
beforeEach(() => {
  history = createMemoryHistory();
  render(
    <Router history={history}>
      <HomePage />
    </Router>,
  );
});

test('redirects to schedule page', () => {
  const linkElement = screen.getByText('Agende sua vacinação');

  act(() => {
    linkElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(history.location.pathname).toBe('/schedule');
});

test('redirects to listing page', () => {
  const linkElement = screen.getByText('Consulte os agendamentos');

  act(() => {
    linkElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(history.location.pathname).toBe('/listing');
});
