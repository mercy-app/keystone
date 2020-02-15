import React from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo-mercy';

import Site from 'containers/Site-mercy';
import { MainContentArea, ContentSection } from 'styled/pages.style-mercy';
// Static Data Import Here
import { withRouter } from 'react-router-dom';

function SitePage({ location }) {
  return (
    <>
      {/*<Head>
        <title>Bags - PickBazar</title>
      </Head>*/}
      <Modal>
        <>
          <MainContentArea>
            <ContentSection>
              <Site clientApp={true} />
            </ContentSection>
          </MainContentArea>
        </>
      </Modal>
    </>
  );
}

export default withRouter(withApollo(SitePage));
