import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';

const Router = () => (
  <BrowserRouter>
    <Navbar />

    <Switch>
      <Route path="/schedule">
        <div>schedule</div>
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
