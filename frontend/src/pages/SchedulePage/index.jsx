import { useState } from 'react';
import ScheduleForm from './components/ScheduleForm';
import { scheduleContainer } from './index.module.scss';

const SchedulePage = () => {
  const [errorMessage, setErrorMessage] = useState('');
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
        <ScheduleForm onSubmissionError={setErrorMessage} />
        <h5 className="text-danger">{errorMessage}</h5>
      </div>
    </div>
  );
};

export default SchedulePage;
