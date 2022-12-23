"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Comic Sans MS', 'Comic Sans', cursive;\n}\n\nh1 {\n  margin: 2rem 1rem;\n}\n\ninput[type=text] {\n  border: 0.125rem solid black;\n  padding: 0.25rem 1rem;\n}\n\nlabel,\ninput[type=text] {\n  width: 100%;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 3rem;\n  padding: 0 3rem;\n}\n\n.heading-cont {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.refresh-btn,\n.scoreboard-title {\n  display: inline-block;\n}\n\ninput[type=submit],\n.refresh-btn {\n  margin-left: 1rem;\n  border: 0.125rem solid black;\n  outline: none;\n  background: none;\n  box-shadow: 0.25rem 0.25rem 0 0 rgb(0 0 0);\n  padding: 0.25rem 1rem;\n  font-weight: bolder;\n}\n\n.scoreboard-title {\n  margin: auto 0;\n}\n\n.score-list-item {\n  list-style-type: none;\n  text-decoration: none;\n}\n\n.scoreboard {\n  border: black solid 0.2rem;\n  background: lightskyblue;\n}\n\n.scoreboard li:nth-child(even) {\n  background: antiquewhite;\n}\n\n.score-card {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 1rem;\n}\n\n.score-name,\n.score-points {\n  display: inline;\n}\n\n.score-name {\n  text-transform: capitalize;\n}\n\n.score-name::after {\n  content: ':';\n}\n\n.score-points::before {\n  content: ' ';\n  margin: 0 0.5rem;\n}\n\n.score-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n\n.form-btn {\n  align-self: flex-end;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,mDAAmD;AACrD;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;;EAEE,iBAAiB;EACjB,4BAA4B;EAC5B,aAAa;EACb,gBAAgB;EAChB,0CAA0C;EAC1C,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Comic Sans MS', 'Comic Sans', cursive;\n}\n\nh1 {\n  margin: 2rem 1rem;\n}\n\ninput[type=text] {\n  border: 0.125rem solid black;\n  padding: 0.25rem 1rem;\n}\n\nlabel,\ninput[type=text] {\n  width: 100%;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 3rem;\n  padding: 0 3rem;\n}\n\n.heading-cont {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.refresh-btn,\n.scoreboard-title {\n  display: inline-block;\n}\n\ninput[type=submit],\n.refresh-btn {\n  margin-left: 1rem;\n  border: 0.125rem solid black;\n  outline: none;\n  background: none;\n  box-shadow: 0.25rem 0.25rem 0 0 rgb(0 0 0);\n  padding: 0.25rem 1rem;\n  font-weight: bolder;\n}\n\n.scoreboard-title {\n  margin: auto 0;\n}\n\n.score-list-item {\n  list-style-type: none;\n  text-decoration: none;\n}\n\n.scoreboard {\n  border: black solid 0.2rem;\n  background: lightskyblue;\n}\n\n.scoreboard li:nth-child(even) {\n  background: antiquewhite;\n}\n\n.score-card {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 1rem;\n}\n\n.score-name,\n.score-points {\n  display: inline;\n}\n\n.score-name {\n  text-transform: capitalize;\n}\n\n.score-name::after {\n  content: ':';\n}\n\n.score-points::before {\n  content: ' ';\n  margin: 0 0.5rem;\n}\n\n.score-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n\n.form-btn {\n  align-self: flex-end;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_ScoreBoardPresenter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ScoreBoardPresenter.js */ "./src/modules/ScoreBoardPresenter.js");
/* harmony import */ var _modules_ScoreFormPresenter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ScoreFormPresenter.js */ "./src/modules/ScoreFormPresenter.js");




(() => {
  const container = document.getElementById('container');
  const scoreboard = new _modules_ScoreBoardPresenter_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const scoreform = new _modules_ScoreFormPresenter_js__WEBPACK_IMPORTED_MODULE_2__["default"](scoreboard);
  container.appendChild(scoreboard.view.ui);
  container.appendChild(scoreform.view.ui);
})();

/***/ }),

