import React from 'react';
// import Button from '../shop/components/Button/Button';
import Help from './pages/help';
import OrderReceived from './pages/order-recived';
import Bags from './pages/bags';
import Profile from './pages/profile';
import Sites from './pages/sites';
import Site from './pages/site';

import App from './app';
export default {
  pages: () => [
    {
      label: 'Help',
      path: '',
      component: () => {
        return (
          <App>
            <Help />
          </App>
        );
      },
    },
    {
      label: 'Profile',
      path: 'profile',
      component: () => {
        return (
          <App>
            <Profile />
          </App>
        );
      },
    },
    {
      label: 'Sites',
      path: 'sites',
      component: () => {
        return (
          <App>
            <Sites />
          </App>
        );
      },
    },
    {
      label: 'Site',
      path: 'sites/:site_id',
      component: () => {
        return (
          <App>
            <Site />
          </App>
        );
      },
    },
    {
      label: 'Order Received',
      path: 'order-recived',
      component: () => {
        return (
          <App>
            <OrderReceived />
          </App>
        );
      },
    },
    {
      label: 'Bags',
      path: 'bags',
      component: () => {
        return (
          <App>
            <Bags />
          </App>
        );
      },
    },
  ],
};
