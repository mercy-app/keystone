import React from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo-mercy';

import Sites from 'containers/Sites-mercy';
import { MainContentArea, ContentSection } from 'styled/pages.style';
// Static Data Import Here
import { withRouter } from 'react-router-dom';

function SitesPage({ location }) {
  return (
    <>
      {/*<Head>
        <title>Bags - PickBazar</title>
      </Head>*/}
      <Modal>
        <>
          <MainContentArea>
            <ContentSection>
              <Sites />
            </ContentSection>
          </MainContentArea>
        </>
      </Modal>
    </>
  );
}

export default withRouter(withApollo(SitesPage));