/***/ "./src/modules/LeaderboardService.js":
/*!*******************************************!*\
  !*** ./src/modules/LeaderboardService.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScorePresenter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScorePresenter.js */ "./src/modules/ScorePresenter.js");


class LeaderBoardService {
  #baseUrl;

  constructor() {
    this.#baseUrl = new URL('/api/games/FhzaUvi7V3nF1ff0az0S/scores',
      'https://us-central1-js-capstone-backend.cloudfunctions.net');
  }

  getScores = async () => {
    const scorePresenters = [];
    await fetch(this.#baseUrl)
      .then((response) => response.json())
      .then((json) => json.result.forEach(
        ({ user, score }) => scorePresenters.push(new _ScorePresenter_js__WEBPACK_IMPORTED_MODULE_0__["default"](user, score)),
      ));

    return scorePresenters;
  }

  postScore = async (scoreModel) => {
    const response = await fetch(this.#baseUrl, {
      method: 'POST',
      body: JSON.stringify(scoreModel),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json());

    return response.result;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeaderBoardService);


/***/ }),

/***/ "./src/modules/ScoreBoardPresenter.js":
/*!********************************************!*\
  !*** ./src/modules/ScoreBoardPresenter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScorePresenter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScorePresenter.js */ "./src/modules/ScorePresenter.js");
/* harmony import */ var _ScoreBoardView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoreBoardView.js */ "./src/modules/ScoreBoardView.js");
/* harmony import */ var _LeaderboardService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeaderboardService.js */ "./src/modules/LeaderboardService.js");




class ScoreBoardPresenter {
  #model;

  #view;

  constructor() {
    this.#model = new _LeaderboardService_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.#view = new _ScoreBoardView_js__WEBPACK_IMPORTED_MODULE_1__["default"](this);
  }

  get view() {
    return this.#view;
  }

  get model() {
    return this.#model;
  }

  scoreUis = async () => {
    const uis = [];
    const presenters = await this.#model.getScores();
    presenters.forEach((scorePresenter) => uis.push(scorePresenter.view.ui));
    return uis;
  }

  addScore = async (scoreName, scorePoints) => {
    const scorePresenter = new _ScorePresenter_js__WEBPACK_IMPORTED_MODULE_0__["default"](scoreName, scorePoints);
    await this.#model.postScore(scorePresenter.model);
    await this.#view.refresh(); // Fetching data for better user experience.
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScoreBoardPresenter);

/***/ }),

/***/ "./src/modules/ScoreBoardView.js":
/*!***************************************!*\
  !*** ./src/modules/ScoreBoardView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ScoreBoardView {
  #presenter;

  #listUi;

  #ui;

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
  }

  get ui() {
    return this.#ui;
  }

  #createDOMElements = () => {
    const section = document.createElement('section');
    section.setAttribute('class', 'scoreboard-cont');
    const heading = document.createElement('div');
    heading.setAttribute('class', 'heading-cont');
    const title = document.createElement('h2');
    title.setAttribute('class', 'scoreboard-title');
    title.innerText = 'Recent scores';
    heading.appendChild(title);
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'refresh-btn');
    btn.innerText = 'Refresh';
    btn.addEventListener('click', this.refresh);
    heading.appendChild(btn);
    this.#listUi = document.createElement('ul');
    this.#listUi.setAttribute('class', 'scoreboard');
    this.refresh();
    section.appendChild(heading);
    section.appendChild(this.#listUi);
    return section;
  }

  refresh = async () => {
    const uis = await this.#presenter.scoreUis();
    this.#listUi.replaceChildren(...uis);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScoreBoardView);

/***/ }),

/***/ "./src/modules/ScoreFormPresenter.js":
/*!*******************************************!*\
  !*** ./src/modules/ScoreFormPresenter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScoreFormView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScoreFormView.js */ "./src/modules/ScoreFormView.js");


class ScoreFormPresenter {
  #scoreBoard;

  #view;

  constructor(scoreBoardPresenter) {
    this.#view = new _ScoreFormView_js__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.#scoreBoard = scoreBoardPresenter;
  }

