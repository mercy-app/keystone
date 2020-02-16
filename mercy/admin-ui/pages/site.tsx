import React from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo-mercy';

import Site from 'containers/Site-mercy';
import { MainContentArea, ContentSection } from 'styled/pages.style';
// Static Data Import Here
import { withRouter } from 'react-router-dom';
import { useAdminMeta, ListData } from '@keystonejs/app-admin-ui/client-mercy';

import { ListProvider } from '@keystonejs/app-admin-ui/components';

function SitePage({ location }) {
  let adminMeta = useAdminMeta();
  const list = adminMeta.getListByPath('orders');
  return (
    <ListProvider list={list}>
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
    </ListProvider>
  );
}

export default withRouter(withApollo(SitePage));
