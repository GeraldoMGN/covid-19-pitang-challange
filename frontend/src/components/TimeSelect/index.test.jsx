import { screen, render } from '@testing-library/react';
import { Formik } from 'formik';
import TimeSelect from './index';

test('Initialize one option correctly', () => {
  render(
    <TimeSelect name="select" startHour={10} endHour={10} />, { wrapper: Formik },
  );

  expect(screen.getByText('10:00')).toBeInTheDocument();

  const timeOptions = screen.queryAllByRole('option');
  expect(timeOptions).toHaveLength(1);
});

test('Initialize multiple options correctly', () => {
  render(
    <TimeSelect name="select" startHour={10} endHour={11} minutesBetween={15} />, { wrapper: Formik },
  );

  expect(screen.getByText('10:00')).toBeInTheDocument();
  expect(screen.getByText('11:00')).toBeInTheDocument();

  const timeOptions = screen.queryAllByRole('option');
  expect(timeOptions).toHaveLength(5);
});
