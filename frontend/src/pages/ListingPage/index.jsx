import { useEffect, useState } from 'react';
import { getAllSchedules } from '../../services/requests/scheduling';
import ScheduleTable from './components/SchedulesTable';

const ListingPage = () => {
  const [schedules, setSchedules] = useState();
  useEffect(async () => setSchedules(await getAllSchedules()), []);

  return (
    <div className="container mt-5">
      <div>
        <h3>Consulte as vacinações agendadas</h3>
        <p>
          Consulte as vacinações já agendadas e altere a sua situação.
        </p>
      </div>
      <div className="row text-center my-5">
        <div className="col-3">
          <h5>Data</h5>
        </div>
        <div className="col-5">
          <h5>Nome</h5>
        </div>
        <div className="col-2">
          <h5>Atendido</h5>
        </div>
        <div className="col-2">
          <h5>Vacinado</h5>
        </div>
      </div>
      <ScheduleTable data={schedules} />
    </div>
  );
};

export default ListingPage;
