import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { HomePage, SchedulePage } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Navbar />

    <Switch>
      <Route path="/schedule">
        <SchedulePage />
      </Route>
      <Route path="/listing">
        <div>listing</div>
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
