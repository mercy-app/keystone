import React from 'react';
// import { NextPage } from 'next';
// import Head from 'next/head';
// import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query-mercy';
import { ProfileProvider } from 'contexts/profile/profile.provider';
import SettingsContent from 'containers/Profile/Settings/Settings';
import { PageWrapper, SidebarSection, ContentBox } from 'containers/Profile/Profile.style';
import Sidebar from 'containers/Profile/Sidebar/Sidebar-mercy';
import SiteFooter from 'components/SiteFooter/SiteFooter';
import { FormattedMessage } from 'react-intl';
import { withApollo } from 'helper/apollo-mercy';
import { useDeviceType } from 'helper/useDeviceType';

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProfilePage: React.FunctionComponent<Props> = () => {
  const deviceType = useDeviceType(window.navigator.userAgent);

  const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {/*<Head>
        <title>Profile - PickBazar</title>
      </Head>*/}
      <ProfileProvider initData={data.authenticatedUser}>
        <Modal>
          <PageWrapper>
            <SidebarSection>
              <Sidebar clientApp={true} />
            </SidebarSection>
            <ContentBox>
              <SettingsContent deviceType={deviceType} />
            </ContentBox>

            {/*<SiteFooter style={{ marginTop: 50 }}>
              <FormattedMessage id="siteFooter" defaultMessage="Pickbazar is a product of" />
              &nbsp; <Link href="#">Redq, Inc.</Link>
    </SiteFooter>*/}
          </PageWrapper>
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(ProfilePage);

// export default props => {
//   const ProfileWrapper = withApollo(apolloProps => <ProfilePage {...apolloProps} {...props} />);
//   return <ProfileWrapper />;
// };
