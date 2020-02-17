import React from 'react';
import { useDeviceType } from 'helper/useDeviceType';
import getAllUrlParams from 'helper/getAllUrlParams-mercy';
// Language translation files

// External CSS import here

import '@redq/reuse-modal/lib/index.css';
import { withRouter } from 'react-router-dom';
import { Query, KeystoneProvider } from '@keystonejs/apollo-helpers';
import { ApolloProvider } from 'react-apollo';
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/admin/api' }),
  cache: new InMemoryCache(),
});
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default withRouter(({ children, location }) => {
  const siteId = location.pathname.split('/')[location.pathname.split('/').length - 1];
  console.log(siteId);

  const site = {
    pages: [
      {
        title: 'page1 title',
        description: 'page1 description',
        sections: [
          {
            title: 'agency feature title',
            description: 'agency feature descc',
            template: 'agency',
            type: 'features',
            blocksName: 'self', // self means the type it self is an array of blocks
            blocks: [
              {
                id: 1,
                icon: 'flaticon-flask',
                title: 'Search Optimization',
                description: 'By using Search Engine Optimization, You will get more Clients',
              },
              {
                id: 2,
                icon: 'flaticon-pencil-case',
                title: 'Ui/UX Design',
                description:
                  'We provide the best UI/UX Design by following the latest trends of the market .',
              },
              {
                id: 3,
                icon: 'flaticon-ruler',
                title: 'Wireframing Task',
                description:
                  'We respect our customer opinions and deals with them with perfect wireframing ',
              },
            ],
          },
          {
            title: 'section1 title',
            description: 'section1 description',
            template: 'agency',
            type: 'features',
            blocksName: 'self', // self means the type it self is an array of blocks
            blocks: [
              {
                id: 1,
                icon: 'flaticon-flask',
                title: 'Search Optimization',
                description: 'By using Search Engine Optimization, You will get more Clients',
              },
              {
                id: 2,
                icon: 'flaticon-pencil-case',
                title: 'Ui/UX Design',
                description:
                  'We provide the best UI/UX Design by following the latest trends of the market .',
              },
              {
                id: 3,
                icon: 'flaticon-ruler',
                title: 'Wireframing Task',
                description:
                  'We respect our customer opinions and deals with them with perfect wireframing ',
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <ApolloProvider client={client}>
      <KeystoneProvider>{children}</KeystoneProvider>
    </ApolloProvider>
  );
});
