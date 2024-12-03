/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Christmas Squad.otf */ \"./src/font/Christmas Squad.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: \"Christmas\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: clamp(12px, 8px + 0.8vw, 36px);\n}\n\nbody {\n    --header-text-color: #ffeebb;\n    --header-back-color: #123020;\n    --tab-color: #ac2229;\n    --frame-color: #dbab51;\n    --content-text-color: #201000;\n    --content-back-color: #ffeebb;\n\n    --default-font: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    --system-font: system-ui, -apple-system, 'Segoe UI', Roboto, 'Open Sans', sans-serif;\n    --title-font: Christmas, serif;\n\n    --content-width: 65rem;\n\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    color: var(--header-text-color);\n    background-color: var(--header-back-color);\n}\n\n/* Header */\n\nheader {\n    color: var(--header-text-color);\n    background-color: var(--header-back-color);\n    max-width: var(--content-width);\n    margin: auto;\n    text-align: center;\n}\n\nheader h1 {\n    font-family: var(--title-font);\n    font-weight: normal;\n    margin-top: 1rem;\n    font-size: 5rem;\n}\n\nnav {\n    padding-left: 3rem;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    gap: 2rem;\n}\n\nnav button {\n    display: block;\n    font-family: var(--default-font);\n    font-size: 1.2rem;\n    font-weight: bold;\n    color: var(--header-text-color);\n    background-color: var(--tab-color);\n    border: 0.1rem solid var(--tab-color);\n    border-radius: 0.4rem 0.4rem 0 0;\n    width: 7rem;\n    padding: 0.1rem 1rem;\n\n    position: relative;\n    top: 0.3rem;\n}\n\nnav button.current-tab {\n    color: var(--tab-color);\n    background-color: var(--content-back-color);\n    border: 0.2rem solid var(--content-back-color);\n\n    position: relative;\n    top: 0.4rem;\n}\n\n/* Main */\n\nmain {\n    color: var(--content-text-color);\n    background-color: var(--content-back-color);\n    border-top: 0.4rem solid var(--tab-color);\n    border-radius: 1.2rem 1.2rem 0.4rem 0.4rem;\n    max-width: var(--content-width);\n    padding: 1rem;\n    margin: auto;\n}\n\n#content {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: repeat(auto-fit, min-content);\n    min-height: 70vh;\n}\n\n#content .section {\n    display: flex;\n    flex-direction: row;\n    justify-content: stretch;\n    align-items: flex-start;\n}\n\n#content .text-block {\n    flex: 2;\n    padding: 0 2rem;\n}\n\n#content .text-block * {\n    margin-bottom: 0.8rem;\n}\n\n#content .text-block h2 {\n    margin-top: 1rem;\n}\n\n#content .text-block p {\n    line-height: 1.4rem;\n}\n\n#content img {\n    flex: 1;\n    max-width: 30%;\n\n    display: block;\n    width: 100%;\n    background-color: var(--frame-color);\n    border: 0.4rem double var(--content-back-color);\n    border-radius: 0.3rem;\n}\n\n#content .filigree::after {\n    font-family: var(--title-font);\n    font-size: 6rem;\n    color: var(--frame-color);\n    content: \")\";\n}\n\n#content a {\n    color: var(--tab-color);\n}\n\n/* Menu */\n\nmain #content ul {\n    list-style: none;\n    line-height: 1.4rem;\n    margin-left: 5rem;\n    text-indent: -3rem;\n}\n\n.dish-name {\n    font-weight: bold;\n}\n\n.dish-name::after {\n    content: \": \";\n}\n\nmain #content .left {\n    text-align: left;\n}\n\nmain #content .right {\n    text-align: right;\n}\n\n/* Contact Form */\n\nform {\n    background-color: var(--frame-color);\n    border-radius: 0.2rem;\n    padding: 1rem 2rem;\n    max-width: 30rem;\n}\n\nform fieldset {\n    border: none;\n    display: block;\n}\n\nform label {\n    display: block;\n}\n\n#content .text-block form label span {\n    font-weight: bold;\n    font-style: italic;\n    display: block;\n    margin-bottom: 0.2rem;\n}\n\nform input, form textarea {\n    font-family: var(--system-font);\n    font-size: 1rem;\n    line-height: 1.5rem;\n    display: block;\n    width: 100%;\n\n    color: var(--content-text-color);\n    background-color: var(--content-back-color);\n    border: none;\n    border-radius: 0.1rem;\n    padding: 0 0.2rem;\n}\n\nform input::placeholder, form textarea::placeholder {\n    color: var(--frame-color);\n}\n\nform textarea {\n    min-height: 4lh;\n}\n\nform button {\n    color: var(--header-text-color);\n    background-color: var(--tab-color);\n    font-family: var(--default-font);\n    font-size: 1.2rem;\n    font-weight: bold;\n    border: none;\n    padding: 0.4rem 2rem;\n    border-radius: 0.4rem;\n    cursor: pointer;\n}\n\n.hidden {\n    display: none;\n}\n\n/* Footer */\n\nfooter {\n    margin-top: 1rem;\n    text-align: center;\n    line-height: 2rem;\n    opacity: 0.7;\n}\n\nfooter a {\n    color: var(--header-text-color);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _render_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-home.js */ \"./src/render-home.js\");\n/* harmony import */ var _render_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-menu.js */ \"./src/render-menu.js\");\n/* harmony import */ var _render_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-about.js */ \"./src/render-about.js\");\n/* harmony import */ var _render_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render-contact.js */ \"./src/render-contact.js\");\n// Stylesheet and dependencies\n\n\n// Page elements\n\nconst allTabsById = {\n    \"home-tab\": {\n        tabNode: document.getElementById(\"home-tab\"),\n        render: _render_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    \"menu-tab\": {\n        tabNode: document.getElementById(\"menu-tab\"),\n        render: _render_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }, \n    \"about-tab\": {\n        tabNode: document.getElementById(\"about-tab\"),\n        render: _render_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    \"contact-tab\": {\n        tabNode: document.getElementById(\"contact-tab\"),\n        render: _render_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n};\n\nconst contentNode = document.getElementById(\"content\");\n\n// Page rendering functions\n\n\n\n\n\n\nfunction renderTab(tabNode) {\n    clearPageContent();\n    setCurrentTab(tabNode);\n    allTabsById[tabNode.id].render(contentNode);\n}\n\nfunction clearPageContent() {\n    contentNode.replaceChildren();\n}\n\nfunction setCurrentTab(currentTabNode) {\n    for (const tabId in allTabsById) {\n        const tabNode = allTabsById[tabId].tabNode;\n        if (tabNode == currentTabNode) {\n            tabNode.classList.add(\"current-tab\");\n        } else {\n            tabNode.classList.remove(\"current-tab\");\n        }\n    }\n}\n\n// Tab events\n\nfor (const tabId in allTabsById) {\n    let tabNode = allTabsById[tabId].tabNode;\n    tabNode.addEventListener(\"click\", function(event) {\n        renderTab(tabNode);\n    });\n}\n\n// Startup\n\nrenderTab(document.getElementById(\"home-tab\"));\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/lib/doc.js":
/*!************************!*\
  !*** ./src/lib/doc.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// doc.js\n// A module that makes HTML element creation quicker and tighter\n\nconst doc = (function() {\n    const _typeRegex = /^([a-z][a-z0-9]*)/i;\n    const _idRegex = /#([a-z][a-z0-9_\\-]*)/i;\n    const _classRegex = /\\.[a-z0-9_\\-]+/gi;\n\n    const _classListPropertyNames = [\"classes\", \"classList\"];\n    const _specialPropertySet = new Set([\n        \"classes\", \"classList\", \"className\", \"text\", \"children\"\n    ]);\n\n    function make(selector, properties) {\n        if (selector == \"label\") {\n            console.log(\"Label properties\");\n            console.log(properties);\n        }\n        // Standardize properties object\n        if (!properties) {\n            if (\"object\" == typeof selector) {\n                properties = selector;\n            } else {\n                properties = {};\n            }\n        } else if (\"string\" == typeof properties) {\n            let text = properties;\n            properties = { text };\n        } else if (Array.isArray(properties)) {\n            let children = properties;\n            properties = { children };\n        }\n\n        // Make an element of the specified type.\n        const typeCapture = selector.match(_typeRegex);\n        let type = typeCapture ? typeCapture[1] : \"div\";\n        let element = document.createElement(type);\n\n        // Set the id, if any.\n        const idCapture = selector.match(_idRegex);\n        if (idCapture) {\n            element.id = idCapture[1];\n        } else if (properties.id) {\n            element.id = properties.id;\n        }\n\n        // Set any classes from selector\n        const classTags = selector.match(_classRegex) ?? [];\n        for (const classTag of classTags) {\n            let className = classTag.slice(1); // Take off leading dot\n            element.classList.add(className);\n        }\n\n        // Set classes from properties, if applicable\n        if (properties.className) {\n            element.className = properties.className;\n        }\n        for (const classPropertyName of _classListPropertyNames) {\n            if (properties[classPropertyName]) {\n                for (let className of properties[classPropertyName]) {\n                    element.classList.add(className);\n                }\n            }\n        }\n\n        // Set text\n        if (properties.text) {\n            element.append(properties.text);\n        }\n\n        // Set attributes\n        for (const propName in properties) {\n            if (_specialPropertySet.has(propName)) {\n                // Special properties are handled some other way, not here.\n            } else {\n                element.setAttribute(propName, properties[propName]);\n            }\n        }\n\n        // Set children\n        if (properties.children) {\n            //console.log(properties.children);\n            element.append(...properties.children);\n        }\n\n        return element;\n    }\n\n    function _elementClosure(elementType) {\n        return function(text, properties) {\n            if (properties) {\n                properties.text = text;\n            } else if (\"string\" == typeof text) {\n                properties = { text };\n            } else {\n                properties = text;\n            }\n            return make(elementType, properties);\n        };\n    }\n\n    const module = { make };\n\n    const _shortcuts = [\n        \"a\", \"button\", \"div\", \"em\", \"h1\", \"h2\", \"h3\", \"fieldset\", \"img\", \"input\",\n        \"label\", \"li\", \"menu\", \"ol\", \"p\", \"span\", \"strong\", \"textarea\", \"ul\",\n    ];\n    for (const shortcut of _shortcuts) {\n        module[shortcut] = _elementClosure(shortcut);\n    }\n\n    module.br = function() { return document.createElement(\"br\"); }\n\n    return module;\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doc);\n\n//# sourceURL=webpack://odin-restaurant/./src/lib/doc.js?");

/***/ }),

