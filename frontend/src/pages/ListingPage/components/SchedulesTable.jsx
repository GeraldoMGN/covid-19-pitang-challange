import PropTypes from 'prop-types';
import ScheduleItem from './ScheduleItem';

const ScheduleTable = ({ data }) => {
  const groupBy = (items, key) => items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [
        ...(result[item[key]] || []),
        item,
      ],
    }),
    {},
  );

  const groupedData = Object.values(groupBy(data, 'vaccinationDate'));

  return (
    <div>
      {groupedData && groupedData.map((item) => (
        <ScheduleItem data={item} />
      ))}
    </div>
  );
};

ScheduleTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    vaccinationDate: PropTypes.string,
    name: PropTypes.string,
  })),
};

ScheduleTable.defaultProps = {
  data: [],
};

export default ScheduleTable;
