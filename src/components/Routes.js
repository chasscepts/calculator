import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/quote-of-the-day" component={Quote} />
      </Switch>
    </BrowserRouter>
  );
}