/***/ "./src/lib/lorem.js":
/*!**************************!*\
  !*** ./src/lib/lorem.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loremSnippets = [\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem at quidem, eius magnam blanditiis facilis commodi illum repellat molestias, maiores iure eligendi ullam iusto consectetur eaque rem!\",\n    \"Quidem dolores ad rem repellat mollitia quod, optio commodi perferendis autem, praesentium minima explicabo cupiditate iure ipsum possimus necessitatibus nam dolorem? Obcaecati!\",\n    \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium hic aut in temporibus magnam iusto commodi ex odit quisquam, consequuntur voluptatem placeat reprehenderit iste at fugiat eveniet possimus accusamus aliquam!\",\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit, cumque maiores quis facere aliquid, molestias mollitia vel beatae fugiat vitae qui minus porro explicabo, ipsa deleniti quasi aliquam aspernatur!\",\n    \"Ipsam eaque delectus error, quos accusantium earum sed atque doloremque porro repellendus, laudantium sunt et commodi, minus ratione veritatis assumenda minima cumque!\",\n];\n\nconst lorem = function(seed) {\n    if (undefined === seed) {\n        seed = Math.random() * 10000;\n    }\n    const randomIndex = Math.floor(seed % loremSnippets.length);\n    return loremSnippets[randomIndex];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lorem);\n\n//# sourceURL=webpack://odin-restaurant/./src/lib/lorem.js?");

/***/ }),

