import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';

import ScheduleForm from './ScheduleForm';

it('Name input should show validation on blur', async () => {
  const onSubmit = jest.fn();
  render(<ScheduleForm onSubmit={onSubmit} />);

  const input = screen.getByLabelText('Nome completo');
  fireEvent.blur(input);

  await waitFor(() => {
    expect(screen.getByTestId('nameError'))
      .toHaveTextContent('Insira o nome do paciente');
  });
});

it('Time select should show validation on blur', async () => {
  const onSubmit = jest.fn();
  render(<ScheduleForm onSubmit={onSubmit} />);

  const input = screen.getByRole('combobox');
  fireEvent.blur(input);

  await waitFor(() => {
    expect(screen.getByTestId('vaccinationTimeError'))
      .toHaveTextContent('Insira o horário de vacinação');
  });
});
