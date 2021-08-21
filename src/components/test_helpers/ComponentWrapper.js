import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ComponentWrapper(props) {
  const { component } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={component} />
      </Switch>
    </BrowserRouter>
  );
}

ComponentWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any.isRequired,
};
