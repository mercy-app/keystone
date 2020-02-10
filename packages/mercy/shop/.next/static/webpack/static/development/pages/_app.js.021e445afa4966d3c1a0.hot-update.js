webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./containers/LayoutContainer/AppLayout-mercy.tsx":
/*!********************************************************!*\
  !*** ./containers/LayoutContainer/AppLayout-mercy.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "../node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stickynode */ "../node_modules/react-stickynode/index.js");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header_Header_mercy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header/Header-mercy */ "./containers/LayoutContainer/Header/Header-mercy.tsx");
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contexts/app/app.provider */ "./contexts/app/app.provider.ts");
/* harmony import */ var constants_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/navigation */ "./constants/navigation.ts");
var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/containers/LayoutContainer/AppLayout-mercy.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var MobileHeader = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Header/MobileHeader */ "./containers/LayoutContainer/Header/MobileHeader.tsx"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Header/MobileHeader */ "./containers/LayoutContainer/Header/MobileHeader.tsx")];
    },
    modules: ['./Header/MobileHeader']
  }
});
var LayoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "AppLayout-mercy__LayoutWrapper",
  componentId: "f2z8kw-0"
})(["background-color:#f7f7f7;.reuseModalHolder{padding:0;overflow:auto;border-radius:3px 3px 0 0;border:0;}"]);

var Layout = function Layout(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$deviceType = _ref.deviceType,
      mobile = _ref$deviceType.mobile,
      tablet = _ref$deviceType.tablet,
      desktop = _ref$deviceType.desktop,
      token = _ref.token,
      ssr = _ref.ssr;
  var isSticky = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__["useStickyState"])('isSticky');
  var pathname;

  if (ssr) {
    pathname = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  } else {
    pathname = '';
  }

  var isHomePage = pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["HOME_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["GROCERY_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["CLOTHING"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["MAKEUP_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["BOOK_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["FURNITURE_PAGE"] || pathname === constants_navigation__WEBPACK_IMPORTED_MODULE_7__["BAGS_PAGE"];
  return __jsx(LayoutWrapper, {
    className: "layoutWrapper ".concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, (mobile || tablet) && __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    enabled: isSticky,
    innerZ: 1001,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(MobileHeader, {
    className: "".concat(isSticky ? 'sticky' : 'unSticky', " ").concat(isHomePage ? 'home' : ''),
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), desktop && __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    enabled: isSticky,
    innerZ: 1001,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(MobileHeader, {
    className: "".concat(isSticky ? 'sticky' : 'unSticky', " ").concat(isHomePage ? 'home' : '', " desktop"),
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_Header_Header_mercy__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "".concat(isSticky ? 'sticky' : 'unSticky', " ").concat(isHomePage ? 'home' : ''),
    token: token,
    pathname: pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.021e445afa4966d3c1a0.hot-update.js.map