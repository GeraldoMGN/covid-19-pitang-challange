import { useState } from 'react';
import PropTypes from 'prop-types';

import { updateScheduleSituation } from '../../../services/requests/scheduling';

const SituationSelect = ({ data }) => {
  const [selected, setSelected] = useState(data.situation);
  const [updateSuccessful, setUpdateSuccessful] = useState();

  const onChange = async (event) => {
    const newValue = event.target.value;
    setSelected(newValue);

    const response = await updateScheduleSituation(data.id, newValue);
    setUpdateSuccessful(response === 'Situação atualizada.');
  };

  const validationClassName = () => {
    switch (updateSuccessful) {
      case (true): return 'is-valid';
      case (false): return 'is-invalid';
      default: return '';
    }
  };

  return (
    <select className={`form-select mb-3 ${validationClassName()}`} onChange={onChange} value={selected}>
      <option value="scheduled">Agendado</option>
      <option value="vaccinated">Atendido e Vacinado</option>
      <option value="not_vaccinated">Atendido e não vacinado</option>
    </select>
  );
};

SituationSelect.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    vaccinationDate: PropTypes.string,
    name: PropTypes.string,
    situation: PropTypes.string,
  }).isRequired,
};

export default SituationSelect;
