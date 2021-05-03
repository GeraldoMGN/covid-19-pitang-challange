import { MdEventAvailable, MdViewList } from 'react-icons/md';
import LinkCard from './components/LinkCard';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-md col-lg-6">
        <LinkCard text="Agende sua vacinação" linkTo="/schedule" Icon={MdEventAvailable} />
      </div>
      <div className="col-md col-lg-6">
        <LinkCard text="Consulte os agendamentos" linkTo="/listing" Icon={MdViewList} />
      </div>
    </div>
  </div>
);

export default Home;
