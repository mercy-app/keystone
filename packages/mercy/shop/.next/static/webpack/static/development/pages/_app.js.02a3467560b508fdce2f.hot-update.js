webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/NavLink/NavLink-mercy.tsx":
/*!**********************************************!*\
  !*** ./components/NavLink/NavLink-mercy.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "../node_modules/react-intl/lib/index.js");

var _jsxFileName = "/Users/ichenwu/code/mercy-app/shop/components/NavLink/NavLink-mercy.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "NavLink-mercy__Icon",
  componentId: "w6nhop-0"
})(["min-width:16px;margin-right:10px;display:flex;align-items:center;justify-content:center;"]);

var NavLink = function NavLink(_ref) {
  var href = _ref.href,
      label = _ref.label,
      intlId = _ref.intlId,
      icon = _ref.icon,
      className = _ref.className,
      onClick = _ref.onClick,
      iconClass = _ref.iconClass,
      ssr = _ref.ssr,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["href", "label", "intlId", "icon", "className", "onClick", "iconClass", "ssr"]);

  var pathname;

  if (ssr) {
    pathname = rest.router.pathname;
  } else {
    pathname = window.location.pathname;
  }

  return __jsx("div", {
    onClick: onClick,
    className: className ? className : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, ssr ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    className: pathname === href ? ' current-page' : '',
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, icon ? __jsx(Icon, {
    className: iconClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, icon) : '', __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, intlId ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: intlId ? intlId : 'defaultNavLinkId',
    defaultMessage: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }) : label))) : __jsx("a", {
    href: href,
    className: pathname === href ? ' current-page' : '',
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, icon ? __jsx(Icon, {
    className: iconClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, icon) : '', __jsx("span", {
    className: "label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, intlId ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: intlId ? intlId : 'defaultNavLinkId',
    defaultMessage: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }) : label)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(NavLink));

/***/ })

})
//# sourceMappingURL=_app.js.02a3467560b508fdce2f.hot-update.js.map