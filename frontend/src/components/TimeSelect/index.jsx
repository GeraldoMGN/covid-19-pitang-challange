import { useMemo } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

// TODO: handle bad props
const TimeSelect = ({
  className, startHour, endHour, minutesBetween, name, placeholder,
}) => {
  const handleTimeValues = () => {
    const time = new Date(0);
    time.setHours(startHour);

    const values = [time];
    while (values[values.length - 1].getHours() < endHour) {
      const lastValue = values[values.length - 1];
      const value = new Date(lastValue);
      value.setMinutes(lastValue.getMinutes() + minutesBetween);
      values.push(value);
    }

    return values;
  };

  const times = useMemo(
    () => handleTimeValues(),
    [startHour, endHour, minutesBetween],
  );

  const formatTime = (date) => (
    `${date.getHours()}:${`0${date.getMinutes()}`.slice(-2)}`
  );

  const renderOptions = () => times.map((time) => (
    <option key={time} value={time}>{formatTime(time)}</option>));

  return (
    <Field name={name} as="select" className={`form-select ${className}`}>
      {placeholder && <option value="">{placeholder}</option>}
      {renderOptions()}
    </Field>
  );
};

TimeSelect.propTypes = {
  className: PropTypes.string,
  startHour: PropTypes.number,
  endHour: PropTypes.number,
  minutesBetween: PropTypes.number,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

TimeSelect.defaultProps = {
  className: '',
  startHour: 0,
  endHour: 23,
  minutesBetween: 60,
  placeholder: '',
};

export default TimeSelect;
