import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from '../components/App';
import mock from '../components/mock';

export default (
  <Route name='app' path='/' handler={mock}>
    <DefaultRoute handler={App} />
    <NotFoundRoute handler={App} />
  </Route>
)
