import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from 'common/src/theme/interior';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from 'landing/containers/Interior/Navbar/index-mercy';
import Banner from 'landing/containers/Interior/Banner/index-mercy';
import Feature from 'landing/containers/Interior/Feature';
import AboutUs from 'landing/containers/Interior/AboutUs';
import Project from 'landing/containers/Interior/Project';
import Team from 'landing/containers/Interior/Team';
import News from 'landing/containers/Interior/News';
import Testimonial from 'landing/containers/Interior/Testimonial';
import Gallery from 'landing/containers/Interior/Gallery';
import Newsletter from 'landing/containers/Interior/Newsletter';
import Footer from 'landing/containers/Interior/Footer';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from 'landing/containers/Interior/interior.style';

export default () => {
  return (
    <ThemeProvider theme={interiorTheme}>
      <Fragment>
        <Head>
          <title>Interior | A react next landing page</title>
          <meta name="theme-color" content="#171717" />
          <meta name="description" content="React next landing page" />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Gatsby, Gatsby Js, Fast Landing, Modren Landing"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <InteriorWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Banner />
            {/*<Feature />
            <AboutUs />
            <Project />
            <Team />
            <News />
            <Testimonial />
            <Gallery />
            <Newsletter />*/}
          </ContentWrapper>
          {/*<Footer />*/}
        </InteriorWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
