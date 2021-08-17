import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Store from './components/Store';
import Nav from './components/Nav';

function Routes() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/store" component={Store} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
