import React, { Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';

export default ({ children, themeType }) => {
  let theme, fonts;
  switch (themeType) {
    case 'agency':
      theme = require('common/src/theme/agency').agencyTheme;
      fonts = (
        <>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
            rel="stylesheet"
          />
        </>
      );
      break;
    default:
      theme = require('common/src/theme/agency').agencyTheme;
      fonts = (
        <>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
            rel="stylesheet"
          />
        </>
      );
      break;
  }

  return (
    <Fragment>
      <Modal />
      <ThemeProvider theme={theme}>
        <Fragment>
          <Head>
            <title>Mercy Viewer</title>
            <meta name="Description" content="React next landing page" />
            <meta name="theme-color" content="#ec5555" />
            {/* Load google fonts */}
            {fonts}
          </Head>

          <ResetCSS />
          <GlobalStyle />
          {children}
        </Fragment>
      </ThemeProvider>
    </Fragment>
  );
};