/***/ "./src/render-about.js":
/*!*****************************!*\
  !*** ./src/render-about.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/doc.js */ \"./src/lib/doc.js\");\n/* harmony import */ var _lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/lorem.js */ \"./src/lib/lorem.js\");\n/* harmony import */ var _img_milk_and_cookies_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/milk-and-cookies.jpg */ \"./src/img/milk-and-cookies.jpg\");\n/* harmony import */ var _img_christmas_shop_window_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/christmas-shop-window.jpg */ \"./src/img/christmas-shop-window.jpg\");\n\n\n\n\n\n\nfunction render(contentNode) {\n    contentNode.append(\n        _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".section\", [\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img({ src: _img_milk_and_cookies_jpg__WEBPACK_IMPORTED_MODULE_2__ }),\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".text-block\", [\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(\"About Us\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(\"Our mission is to warm up your inner child with Christmas wonder, all year round.\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(\"Actually, this is not a real restaurant. I made this mock website as part of the Odin Project curriculum to practice my webpack skills.\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p([\"While I have your attention, I would like to acknowledge the photographers of this site's images. \",\n                    \"The Christmas shop window on the home page was photographed by \",\n                    _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({ href: \"https://unsplash.com/@alexandra_p_d\", text: \"Alexandra P. D. on Unsplash\" }),\n                    \". Credit for the menu photos, top to bottom, goes to \",\n                    _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({ href: \"https://unsplash.com/@thenixcompany\", text: \"The Nix Company\" }),\n                    \", \",\n                    _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({ href: \"https://unsplash.com/@carissagan\", text: \"Carissa Gan\" }),\n                    \", \",\n                    _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({ href: \"https://unsplash.com/@micheile\", text: \"Micheile Henderson\" }),\n                    \", and \",\n                    _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({ href: \"https://unsplash.com/@anitaaustvika\", text: \"Anita Austvika\" }),\n                    \". The milk and cookies on the About page were photographed by \",\n                    _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a({ href: \"https://unsplash.com/@annesophiephotographe\", text: \"Anne-Sophie Benoit\"}),\n                    \".\"\n                ]),\n            ]),\n        ]),\n        _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".section\", [\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".text-block\", [\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(\"Our History\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p([\n                    \"Our name is inspired by the classic movie \",\n                    _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].em(\"Miracle on 34th Street\"), \". \",\n                    (0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(22),\n                ]),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p((0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(23)),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p((0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(24)),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p((0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(25)),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".filigree\"),\n            ]),\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img({ src: _img_christmas_shop_window_jpg__WEBPACK_IMPORTED_MODULE_3__ }),\n        ]),\n    );\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://odin-restaurant/./src/render-about.js?");

