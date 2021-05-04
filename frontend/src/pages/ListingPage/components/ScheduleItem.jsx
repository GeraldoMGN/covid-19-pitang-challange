import PropTypes from 'prop-types';

const ScheduleItem = ({ data }) => {
  const formattedDate = (new Date(data[0].vaccinationDate)).toLocaleString('pt-BR');

  return (
    <div className="row">
      <div className="col-3 d-flex align-items-center">
        <p>{formattedDate}</p>
      </div>
      <div className="col-5">
        <p>{data[0].name}</p>
        {data[1] && <p>{data[1].name}</p>}
      </div>
      <div className="col-2">
        <p>{data[0].attended}</p>
        {data[1] && <p>{data[1].attended}</p>}
      </div>
      <div className="col-2">
        <p>{data[0].vaccinated}</p>
        {data[1] && <p>{data[1].vaccinated}</p>}
      </div>
    </div>
  );
};

ScheduleItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    vaccinationDate: PropTypes.string,
    name: PropTypes.string,
    attended: PropTypes.bool,
    vaccinated: PropTypes.bool,
  })).isRequired,
};

export default ScheduleItem;
