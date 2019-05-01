webpackHotUpdate("static\\development\\pages\\reference\\use-api.js",{

/***/ "./node_modules/raw-loader/dist/cjs.js!./pages/reference/use-api.js":
false,

/***/ "./node_modules/raw-loader/dist/cjs.js!./reference/use-api.md":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./reference/use-api.md ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("## Functions\n\n<dl>\n<dt><a href=\"#useAPI\">useAPI(url, config)</a> ⇒ <code><a href=\"#useAPIOutput\">useAPIOutput</a></code></dt>\n<dd><p>React hook used to make a an API call using axios.</p>\n<p>Allows you to pass an axios config object, for complete control of the request being sent.</p>\n</dd>\n</dl>\n\n## Typedefs\n\n<dl>\n<dt><a href=\"#useAPIOutput\">useAPIOutput</a> : <code>Object</code></dt>\n<dd><p>The object returned by the useAPI hook.</p>\n</dd>\n</dl>\n\n<a name=\"useAPI\"></a>\n\n## useAPI(url, config) ⇒ [<code>useAPIOutput</code>](#useAPIOutput)\nReact hook used to make a an API call using axios.\r\rAllows you to pass an axios config object, for complete control of the request being sent.\n\n**Kind**: global function  \n**Returns**: [<code>useAPIOutput</code>](#useAPIOutput) - output  \n\n| Param | Type | Description |\n| --- | --- | --- |\n| url | <code>string</code> | URL that the API call is made to. |\n| config | <code>Object</code> | Axios config object passed to the axios.request method. |\n\n<a name=\"useAPIOutput\"></a>\n\n## useAPIOutput : <code>Object</code>\nThe object returned by the useAPI hook.\n\n**Kind**: global typedef  \n**Properties**\n\n| Name | Type | Description |\n| --- | --- | --- |\n| data | <code>Object</code> \\| <code>undefined</code> | The data attribute from the axios response. |\n| response | <code>Object</code> \\| <code>undefined</code> | The axios response. |\n| error | <code>Object</code> \\| <code>undefined</code> | The axios error object is an error occurs. |\n| isLoading | <code>boolean</code> | Indicates if their is a pending API call. |\n| setData | <code>function</code> | Update the response data object. |\n\n");

/***/ }),

/***/ "./pages/reference/use-api.js":
/*!************************************!*\
  !*** ./pages/reference/use-api.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ReferenceDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ReferenceDisplay */ "./components/ReferenceDisplay.js");
/* harmony import */ var _raw_loader_reference_use_api_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !raw-loader!../../reference/use-api.md */ "./node_modules/raw-loader/dist/cjs.js!./reference/use-api.md");
var _jsxFileName = "C:\\Home\\Personal\\Github\\react-api-hooks\\website\\pages\\reference\\use-api.js";




var UseApi = function UseApi(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReferenceDisplay__WEBPACK_IMPORTED_MODULE_1__["default"], {
    source: _raw_loader_reference_use_api_md__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

UseApi.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (UseApi);

/***/ })

})
//# sourceMappingURL=use-api.js.f35470e161304d38d90d.hot-update.js.map