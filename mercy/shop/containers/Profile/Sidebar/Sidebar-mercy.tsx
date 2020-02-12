import React, { useContext } from 'react';
import Router from 'next/router';
import { withRouter } from 'react-router-dom';
import { AuthContext } from 'contexts/auth/auth.context';
import {
  SidebarWrapper,
  SidebarTop,
  SidebarBottom,
  SidebarMenu,
  LogoutButton,
} from './Sidebar.style-mercy';
import { FormattedMessage } from 'react-intl';

const SidebarCategory: React.FC<any> = ({ clientApp, history }) => {
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = useContext<any>(AuthContext);

  const sidebarTopMenu = [
    { link: '/order', intlId: 'sidebarYourOrder' },
    { link: '/help', intlId: 'navlinkHelp' },
  ];

  const sidebarBottomMenu = [
    {
      link: '/profile',
      intlId: 'navlinkAccountSettings',
    },
  ];
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      authDispatch({ type: 'SIGN_OUT' });
      if (clientApp) {
        history.push('/');
      } else {
        Router.push('/');
      }
    }
  };
  return (
    <>
      <SidebarWrapper>
        <SidebarTop>
          {sidebarTopMenu.map((item, index) => (
            <SidebarMenu clientApp={clientApp} href={item.link} key={index} intlId={item.intlId} />
          ))}
        </SidebarTop>

        <SidebarBottom>
          {sidebarBottomMenu.map((item, index) => (
            <SidebarMenu clientApp={clientApp} href={item.link} key={index} intlId={item.intlId} />
          ))}
          <LogoutButton type="button" onClick={handleLogout}>
            <FormattedMessage id="navlinkLogout" defaultMessage="Logout" />
          </LogoutButton>
        </SidebarBottom>
      </SidebarWrapper>
    </>
  );
};

// export default SidebarCategory;

export default props => {
  if (props.clientApp) {
    return <SidebarCategory {...props} />;
  } else {
    const SidebarWrapper = withRouter(routerProps => (
      <SidebarCategory {...routerProps} {...props} />
    ));
    return <SidebarWrapper />;
  }
};
