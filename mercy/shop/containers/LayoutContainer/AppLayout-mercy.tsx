import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Sticky from 'react-stickynode';
import styled from 'styled-components';

import Header from './Header/Header-mercy';
import { useStickyState } from 'contexts/app/app.provider';
import {
  HOME_PAGE,
  GROCERY_PAGE,
  CLOTHING,
  MAKEUP_PAGE,
  BAGS_PAGE,
  FURNITURE_PAGE,
  BOOK_PAGE,
} from 'constants/navigation';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query-mercy';
import { useQuery } from '@apollo/react-hooks';
import UserImage from 'image/user.jpg';
import { ProfileProvider } from 'contexts/profile/profile.provider';

const MobileHeader = dynamic(() => import('./Header/MobileHeader-mercy'), {
  ssr: false,
});
const LayoutWrapper = styled.div`
  background-color: #f7f7f7;

  .reuseModalHolder {
    padding: 0;
    overflow: auto;
    border-radius: 3px 3px 0 0;
    border: 0;
  }
`;

type LayoutProps = {
  className?: string;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  token?: string;
  clientApp?: boolean;
};

const Layout: FunctionComponent<LayoutProps> = ({
  className,
  children,
  deviceType: { mobile, tablet, desktop },
  token,
  clientApp,
}) => {
  const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <div>{error.message}</div>;
  const isSticky = useStickyState('isSticky');
  let pathname;
  if (!clientApp) {
    pathname = useRouter();
  } else {
    pathname = window.location.pathname;
  }

  const isHomePage =
    pathname === HOME_PAGE ||
    pathname === GROCERY_PAGE ||
    pathname === CLOTHING ||
    pathname === MAKEUP_PAGE ||
    pathname === BOOK_PAGE ||
    pathname === FURNITURE_PAGE ||
    pathname === BAGS_PAGE;
  console.log(isHomePage);
  return (
    <ProfileProvider initData={data.authenticatedUser}>
      <LayoutWrapper className={`layoutWrapper ${className}`}>
        {(mobile || tablet) && (
          <Sticky enabled={isSticky} innerZ={1001}>
            <MobileHeader
              className={`${isSticky ? 'sticky' : 'unSticky'} ${isHomePage ? 'home' : ''}`}
              pathname={pathname}
              user={data.authenticatedUser}
            />
          </Sticky>
        )}

        {desktop && (
          <Sticky enabled={isSticky} innerZ={1001}>
            <MobileHeader
              className={`${isSticky ? 'sticky' : 'unSticky'} ${isHomePage ? 'home' : ''} desktop`}
              pathname={pathname}
              user={data.authenticatedUser}
            />
            <Header
              className={`${isSticky ? 'sticky' : 'unSticky'} ${isHomePage ? 'home' : ''}`}
              token={token}
              pathname={pathname}
              clientApp={clientApp}
              user={data.authenticatedUser}
            />
          </Sticky>
        )}
        {children}
      </LayoutWrapper>
    </ProfileProvider>
  );
};

export default Layout;