/***/ }),

/***/ "./src/render-contact.js":
/*!*******************************!*\
  !*** ./src/render-contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/doc.js */ \"./src/lib/doc.js\");\n/* harmony import */ var _img_christmas_shop_window_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/christmas-shop-window.jpg */ \"./src/img/christmas-shop-window.jpg\");\n\n\n\n\nfunction render(contentNode) {\n    contentNode.append(\n        _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".section\", [\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img({ src: _img_christmas_shop_window_jpg__WEBPACK_IMPORTED_MODULE_1__ }),\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".text-block\", [\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(\"Contact Us\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(\"Would you like us to cater your event? Do you have questions about our menu?\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(\"Use the form below to get in touch with us. We'll respond by email within two business days. Or at least, we would if this were a real restaurant.\"),\n\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\"form#contact-form\", [\n                    _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fieldset([\n                        _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label({ for: \"name\", children: [\n                            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span(\"Name:\"),\n                            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input({\n                                id: \"name\",\n                                name: \"name\",\n                                type: \"text\",\n                                placeholder: \"Jane Doe\"\n                            }),\n                        ]}),\n                        _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label({ for: \"email\", children: [\n                            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span(\"Email:\"),\n                            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input({\n                                id: \"email\", \n                                name: \"email\", \n                                type: \"email\",\n                                required: true,\n                                placeholder: \"your.email@example.com\"\n                            }),\n                        ]}),\n                    ]),\n                    _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fieldset({ className: \"wide\", children: [\n                        _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label({ for: \"message\" , children: [\n                            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span(\"Message: \"),\n                            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].textarea({ id: \"message\", name: \"message\", required: true,\n                                placeholder: \"Your message goes here\" }),\n                        ]}),\n                    ]}),\n                    _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button({ id: \"send-button\", text: \"Send Message\" }),\n                ]),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\"h3#contact-response.hidden\",\n                    \"Thank you! We'll email you a reply as soon as we can.\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".filigree\"),\n            ]),\n        ]),\n    );\n\n    const formNode = document.getElementById(\"contact-form\");\n    const responseNode = document.getElementById(\"contact-response\");\n\n    formNode.classList.remove(\"hidden\");\n    responseNode.classList.add(\"hidden\");\n\n    document.getElementById(\"send-button\").addEventListener(\"click\", (e) => {\n        if (formNode.checkValidity()) {\n            e.preventDefault();\n            formNode.classList.add(\"hidden\");\n            responseNode.classList.remove(\"hidden\");\n        }\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://odin-restaurant/./src/render-contact.js?");

