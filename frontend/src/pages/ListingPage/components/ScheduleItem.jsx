import PropTypes from 'prop-types';
import { scheduleItemContainer, patientName } from './ScheduleItem.module.scss';
import SituationSelect from './ScheduleSituationSelect';

const ScheduleItem = ({ data }) => {
  const formattedDate = (new Date(data[0].vaccinationDate)).toLocaleString('pt-BR');

  return (
    <div className={`row ${scheduleItemContainer}`}>
      <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
        <p className="fw-bold">{formattedDate}</p>
      </div>
      <div className="col-6 col-md-5">
        <p className={patientName}>{data[0].name}</p>
        {data[1] && <p className={patientName}>{data[1].name}</p>}
      </div>
      <div className="col-6 col-md-4">
        <SituationSelect data={data[0]} />
        {data[1] && <SituationSelect data={data[1]} />}
      </div>
    </div>
  );
};

ScheduleItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    vaccinationDate: PropTypes.string,
    name: PropTypes.string,
    situation: PropTypes.string,
  })).isRequired,
};

export default ScheduleItem;