  get view() {
    return this.#view;
  }

  submit = (scoreName, scorePoints) => {
    this.#scoreBoard.addScore(scoreName, scorePoints);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScoreFormPresenter);

/***/ }),

/***/ "./src/modules/ScoreFormView.js":
/*!**************************************!*\
  !*** ./src/modules/ScoreFormView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ScoreFormView {
  #presenter;

  #form;

  #name;

  #points;

  #ui;

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
  }

  get ui() {
    return this.#ui;
  }

  #createDOMElements = () => {
    const section = document.createElement('section');
    section.setAttribute('class', 'score-form-cont');
    this.#form = document.createElement('form');
    this.#form.setAttribute('class', 'score-form');
    this.#form.addEventListener('submit', this.#submit);
    section.appendChild(this.#form);
    const title = document.createElement('h2');
    title.setAttribute('class', 'form-title');
    title.innerText = 'Add your score';
    this.#form.appendChild(title);
    let label = document.createElement('label');
    this.#name = document.createElement('input');
    this.#name.setAttribute('type', 'text');
    this.#name.setAttribute('placeholder', 'Your name');
    this.#name.required = true;
    label.appendChild(this.#name);
    this.#form.appendChild(label);
    label = document.createElement('label');
    this.#points = document.createElement('input');
    this.#points.setAttribute('type', 'text');
    this.#points.setAttribute('placeholder', 'Your score');
    this.#points.required = true;
    label.appendChild(this.#points);
    this.#form.appendChild(label);
    const input = document.createElement('input');
    input.setAttribute('type', 'submit');
    input.setAttribute('class', 'form-btn');
    this.#form.appendChild(input);

    return section;
  }

  #submit = (evt) => {
    evt.preventDefault();
    this.#presenter.submit(this.#name.value, this.#points.value);
    this.#reset();
  }

  #reset = () => this.#form.reset();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScoreFormView);


/***/ }),

/***/ "./src/modules/ScoreModel.js":
/*!***********************************!*\
  !*** ./src/modules/ScoreModel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ScoreModel {
  #name;

  #points;

  constructor(name, points) {
    this.#name = name;
    this.#points = points;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get points() {
    return this.#points;
  }

  set points(value) {
    this.#points = value;
  }

  toJSON = () => ({
    user: this.#name,
    score: this.#points,
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScoreModel);

/***/ }),

/***/ "./src/modules/ScorePresenter.js":
/*!***************************************!*\
  !*** ./src/modules/ScorePresenter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScoreModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScoreModel.js */ "./src/modules/ScoreModel.js");
/* harmony import */ var _ScoreView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoreView.js */ "./src/modules/ScoreView.js");



class ScorePresenter {
  #model;

  #view;

  constructor(name, points) {
    this.#model = new _ScoreModel_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, points);
    this.#view = new _ScoreView_js__WEBPACK_IMPORTED_MODULE_1__["default"](this);
  }

  get model() {
    return this.#model;
  }

  get view() {
    return this.#view;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScorePresenter);

/***/ }),

