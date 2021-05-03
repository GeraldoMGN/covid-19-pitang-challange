import { Fragment } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const ScheduleTimePicker = ({ className }) => {
  const renderVaccinationTime = () => Array.from(Array(10), (_, i) => {
    const hour = new Date();
    hour.setHours(i + 8, 0, 0);
    const hourHalfPast = new Date();
    hourHalfPast.setHours(i + 8, 30, 0);

    const formatHour = (date) => (`${date.getHours()}:${`0${date.getMinutes()}`.slice(-2)}`);

    return (
      <Fragment key={hour}>
        <option value={hour}>{formatHour(hour)}</option>
        <option value={hourHalfPast}>{formatHour(hourHalfPast)}</option>
      </Fragment>
    );
  });

  return (
    <Field name="vaccinationTime" as="select" className={`form-select ${className}`}>
      <option value="">Selecione o horário</option>
      {renderVaccinationTime()}
    </Field>
  );
};

ScheduleTimePicker.propTypes = {
  className: PropTypes.string,
};

ScheduleTimePicker.defaultProps = {
  className: '',
};

export default ScheduleTimePicker;
