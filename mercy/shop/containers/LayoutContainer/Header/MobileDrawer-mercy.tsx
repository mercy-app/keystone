import React, { useContext } from 'react';
import { openModal } from '@redq/reuse-modal';
import Router from 'next/router';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/Drawer/Drawer';
import Button from 'components/Button/Button';
import NavLink from 'components/NavLink/NavLink-mercy';
import { CloseIcon } from 'components/AllSvgIcon';
import { DrawerContext } from 'contexts/drawer/drawer.context';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from '../../SignInOutForm/Form';
import { FormattedMessage } from 'react-intl';
import {
  HamburgerIcon,
  DrawerContentWrapper,
  DrawerClose,
  DrawerProfile,
  LogoutView,
  LoginView,
  UserAvatar,
  UserDetails,
  DrawerMenu,
  DrawerMenuItem,
  UesrOptionMenu,
} from './Header-mercy.style';
import UserImage from 'image/user.jpg';

import {
  PROCEED_TO_CHECKOUT_PAGE,
  PROFILE_PAGE,
  YOUR_ORDER,
  ORDER_RECEIVED,
  HELP_PAGE,
  OFFER_PAGE,
} from 'constants/navigation';

const DrawerMenuItems = [
  {
    id: 1,
    intlLabelId: 'sideBarSites',
    label: 'Sites',
    href: '/mercy/sites',
    color: ['#E74B3C', '#C0382B'],
  },
  {
    id: 2,
    intlLabelId: 'sideBarOrders',
    label: 'Orders',
    href: '/mercy/orders',
    color: ['#E67E22', '#D35400'],
  },
  {
    id: 3,
    intlLabelId: 'sideBarProducts',
    label: 'Products',
    href: '/bags',
    color: ['#FFA800', '#FFCD00'],
  },
  {
    id: 4,
    intlLabelId: 'sideBarContacts',
    label: 'Contacts',
    href: '/contacts',
    color: ['#9B58B6', '#8E43AD'],
  },
  {
    id: 5,
    intlLabelId: 'sideBarCollaborate',
    label: 'Collaborate',
    href: '/',
    color: ['#396E81', '#356171'],
  },
  {
    id: 6,
    intlLabelId: 'sideBarAnalytics',
    label: 'Analytics',
    href: '/',
    color: ['#745DC5', '#5B48A2'],
  },
  {
    id: 7,
    intlLabelId: 'sideBarSettings',
    label: 'Settings',
    href: '/',
    color: ['#3497DB', '#2980B9'],
  },
  {
    id: 8,
    intlLabelId: 'sideBarPlugins',
    label: 'Plugins',
    href: '/',
    color: ['#345F41', '#2C5036'],
  },
  // {
  //   id: 8,
  //   intlLabelId: 'sideBarProfile',
  //   label: 'Profile',
  //   href: '/',
  //   color: ['#95A5A6', '#7F8C8D'],
  // },
];

// const DrawerMenuItems = [
//   {
//     id: 1,
//     intlLabelId: 'navLinkHome',
//     label: 'Home',
//     href: '/',
//   },
//   {
//     id: 2,
//     intlLabelId: 'navlinkCheckout',
//     label: 'Checkout',
//     href: PROCEED_TO_CHECKOUT_PAGE,
//   },
//   {
//     id: 3,
//     intlLabelId: 'navlinkProfile',
//     label: 'Profile',
//     href: PROFILE_PAGE,
//   },
//   {
//     id: 4,
//     intlLabelId: 'sidebarYourOrder',
//     label: 'Order',
//     href: YOUR_ORDER,
//   },
//   {
//     id: 5,
//     intlLabelId: 'navlinkOrderReceived',
//     label: 'Received',
//     href: ORDER_RECEIVED,
//   },
//   {
//     id: 6,
//     intlLabelId: 'navlinkHelp',
//     label: 'Help',
//     href: HELP_PAGE,
//   },
//   {
//     id: 7,
//     intlLabelId: 'navlinkOffer',
//     label: 'Offer',
//     href: OFFER_PAGE,
//   },
// ];

const MobileDrawer: React.FunctionComponent<any> = ({ clientApp, user }) => {
  const { state, dispatch } = useContext<any>(DrawerContext);
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = useContext<any>(AuthContext);
  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };
  const resetSearch = () => {
    dispatch({
      type: 'RESET',
    });
  };

  const signInOutForm = () => {
    dispatch({
      type: 'TOGGLE',
    });

    authDispatch({
      type: 'SIGNIN',
    });

    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  };

  return (
    <Drawer
      width="60%"
      drawerHandler={
        <HamburgerIcon>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <DrawerClose>
          <CloseIcon />
        </DrawerClose>
      }
    >
      <Scrollbars autoHide>
        <DrawerContentWrapper>
          <DrawerProfile>
            {isAuthenticated ? (
              <LoginView>
                <UserAvatar>
                  <img src={user.avatar ? user.avatar.publicUrl : UserImage} alt="user_avatar" />
                </UserAvatar>
                <UserDetails>
                  <h3>{user.name}</h3>
                </UserDetails>
              </LoginView>
            ) : (
              <LogoutView>
                <Button
                  intlButtonId="mobileSignInButtonText"
                  title="Join In"
                  size="small"
                  className="sign_in"
                  // variant="primary"
                  onClick={signInOutForm}
                />
              </LogoutView>
            )}
          </DrawerProfile>

          <DrawerMenu>
            {DrawerMenuItems.map(item => (
              <DrawerMenuItem color0={item.color[0]} color1={item.color[1]} key={item.id}>
                <NavLink
                  clientApp={clientApp}
                  onClick={toggleHandler}
                  href={item.href}
                  label={item.label}
                  intlId={item.intlLabelId}
                  className="drawer_menu_item"
                />
              </DrawerMenuItem>
            ))}
          </DrawerMenu>

          {isAuthenticated && (
            <UesrOptionMenu>
              <DrawerMenuItem>
                <NavLink
                  clientApp={clientApp}
                  href="/profile"
                  label="Your Account Settings"
                  className="drawer_menu_item"
                  intlId="navlinkAccountSettings"
                />
              </DrawerMenuItem>
              <DrawerMenuItem>
                <div onClick={handleLogout} className="drawer_menu_item">
                  <span className="logoutBtn">
                    <FormattedMessage id="navlinkLogout" defaultMessage="Logout" />
                  </span>
                </div>
              </DrawerMenuItem>
            </UesrOptionMenu>
          )}
        </DrawerContentWrapper>
      </Scrollbars>
    </Drawer>
  );
};

export default MobileDrawer;
