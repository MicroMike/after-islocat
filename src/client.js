import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import routes from './routes';
import store from '../client/store'
import IntlWrapper from './App/components/Intl/IntlWrapper'

import './App/client.css';

ensureReady(routes).then(data =>
  hydrate(
    <Provider store={store} >
      <IntlWrapper>
        <BrowserRouter>
          <After data={data} routes={routes} />
        </BrowserRouter>
      </IntlWrapper>
    </Provider>,
    document.getElementById('root')
  )
);

if (module.hot) {
  module.hot.accept();
}
