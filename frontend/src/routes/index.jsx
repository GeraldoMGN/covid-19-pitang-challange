import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { HomePage, SchedulePage, ListingPage } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Navbar />

    <Switch>
      <Route path="/schedule">
        <SchedulePage />
      </Route>
      <Route path="/listing">
        <ListingPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