/***/ "./src/modules/ScoreView.js":
/*!**********************************!*\
  !*** ./src/modules/ScoreView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ScoreView {
  #presenter;

  #ui;

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
  }

  get ui() {
    return this.#ui;
  }

  #createDOMElements = () => {
    let element;
    const div = document.createElement('div');
    div.setAttribute('class', 'score-card');
    element = document.createElement('p');
    element.innerText = this.#presenter.model.name;
    element.setAttribute('class', 'score-name');
    div.appendChild(element);
    element = document.createElement('p');
    element.innerText = this.#presenter.model.points;
    element.setAttribute('class', 'score-points');
    div.appendChild(element);
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'score-list-item');
    listItem.appendChild(div);
    return listItem;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScoreView);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDdEI3QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvTGVhZGVyYm9hcmRTZXJ2aWNlLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvU2NvcmVCb2FyZFByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL1Njb3JlQm9hcmRWaWV3LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvU2NvcmVGb3JtUHJlc2VudGVyLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvU2NvcmVGb3JtVmlldy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL1Njb3JlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9TY29yZVByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL1Njb3JlVmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ0NvbWljIFNhbnMgTVMnLCAnQ29taWMgU2FucycsIGN1cnNpdmU7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbjogMnJlbSAxcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIGJvcmRlcjogMC4xMjVyZW0gc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxufVxcblxcbmxhYmVsLFxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDNyZW07XFxuICBwYWRkaW5nOiAwIDNyZW07XFxufVxcblxcbi5oZWFkaW5nLWNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucmVmcmVzaC1idG4sXFxuLnNjb3JlYm9hcmQtdGl0bGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXFxuLnJlZnJlc2gtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCBibGFjaztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm94LXNoYWRvdzogMC4yNXJlbSAwLjI1cmVtIDAgMCByZ2IoMCAwIDApO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnNjb3JlYm9hcmQtdGl0bGUge1xcbiAgbWFyZ2luOiBhdXRvIDA7XFxufVxcblxcbi5zY29yZS1saXN0LWl0ZW0ge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2NvcmVib2FyZCB7XFxuICBib3JkZXI6IGJsYWNrIHNvbGlkIDAuMnJlbTtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuLnNjb3JlYm9hcmQgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQ6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuLnNjb3JlLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5zY29yZS1uYW1lLFxcbi5zY29yZS1wb2ludHMge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uc2NvcmUtbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnNjb3JlLW5hbWU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICc6JztcXG59XFxuXFxuLnNjb3JlLXBvaW50czo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5zY29yZS1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZvcm0tYnRuIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1QsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdDb21pYyBTYW5zIE1TJywgJ0NvbWljIFNhbnMnLCBjdXJzaXZlO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDJyZW0gMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbn1cXG5cXG5sYWJlbCxcXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgcGFkZGluZzogMCAzcmVtO1xcbn1cXG5cXG4uaGVhZGluZy1jb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnJlZnJlc2gtYnRuLFxcbi5zY29yZWJvYXJkLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxcbi5yZWZyZXNoLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIGJvcmRlcjogMC4xMjVyZW0gc29saWQgYmxhY2s7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwIDAgcmdiKDAgMCAwKTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5zY29yZWJvYXJkLXRpdGxlIHtcXG4gIG1hcmdpbjogYXV0byAwO1xcbn1cXG5cXG4uc2NvcmUtbGlzdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNjb3JlYm9hcmQge1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAwLjJyZW07XFxuICBiYWNrZ3JvdW5kOiBsaWdodHNreWJsdWU7XFxufVxcblxcbi5zY29yZWJvYXJkIGxpOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbi5zY29yZS1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4uc2NvcmUtbmFtZSxcXG4uc2NvcmUtcG9pbnRzIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLnNjb3JlLW5hbWUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5zY29yZS1uYW1lOjphZnRlciB7XFxuICBjb250ZW50OiAnOic7XFxufVxcblxcbi5zY29yZS1wb2ludHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnICc7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uc2NvcmUtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgU2NvcmVCb2FyZFByZXNlbnRlciBmcm9tICcuL21vZHVsZXMvU2NvcmVCb2FyZFByZXNlbnRlci5qcyc7XG5pbXBvcnQgU2NvcmVGb3JtUHJlc2VudGVyIGZyb20gJy4vbW9kdWxlcy9TY29yZUZvcm1QcmVzZW50ZXIuanMnO1xuXG4oKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG4gIGNvbnN0IHNjb3JlYm9hcmQgPSBuZXcgU2NvcmVCb2FyZFByZXNlbnRlcigpO1xuICBjb25zdCBzY29yZWZvcm0gPSBuZXcgU2NvcmVGb3JtUHJlc2VudGVyKHNjb3JlYm9hcmQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVib2FyZC52aWV3LnVpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlZm9ybS52aWV3LnVpKTtcbn0pKCk7IiwiaW1wb3J0IFNjb3JlUHJlc2VudGVyIGZyb20gJy4vU2NvcmVQcmVzZW50ZXIuanMnO1xuXG5jbGFzcyBMZWFkZXJCb2FyZFNlcnZpY2Uge1xuICAjYmFzZVVybDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNiYXNlVXJsID0gbmV3IFVSTCgnL2FwaS9nYW1lcy9GaHphVXZpN1YzbkYxZmYwYXowUy9zY29yZXMnLFxuICAgICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQnKTtcbiAgfVxuXG4gIGdldFNjb3JlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzY29yZVByZXNlbnRlcnMgPSBbXTtcbiAgICBhd2FpdCBmZXRjaCh0aGlzLiNiYXNlVXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoanNvbikgPT4ganNvbi5yZXN1bHQuZm9yRWFjaChcbiAgICAgICAgKHsgdXNlciwgc2NvcmUgfSkgPT4gc2NvcmVQcmVzZW50ZXJzLnB1c2gobmV3IFNjb3JlUHJlc2VudGVyKHVzZXIsIHNjb3JlKSksXG4gICAgICApKTtcblxuICAgIHJldHVybiBzY29yZVByZXNlbnRlcnM7XG4gIH1cblxuICBwb3N0U2NvcmUgPSBhc3luYyAoc2NvcmVNb2RlbCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy4jYmFzZVVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzY29yZU1vZGVsKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuICAgIHJldHVybiByZXNwb25zZS5yZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVhZGVyQm9hcmRTZXJ2aWNlO1xuIiwiaW1wb3J0IFNjb3JlUHJlc2VudGVyIGZyb20gJy4vU2NvcmVQcmVzZW50ZXIuanMnO1xuaW1wb3J0IFNjb3JlQm9hcmRWaWV3IGZyb20gJy4vU2NvcmVCb2FyZFZpZXcuanMnO1xuaW1wb3J0IExlYWRlckJvYXJkU2VydmljZSBmcm9tICcuL0xlYWRlcmJvYXJkU2VydmljZS5qcyc7XG5cbmNsYXNzIFNjb3JlQm9hcmRQcmVzZW50ZXIge1xuICAjbW9kZWw7XG5cbiAgI3ZpZXc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jbW9kZWwgPSBuZXcgTGVhZGVyQm9hcmRTZXJ2aWNlKCk7XG4gICAgdGhpcy4jdmlldyA9IG5ldyBTY29yZUJvYXJkVmlldyh0aGlzKTtcbiAgfVxuXG4gIGdldCB2aWV3KCkge1xuICAgIHJldHVybiB0aGlzLiN2aWV3O1xuICB9XG5cbiAgZ2V0IG1vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLiNtb2RlbDtcbiAgfVxuXG4gIHNjb3JlVWlzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVpcyA9IFtdO1xuICAgIGNvbnN0IHByZXNlbnRlcnMgPSBhd2FpdCB0aGlzLiNtb2RlbC5nZXRTY29yZXMoKTtcbiAgICBwcmVzZW50ZXJzLmZvckVhY2goKHNjb3JlUHJlc2VudGVyKSA9PiB1aXMucHVzaChzY29yZVByZXNlbnRlci52aWV3LnVpKSk7XG4gICAgcmV0dXJuIHVpcztcbiAgfVxuXG4gIGFkZFNjb3JlID0gYXN5bmMgKHNjb3JlTmFtZSwgc2NvcmVQb2ludHMpID0+IHtcbiAgICBjb25zdCBzY29yZVByZXNlbnRlciA9IG5ldyBTY29yZVByZXNlbnRlcihzY29yZU5hbWUsIHNjb3JlUG9pbnRzKTtcbiAgICBhd2FpdCB0aGlzLiNtb2RlbC5wb3N0U2NvcmUoc2NvcmVQcmVzZW50ZXIubW9kZWwpO1xuICAgIGF3YWl0IHRoaXMuI3ZpZXcucmVmcmVzaCgpOyAvLyBGZXRjaGluZyBkYXRhIGZvciBiZXR0ZXIgdXNlciBleHBlcmllbmNlLlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlQm9hcmRQcmVzZW50ZXI7IiwiY2xhc3MgU2NvcmVCb2FyZFZpZXcge1xuICAjcHJlc2VudGVyO1xuXG4gICNsaXN0VWk7XG5cbiAgI3VpO1xuXG4gIGNvbnN0cnVjdG9yKHByZXNlbnRlcikge1xuICAgIHRoaXMuI3ByZXNlbnRlciA9IHByZXNlbnRlcjtcbiAgICB0aGlzLiN1aSA9IHRoaXMuI2NyZWF0ZURPTUVsZW1lbnRzKCk7XG4gIH1cblxuICBnZXQgdWkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3VpO1xuICB9XG5cbiAgI2NyZWF0ZURPTUVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Njb3JlYm9hcmQtY29udCcpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGluZy1jb250Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2NvcmVib2FyZC10aXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdSZWNlbnQgc2NvcmVzJztcbiAgICBoZWFkaW5nLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JlZnJlc2gtYnRuJyk7XG4gICAgYnRuLmlubmVyVGV4dCA9ICdSZWZyZXNoJztcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlZnJlc2gpO1xuICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB0aGlzLiNsaXN0VWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHRoaXMuI2xpc3RVaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Njb3JlYm9hcmQnKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGhpcy4jbGlzdFVpKTtcbiAgICByZXR1cm4gc2VjdGlvbjtcbiAgfVxuXG4gIHJlZnJlc2ggPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdWlzID0gYXdhaXQgdGhpcy4jcHJlc2VudGVyLnNjb3JlVWlzKCk7XG4gICAgdGhpcy4jbGlzdFVpLnJlcGxhY2VDaGlsZHJlbiguLi51aXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlQm9hcmRWaWV3OyIsImltcG9ydCBTY29yZUZvcm1WaWV3IGZyb20gJy4vU2NvcmVGb3JtVmlldy5qcyc7XG5cbmNsYXNzIFNjb3JlRm9ybVByZXNlbnRlciB7XG4gICNzY29yZUJvYXJkO1xuXG4gICN2aWV3O1xuXG4gIGNvbnN0cnVjdG9yKHNjb3JlQm9hcmRQcmVzZW50ZXIpIHtcbiAgICB0aGlzLiN2aWV3ID0gbmV3IFNjb3JlRm9ybVZpZXcodGhpcyk7XG4gICAgdGhpcy4jc2NvcmVCb2FyZCA9IHNjb3JlQm9hcmRQcmVzZW50ZXI7XG4gIH1cblxuICBnZXQgdmlldygpIHtcbiAgICByZXR1cm4gdGhpcy4jdmlldztcbiAgfVxuXG4gIHN1Ym1pdCA9IChzY29yZU5hbWUsIHNjb3JlUG9pbnRzKSA9PiB7XG4gICAgdGhpcy4jc2NvcmVCb2FyZC5hZGRTY29yZShzY29yZU5hbWUsIHNjb3JlUG9pbnRzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZUZvcm1QcmVzZW50ZXI7IiwiY2xhc3MgU2NvcmVGb3JtVmlldyB7XG4gICNwcmVzZW50ZXI7XG5cbiAgI2Zvcm07XG5cbiAgI25hbWU7XG5cbiAgI3BvaW50cztcblxuICAjdWk7XG5cbiAgY29uc3RydWN0b3IocHJlc2VudGVyKSB7XG4gICAgdGhpcy4jcHJlc2VudGVyID0gcHJlc2VudGVyO1xuICAgIHRoaXMuI3VpID0gdGhpcy4jY3JlYXRlRE9NRWxlbWVudHMoKTtcbiAgfVxuXG4gIGdldCB1aSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdWk7XG4gIH1cblxuICAjY3JlYXRlRE9NRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2NvcmUtZm9ybS1jb250Jyk7XG4gICAgdGhpcy4jZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0aGlzLiNmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2NvcmUtZm9ybScpO1xuICAgIHRoaXMuI2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy4jc3VibWl0KTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuI2Zvcm0pO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0tdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnQWRkIHlvdXIgc2NvcmUnO1xuICAgIHRoaXMuI2Zvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGhpcy4jbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy4jbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRoaXMuI25hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIG5hbWUnKTtcbiAgICB0aGlzLiNuYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZCh0aGlzLiNuYW1lKTtcbiAgICB0aGlzLiNmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGhpcy4jcG9pbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aGlzLiNwb2ludHMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0aGlzLiNwb2ludHMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIHNjb3JlJyk7XG4gICAgdGhpcy4jcG9pbnRzLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZCh0aGlzLiNwb2ludHMpO1xuICAgIHRoaXMuI2Zvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWJ0bicpO1xuICAgIHRoaXMuI2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb247XG4gIH1cblxuICAjc3VibWl0ID0gKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuI3ByZXNlbnRlci5zdWJtaXQodGhpcy4jbmFtZS52YWx1ZSwgdGhpcy4jcG9pbnRzLnZhbHVlKTtcbiAgICB0aGlzLiNyZXNldCgpO1xuICB9XG5cbiAgI3Jlc2V0ID0gKCkgPT4gdGhpcy4jZm9ybS5yZXNldCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZUZvcm1WaWV3O1xuIiwiY2xhc3MgU2NvcmVNb2RlbCB7XG4gICNuYW1lO1xuXG4gICNwb2ludHM7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgcG9pbnRzKSB7XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgdGhpcy4jcG9pbnRzID0gcG9pbnRzO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25hbWU7XG4gIH1cblxuICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgIHRoaXMuI25hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3BvaW50cztcbiAgfVxuXG4gIHNldCBwb2ludHModmFsdWUpIHtcbiAgICB0aGlzLiNwb2ludHMgPSB2YWx1ZTtcbiAgfVxuXG4gIHRvSlNPTiA9ICgpID0+ICh7XG4gICAgdXNlcjogdGhpcy4jbmFtZSxcbiAgICBzY29yZTogdGhpcy4jcG9pbnRzLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZU1vZGVsOyIsImltcG9ydCBTY29yZU1vZGVsIGZyb20gJy4vU2NvcmVNb2RlbC5qcyc7XG5pbXBvcnQgU2NvcmVWaWV3IGZyb20gJy4vU2NvcmVWaWV3LmpzJztcblxuY2xhc3MgU2NvcmVQcmVzZW50ZXIge1xuICAjbW9kZWw7XG5cbiAgI3ZpZXc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgcG9pbnRzKSB7XG4gICAgdGhpcy4jbW9kZWwgPSBuZXcgU2NvcmVNb2RlbChuYW1lLCBwb2ludHMpO1xuICAgIHRoaXMuI3ZpZXcgPSBuZXcgU2NvcmVWaWV3KHRoaXMpO1xuICB9XG5cbiAgZ2V0IG1vZGVsKCkge1xuICAgIHJldHVybiB0aGlzLiNtb2RlbDtcbiAgfVxuXG4gIGdldCB2aWV3KCkge1xuICAgIHJldHVybiB0aGlzLiN2aWV3O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlUHJlc2VudGVyOyIsImNsYXNzIFNjb3JlVmlldyB7XG4gICNwcmVzZW50ZXI7XG5cbiAgI3VpO1xuXG4gIGNvbnN0cnVjdG9yKHByZXNlbnRlcikge1xuICAgIHRoaXMuI3ByZXNlbnRlciA9IHByZXNlbnRlcjtcbiAgICB0aGlzLiN1aSA9IHRoaXMuI2NyZWF0ZURPTUVsZW1lbnRzKCk7XG4gIH1cblxuICBnZXQgdWkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3VpO1xuICB9XG5cbiAgI2NyZWF0ZURPTUVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGxldCBlbGVtZW50O1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Njb3JlLWNhcmQnKTtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy4jcHJlc2VudGVyLm1vZGVsLm5hbWU7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Njb3JlLW5hbWUnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuI3ByZXNlbnRlci5tb2RlbC5wb2ludHM7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Njb3JlLXBvaW50cycpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzY29yZS1saXN0LWl0ZW0nKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHJldHVybiBsaXN0SXRlbTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZVZpZXc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9