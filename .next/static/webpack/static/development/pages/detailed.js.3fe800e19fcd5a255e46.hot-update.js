webpackHotUpdate("static/development/pages/detailed.js",{

/***/ "./pages/detailed.js":
/*!***************************!*\
  !*** ./pages/detailed.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/tailwind/trial-next/pages/detailed.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Detailed = function Detailed() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"USD\"),\n      currency = _useState[0],\n      setCurrency = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"100\"),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  console.log(currency);\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(currency);\n              console.log(value);\n              _context.next = 4;\n              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"https://blockchain.info/tobtc?currency=\".concat(currency, \"&value=\").concat(value));\n\n            case 4:\n              res = _context.sent;\n              console.log(res);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, \" Check out price\"), __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(\"select\", {\n    name: \"currency\",\n    id: \"currency\",\n    onChange: function onChange(e) {\n      return setCurrency(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, __jsx(\"option\", {\n    value: \"USD\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }, \" USD \"), __jsx(\"option\", {\n    value: \"GBP\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, \" GBP \"), __jsx(\"option\", {\n    value: \"EUR\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, \" EUR \")), __jsx(\"input\", {\n    type: \"number\",\n    onChange: function onChange(e) {\n      return setValue(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 18\n    }\n  }, value)));\n}; // export async function getServerSideProps(context) {\n//     const res = fetch('')\n//     return {\n//       props: {}, // will be passed to the page component as props\n//     }\n//   }\n\n\n_s(Detailed, \"87+Kbns+lzly57MnRSdPnzt+xys=\");\n\n_c = Detailed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detailed);\n\nvar _c;\n\n$RefreshReg$(_c, \"Detailed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxlZC5qcz9iMTNiIl0sIm5hbWVzIjpbIkRldGFpbGVkIiwidXNlU3RhdGUiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwidmFsdWUiLCJzZXRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaERhdGEiLCJmZXRjaCIsInJlcyIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFJO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsS0FBRCxDQUR0QjtBQUFBLE1BQ1ZDLFFBRFU7QUFBQSxNQUNBQyxXQURBOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVWRyxLQUZVO0FBQUEsTUFFSEMsUUFGRzs7QUFHakJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaOztBQUNBLE1BQU1NLFNBQVM7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEYscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaO0FBQ0FJLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUZjO0FBQUEscUJBR0lLLHlEQUFLLGtEQUEyQ1AsUUFBM0Msb0JBQTZERSxLQUE3RCxFQUhUOztBQUFBO0FBR1JNLGlCQUhRO0FBSWRKLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBWjs7QUFKYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFURixTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBT0EsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsUUFBSSxFQUFDLFVBQWI7QUFBd0IsTUFBRSxFQUFDLFVBQTNCO0FBQXNDLFlBQVEsRUFBRSxrQkFBQUcsQ0FBQztBQUFBLGFBQUdSLFdBQVcsQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFGLENBQVNSLEtBQVYsQ0FBZDtBQUFBLEtBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLFNBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVJO0FBQVEsU0FBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBR0k7QUFBUSxTQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosQ0FESixFQU1LO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsWUFBUSxFQUFJLGtCQUFBTyxDQUFDO0FBQUEsYUFBR04sUUFBUSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU1IsS0FBVixDQUFYO0FBQUEsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRUEsS0FBaEUsQ0FOTCxDQUZKLENBREo7QUFlSCxDQTFCRCxDLENBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBakNNSixROztLQUFBQSxRO0FBbUNTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2RldGFpbGVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgRGV0YWlsZWQgPSAoKT0+e1xuICAgIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldPSB1c2VTdGF0ZShcIlVTRFwiKVxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCIxMDBcIilcbiAgICBjb25zb2xlLmxvZyhjdXJyZW5jeSlcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW5jeSlcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2Jsb2NrY2hhaW4uaW5mby90b2J0Yz9jdXJyZW5jeT0ke2N1cnJlbmN5fSZ2YWx1ZT0ke3ZhbHVlfWApXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDE+IENoZWNrIG91dCBwcmljZTwvaDE+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjdXJyZW5jeVwiIGlkPVwiY3VycmVuY3lcIiBvbkNoYW5nZT17ZT0+IHNldEN1cnJlbmN5KGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj4gVVNEIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0JQXCI+IEdCUCA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVVUlwiPiBFVVIgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2UgPSB7ZT0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0+e3ZhbHVlfTwvaW5wdXQ+XG4gICBcbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIFxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGZldGNoKCcnKVxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczoge30sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuLy8gICAgIH1cbi8vICAgfVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detailed.js\n");

/***/ })

})