/***/ }),

/***/ "./src/render-home.js":
/*!****************************!*\
  !*** ./src/render-home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/doc.js */ \"./src/lib/doc.js\");\n/* harmony import */ var _lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/lorem.js */ \"./src/lib/lorem.js\");\n/* harmony import */ var _img_christmas_shop_window_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/christmas-shop-window.jpg */ \"./src/img/christmas-shop-window.jpg\");\n\n\n\n\n\nfunction render(contentNode) {\n    contentNode.append(\n        _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".section\", [\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img({ src: _img_christmas_shop_window_jpg__WEBPACK_IMPORTED_MODULE_2__ }),\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".text-block\", [\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(\"Do you need a little Christmas?\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(\"Visit the 34th Street Café for Christmas cheer, any time of year.\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p((0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1)),\n\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".filigree\"),\n\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(\"Hours\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p([\"10:00 AM - 4:00 PM\", _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].br(), \"Monday through Saturday\"]),\n\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2(\"Address\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p([\"34th Street Café\", _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].br(), \n                    \"1225 34th Street\", _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].br(),\n                    \"New Donk, USA\"]\n                ),\n            ]),\n        ]),\n    );\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://odin-restaurant/./src/render-home.js?");

/***/ }),

/***/ "./src/render-menu.js":
/*!****************************!*\
  !*** ./src/render-menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/doc.js */ \"./src/lib/doc.js\");\n/* harmony import */ var _lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/lorem.js */ \"./src/lib/lorem.js\");\n/* harmony import */ var _img_roast_beef_sandwich_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/roast-beef-sandwich.jpg */ \"./src/img/roast-beef-sandwich.jpg\");\n/* harmony import */ var _img_berry_fruit_salad_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/berry-fruit-salad.jpg */ \"./src/img/berry-fruit-salad.jpg\");\n/* harmony import */ var _img_hot_cocoa_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/hot-cocoa.jpg */ \"./src/img/hot-cocoa.jpg\");\n/* harmony import */ var _img_plum_pie_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/plum-pie.jpg */ \"./src/img/plum-pie.jpg\");\n\n\n\n\n\n\n\n\nfunction render(contentNode) {\n    const menuItem = function(name, description) {\n        return _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].li([\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\"span.dish-name\", name),\n            \" \",\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\"span.dish-description\", description),\n        ]);\n    }\n\n    contentNode.append(\n        _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".section\", [\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img({ src: _img_roast_beef_sandwich_jpg__WEBPACK_IMPORTED_MODULE_2__ }),\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".text-block\", [\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\"h2.left\", \"Sandwiches\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul([\n                    menuItem(\"Roast Beast Sandwich\", \n                        \"A rich, meaty sandwich carved by the Grinch himself.\"\n                    ),\n                    menuItem(\"Sandwich 2\", (0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(2)),\n                    menuItem(\"Sandwich 3\", (0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3)),\n                ]),\n            ]),\n        ]),\n    );\n\n    contentNode.append(\n        _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".section\", [\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".text-block\", [\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\"h2.right\", \"Sides\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul([\n                    menuItem(\"Berry Merry Fruit Salad\",\n                        \"An assortment of fresh fruit and nuts: blueberries, strawberries, kiwi, peaches, and walnuts.\"\n                    ),\n                    menuItem(\"Chestnuts Roasting\",\n                        \"Roasted chestnuts, hot off the open fire. Guaranteed to keep Jack Frost at bay.\"\n                    ),\n                    menuItem(\"Chris Kringle's Curly Fries\", (0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(23)),\n                    menuItem(\"Who Hash Browns\", (0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(24)),\n                ]),\n            ]),\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img({ src: _img_berry_fruit_salad_jpg__WEBPACK_IMPORTED_MODULE_3__ }),\n        ]),\n    );\n\n    contentNode.append(\n        _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".section\", [\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img({ src: _img_hot_cocoa_jpg__WEBPACK_IMPORTED_MODULE_4__ }),\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".text-block\", [\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\"h2.left\", \"Beverages\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul([\n                    menuItem(\"Hot Cocoa\",\n                        \"Available in classic, peppermint, or cinnamon.\"\n                    ),\n                    menuItem(\"Polar Espresso\", (0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(31)),\n                    menuItem(\"Merry Mocha\", (0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(32)),\n                    menuItem(\"Milk\",\n                        \"Your choice of whole, skim, or 2% milk. The Santa-approved complement to cookies.\"\n                    ),\n                    menuItem(\"Chocolate Milk\",\n                        \"Your choice of whole, skim, or 2% chocolate milk. We blend it with our homestyle chocolate syrup.\"\n                    ),\n                    menuItem(\"Wassail\",\n                        \"The warm, spicy holiday classic. We flavor our wassail with real orange zest.\"\n                    ),\n                    menuItem(\"Cider\",\n                        \"We serve it the way you like it: warm or cool, plain or spiced.\"\n                    ),\n                    menuItem(\"Peppermint Tea\", (0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(33))\n                ]),\n            ]),\n        ]),\n    );\n\n    contentNode.append(\n        _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".section\", [\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".text-block\", [\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\"h2.right\", \"Sweet Treats\"),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul([\n                    menuItem(\"Christmas Pie\",\n                        \"A rich plum pie with a buttery crust. Little Jack Horner would be pleased!\"\n                    ),\n                    menuItem(\"Figgy Pudding\", \n                        \"You asked for it (again and again and AGAIN), and we've got it!\"\n                    ),\n                    menuItem(\"Chocolate Chip Cookies\", (0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(43)),\n                    menuItem(\"Christmas Cookie Sampler\", (0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(44)),\n                    menuItem(\"Jolly Jelly Scones\", (0,_lib_lorem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(45)),\n                ]),\n                _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].make(\".filigree\"),\n            ]),\n            _lib_doc_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img({ src: _img_plum_pie_jpg__WEBPACK_IMPORTED_MODULE_5__ }),\n        ]),\n    );\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://odin-restaurant/./src/render-menu.js?");

