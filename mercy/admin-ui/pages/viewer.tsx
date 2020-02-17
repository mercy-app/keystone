import React, { useEffect } from 'react';
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
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { ThemeProvider } from 'styled-components';
import { ResetCSS } from 'common/src/assets/css/style';
import { theme } from 'common/src/theme/appModern';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from 'landing/containers/AppModern/appModern.style';
import AppSlider from 'landing/containers/AppModern/AppSlider/index-mercy';

const GET_SITE = gql`
  query getSite($id: ID!) {
    Site(where: { id: $id }) {
      id
      title
      description
      pages {
        id
        title
        description
        sections {
          id
          lists {
            name
            blocks {
              id
              title
              label
              path
              offset
              image
              color
              icon
              description
              thumb_url
              link
              suggested
              price
              features
              trail
              trailLink
              img
              text
              avatar
              name
              designation
              review
              childrenList {
                name
                blocks {
                  id
                  title
                  label
                  path
                  offset
                  image
                  color
                  icon
                  description
                  thumb_url
                  link
                  suggested
                  price
                  features
                  trail
                  trailLink
                  img
                  text
                  avatar
                  name
                  designation
                  review
                }
              }
              description
            }
          }
          template
          type
          oid
          name
          logo
          slogan
          title
          description
          image
        }
      }
    }
    # hasMore
  }
`;

export default withRouter(({ location }) => {
  const siteId = location.pathname.split('/')[location.pathname.split('/').length - 1];
  console.log(siteId);

  const { data, error, loading, refetch } = useQuery(GET_SITE, {
    variables: {
      id: siteId,
    },
  });

  return (
    <ApolloProvider client={client}>
      <KeystoneProvider>{data && data.Site && <Site site={data.Site} />}</KeystoneProvider>
    </ApolloProvider>
  );
});

const Site = ({ site }) => {
  const page1 = site.pages[0];
  const renderSection = section => {
    if (section.type === 'appSlider') {
      console.log(section);
      const appSlider = {
        title: section.title,
        description: section.description,
        features: section.lists.filter(list => list.name === 'features')[0].blocks,
        carousel: section.lists.filter(list => list.name === 'carousel')[0].blocks,
      };

      return (
        <>
          <ThemeProvider theme={theme}>
            <ResetCSS />
            <GlobalStyle />
            <AppWrapper>
              <ContentWrapper>
                <AppSlider appSlider={appSlider} />
              </ContentWrapper>
            </AppWrapper>
          </ThemeProvider>
        </>
      );
    }
  };
  const renderSections = () => {
    return (
      <>
        {page1.sections.map(section => {
          return renderSection(section);
        })}
      </>
    );
  };

  return renderSections();
};
