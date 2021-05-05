import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addSchedule } from '../../services/requests/scheduling';

import ScheduleForm from './components/ScheduleForm';
import { scheduleContainer } from './index.module.scss';

const SchedulePage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const onSubmit = async ({
    name, dateOfBirth, vaccinationTime, vaccinationDate,
  }) => {
    const date = new Date(vaccinationDate);
    const time = new Date(vaccinationTime);
    date.setHours(time.getHours(), time.getMinutes());

    const response = await addSchedule(date, name, dateOfBirth);

    if (response === 'Vacinação agendada!') {
      history.push('/listing');
    } else {
      setErrorMessage(response);
    }
  };

  return (
    <div className="container mt-5">
      <div className={scheduleContainer}>
        <h3>Agende a vacinação</h3>
        <p>
          É necessário informar o nome, data de nascimento, além do dia e
          horário para o agendamento do paciente.
        </p>
        <p className="text-secondary">
          Idosos acima de 65 anos terão preferência.
        </p>
      </div>
      <div className={scheduleContainer}>
        <ScheduleForm
          onSubmit={onSubmit}
        />
        <h5 className="text-danger">{errorMessage}</h5>
      </div>
    </div>
  );
};

export default SchedulePage;
