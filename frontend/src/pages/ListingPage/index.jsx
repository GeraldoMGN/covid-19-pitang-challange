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
      <div className="row text-center mt-5 mb-3 d-none d-md-flex">
        <div className="col-3">
          <h5>Data</h5>
        </div>
        <div className="col-5">
          <h5>Nome</h5>
        </div>
        <div className="col-4">
          <h5>Situação</h5>
        </div>
      </div>
      <ScheduleTable data={schedules} />
    </div>
  );
};

export default ListingPage;
