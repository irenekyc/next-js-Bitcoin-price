webpackHotUpdate("static/development/pages/detailed.js",{

/***/ "./pages/detailed.js":
/*!***************************!*\
  !*** ./pages/detailed.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/data */ \"./components/data.js\");\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_data__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/tailwind/trial-next/pages/detailed.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Detailed = function Detailed() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"USD\"),\n      currency = _useState[0],\n      setCurrency = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"100\"),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      data = _useState3[0],\n      setData = _useState3[1];\n\n  var onClickHandler = function onClickHandler() {\n    var data = Object(_components_data__WEBPACK_IMPORTED_MODULE_2__[\"fetchData\"])(currency, value);\n    setData(data);\n  };\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, \" Check out price\"), __jsx(\"select\", {\n    name: \"currency\",\n    id: \"currency\",\n    onChange: function onChange(e) {\n      return setCurrency(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, __jsx(\"option\", {\n    value: \"USD\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, \" USD \"), __jsx(\"option\", {\n    value: \"GBP\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, \" GBP \"), __jsx(\"option\", {\n    value: \"EUR\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }, \" EUR \")), __jsx(\"button\", {\n    onClick: function onClick() {\n      return onClickHandler();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, \" Confirm \"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 20\n    }\n  }, \" \", currency, \" \"), \" \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 46\n    }\n  }, \" 100 \"), \" \", data !== null && data));\n};\n\n_s(Detailed, \"Izs4bKYzrfUTF4BkjrcN6weHoeM=\");\n\n_c = Detailed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detailed);\n\nvar _c;\n\n$RefreshReg$(_c, \"Detailed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxlZC5qcz9iMTNiIl0sIm5hbWVzIjpbIkRldGFpbGVkIiwidXNlU3RhdGUiLCJjdXJyZW5jeSIsInNldEN1cnJlbmN5IiwidmFsdWUiLCJzZXRWYWx1ZSIsImRhdGEiLCJzZXREYXRhIiwib25DbGlja0hhbmRsZXIiLCJmZXRjaERhdGEiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEtBQUQsQ0FEdEI7QUFBQSxNQUNWQyxRQURVO0FBQUEsTUFDQUMsV0FEQTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxLQUFELENBRmpCO0FBQUEsTUFFVkcsS0FGVTtBQUFBLE1BRUhDLFFBRkc7O0FBQUEsbUJBR09KLHNEQUFRLENBQUMsSUFBRCxDQUhmO0FBQUEsTUFHVkssSUFIVTtBQUFBLE1BR0pDLE9BSEk7O0FBS2pCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBSTtBQUN2QixRQUFNRixJQUFJLEdBQUdHLGtFQUFTLENBQUNQLFFBQUQsRUFBV0UsS0FBWCxDQUF0QjtBQUNBRyxXQUFPLENBQUNELElBQUQsQ0FBUDtBQUVILEdBSkQ7O0FBT0EsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLEVBR1E7QUFBUSxRQUFJLEVBQUMsVUFBYjtBQUF3QixNQUFFLEVBQUMsVUFBM0I7QUFBc0MsWUFBUSxFQUFFLGtCQUFBSSxDQUFDO0FBQUEsYUFBR1AsV0FBVyxDQUFDTyxDQUFDLENBQUNDLE1BQUYsQ0FBU1AsS0FBVixDQUFkO0FBQUEsS0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsU0FBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUk7QUFBUSxTQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFHSTtBQUFRLFNBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixDQUhSLEVBUVE7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFJSSxjQUFjLEVBQWxCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSUixFQVVRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVFOLFFBQVIsTUFBSCxPQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTdCLE9BQWlESSxJQUFJLEtBQUcsSUFBUCxJQUFlQSxJQUFoRSxDQVZSLENBREo7QUFlSCxDQTNCRDs7R0FBTU4sUTs7S0FBQUEsUTtBQStCU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWxlZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGF0YSdcblxuY29uc3QgRGV0YWlsZWQgPSAoKT0+e1xuICAgIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldPSB1c2VTdGF0ZShcIlVTRFwiKVxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCIxMDBcIilcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoKT0+e1xuICAgICAgICBjb25zdCBkYXRhID0gZmV0Y2hEYXRhKGN1cnJlbmN5LCB2YWx1ZSlcbiAgICAgICAgc2V0RGF0YShkYXRhKVxuICBcbiAgICB9XG5cblxuICAgIHJldHVybihcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMT4gQ2hlY2sgb3V0IHByaWNlPC9oMT5cblxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImN1cnJlbmN5XCIgaWQ9XCJjdXJyZW5jeVwiIG9uQ2hhbmdlPXtlPT4gc2V0Q3VycmVuY3koZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTRFwiPiBVU0QgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHQlBcIj4gR0JQIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVVSXCI+IEVVUiA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5vbkNsaWNrSGFuZGxlcigpfT4gQ29uZmlybSA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxwPjxzcGFuPiB7Y3VycmVuY3l9IDwvc3Bhbj4gPHNwYW4+IDEwMCA8L3NwYW4+IHtkYXRhIT09bnVsbCAmJiBkYXRhfTwvcD5cbiAgICAgICBcbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/detailed.js\n");

/***/ })

})