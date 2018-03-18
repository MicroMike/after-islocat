import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

// import IntlWrapper from './components/Intl/IntlWrapper'

export default [
  // path: '/',
  // component: IntlWrapper,
  // routes: [
  {
    path: '/*',
    exact: true,
    component: asyncComponent({
      loader: () => import('./Home/Home'), // required
      Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
    }),
  },
  // {
  //   path: '/home',
  //   exact: true,
  //   component: asyncComponent({
  //     loader: () => import('./Home/Home'), // required
  //     Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
  //   }),
  // },
  // {
  //   path: '/about',
  //   exact: true,
  //   component: asyncComponent({
  //     loader: () => import('./About/About'), // required
  //     Placeholder: () => <div>...LOADING...</div>, // this is optional, just returns null by default
  //   }),
  // }
  // ]
];
