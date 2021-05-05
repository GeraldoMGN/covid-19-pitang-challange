import { MdEventAvailable, MdViewList } from 'react-icons/md';
import LinkCard from './components/LinkCard';
import vaccinationImage from '../../assets/vaccination.jpg';
import { featureImage } from './index.module.scss';

const HomePage = () => (
  <div className="container">
    <div className="row mt-5 mb-5">
      <img
        src={vaccinationImage}
        className={featureImage}
        alt="vaccination"
      />
    </div>
    <div className="row mb-5">
      <div className="col-md col-lg-6">
        <LinkCard
          text="Agende a vacinação"
          linkTo="/schedule"
          Icon={MdEventAvailable}
        />
      </div>
      <div className="col-md col-lg-6">
        <LinkCard
          text="Consulte os agendamentos"
          linkTo="/listing"
          Icon={MdViewList}
        />
      </div>
    </div>
  </div>
);

export default HomePage;
