import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkCard = ({ Icon, text, linkTo }) => (
  <div className="card mb-2">
    <div className="card-body">
      <Icon size={100} className="w-100 text-secondary" />
      <h5 className="card-title text-center">
        <Link
          className="text-decoration-none text-secondary stretched-link"
          to={linkTo}
        >
          {text}
        </Link>
      </h5>
    </div>
  </div>
);

LinkCard.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default LinkCard;