/***/ }),

/***/ "./src/font/Christmas Squad.otf":
/*!**************************************!*\
  !*** ./src/font/Christmas Squad.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8f09f3013cae5195902.otf\";\n\n//# sourceURL=webpack://odin-restaurant/./src/font/Christmas_Squad.otf?");

/***/ }),

/***/ "./src/img/berry-fruit-salad.jpg":
/*!***************************************!*\
  !*** ./src/img/berry-fruit-salad.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d6a0fa6343ebe105ed2.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/img/berry-fruit-salad.jpg?");

/***/ }),

/***/ "./src/img/christmas-shop-window.jpg":
/*!*******************************************!*\
  !*** ./src/img/christmas-shop-window.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ceac3be7da55228308d.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/img/christmas-shop-window.jpg?");

/***/ }),

/***/ "./src/img/hot-cocoa.jpg":
/*!*******************************!*\
  !*** ./src/img/hot-cocoa.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1174a6e5ecb72a57f1d6.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/img/hot-cocoa.jpg?");

/***/ }),

/***/ "./src/img/milk-and-cookies.jpg":
/*!**************************************!*\
  !*** ./src/img/milk-and-cookies.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"22b6af8d911e57f37ec8.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/img/milk-and-cookies.jpg?");

/***/ }),

/***/ "./src/img/plum-pie.jpg":
/*!******************************!*\
  !*** ./src/img/plum-pie.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea2b6034728072db4f46.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/img/plum-pie.jpg?");

/***/ }),

/***/ "./src/img/roast-beef-sandwich.jpg":
/*!*****************************************!*\
  !*** ./src/img/roast-beef-sandwich.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a23d9f083928117043e2.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/img/roast-beef-sandwich.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;