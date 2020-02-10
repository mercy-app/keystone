webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./containers/LayoutContainer/Header/MobileDrawer-mercy.tsx":
/*!******************************************************************!*\
  !*** ./containers/LayoutContainer/Header/MobileDrawer-mercy.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redq/reuse-modal */ "../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "../node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Drawer/Drawer */ "./components/Drawer/Drawer.tsx");
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/NavLink/NavLink */ "./components/NavLink/NavLink.tsx");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/drawer/drawer.context */ "./contexts/drawer/drawer.context.tsx");
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! contexts/auth/auth.context */ "./contexts/auth/auth.context.tsx");
/* harmony import */ var _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../SignInOutForm/Form */ "./containers/SignInOutForm/Form.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "../node_modules/react-intl/lib/index.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header.style */ "./containers/LayoutContainer/Header/Header.style.tsx");
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! image/user.jpg */ "./image/user.jpg");
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(image_user_jpg__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/containers/LayoutContainer/Header/MobileDrawer-mercy.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var DrawerMenuItems = [{
  id: 1,
  intlLabelId: 'sideBarProjects',
  label: 'Projects',
  href: '/'
}, {
  id: 2,
  intlLabelId: 'sideBarOrders',
  label: 'Orders',
  href: '/'
}, {
  id: 3,
  intlLabelId: 'sideBarProducts',
  label: 'Products',
  href: '/'
}, {
  id: 4,
  intlLabelId: 'sideBarContacts',
  label: 'Contacts',
  href: '/'
}, {
  id: 5,
  intlLabelId: 'sideBarCollaborate',
  label: 'Collaborate',
  href: '/'
}, {
  id: 6,
  intlLabelId: 'sideBarAnalytics',
  label: 'Analytics',
  href: '/'
}, {
  id: 7,
  intlLabelId: 'sideBarSettings',
  label: 'Settings',
  href: '/'
}, {
  id: 8,
  intlLabelId: 'sideBarPlugins',
  label: 'Plugins',
  href: '/'
}]; // const DrawerMenuItems = [
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

var MobileDrawer = function MobileDrawer(_ref) {
  var ssr = _ref.ssr;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_8__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__["AuthContext"]),
      isAuthenticated = _useContext2.authState.isAuthenticated,
      authDispatch = _useContext2.authDispatch; // Toggle drawer


  var toggleHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function () {
    dispatch({
      type: 'TOGGLE'
    });
  }, [dispatch]);

  var handleLogout = function handleLogout() {
    if (true) {
      localStorage.removeItem('access_token');
      authDispatch({
        type: 'SIGN_OUT'
      });
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }
  };

  var resetSearch = function resetSearch() {
    dispatch({
      type: 'RESET'
    });
  };

  var signInOutForm = function signInOutForm() {
    dispatch({
      type: 'TOGGLE'
    });
    authDispatch({
      type: 'SIGNIN'
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__["openModal"])({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_10__["default"],
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto'
      }
    });
  };

  return __jsx(components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "316px",
    drawerHandler: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["HamburgerIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    })),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerClose"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_7__["CloseIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
    autoHide: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerProfile"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, isAuthenticated ? __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["LoginView"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UserAvatar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("img", {
    src: image_user_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "user_avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UserDetails"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "David Kinderson"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "+990 374 987"))) : __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["LogoutView"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    intlButtonId: "mobileSignInButtonText",
    title: "Join In",
    size: "small",
    className: "sign_in" // variant="primary"
    ,
    onClick: signInOutForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }))), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, DrawerMenuItems.map(function (item) {
    return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: toggleHandler,
      href: item.href,
      label: item.label,
      intlId: item.intlLabelId,
      className: "drawer_menu_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }));
  })), isAuthenticated && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UesrOptionMenu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/profile",
    label: "Your Account Settings",
    className: "drawer_menu_item",
    intlId: "navlinkAccountSettings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx("div", {
    onClick: handleLogout,
    className: "drawer_menu_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx("span", {
    className: "logoutBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
    id: "navlinkLogout",
    defaultMessage: "Logout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileDrawer);

/***/ })

})
//# sourceMappingURL=_app.js.686a8906f454f9ab009c.hot-update.js.map