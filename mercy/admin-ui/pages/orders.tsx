import React from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo-mercy';

import { MainContentArea, ContentSection } from 'styled/pages.style';
// Static Data Import Here
import { withRouter } from 'react-router-dom';
import { useAdminMeta, ListData } from '@keystonejs/app-admin-ui/client';
import { ListProvider } from '@keystonejs/app-admin-ui/components';

function SitePage(props) {
  let adminMeta = useAdminMeta();
  const list = adminMeta.getListByPath('orders');
  console.log(list);
  if (list) {
    return (
      <ListProvider list={list}>
        {/*<Head>
        <title>Bags - PickBazar</title>
      </Head>*/}
        <Modal>
          <>
            <MainContentArea>
              <ContentSection>
                <ListData key="order" list={list} adminMeta={adminMeta} routeProps={props} />
              </ContentSection>
            </MainContentArea>
          </>
        </Modal>
      </ListProvider>
    );
  } else {
    return <div>failed</div>;
  }
}

export default withRouter(SitePage);
