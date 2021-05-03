import ScheduleForm from './components/ScheduleForm';
import { scheduleContainer } from './index.module.scss';

const SchedulePage = () => (
  <div className="container mt-5">
    <div className={scheduleContainer}>
      <h3>Agende sua vacinação</h3>
      <p>
        É necessário informar seu nome, data de nascimento, além do dia e
        horário para o agendamento.
      </p>
    </div>
    <div className={scheduleContainer}>
      <ScheduleForm />
    </div>
  </div>
);

export default SchedulePage;
