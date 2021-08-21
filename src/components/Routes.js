import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './Calculator';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Calculator} />
      </Switch>
    </BrowserRouter>
  );
}
