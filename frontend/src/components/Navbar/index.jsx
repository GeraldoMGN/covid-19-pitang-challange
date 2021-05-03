import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const handleActiveClass = (path) => (pathname === path
    ? 'active'
    : '');

  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">COVID-19</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className={`nav-link ${handleActiveClass('/schedule')}`}
              to="/schedule"
            >
              Agendar
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${handleActiveClass('/listing')}`}
              to="/listing"
            >
              Consultar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
