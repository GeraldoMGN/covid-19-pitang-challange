import { useState } from 'react';
import ScheduleForm from './components/ScheduleForm';
import { scheduleContainer } from './index.module.scss';

const SchedulePage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <div className="container mt-5">
      <div className={scheduleContainer}>
        <h3>Agende sua vacinação</h3>
        <p>
          É necessário informar seu nome, data de nascimento, além do dia e
          horário para o agendamento.
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
