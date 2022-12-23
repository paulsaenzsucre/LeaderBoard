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
    this.#form.addEventListener('keypress', this.#keypress);
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

  #keypress = (evt) => {
    if (evt.key === 'Enter') {
      this.#form.dispatchEvent('submit');
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFCLHFEQUFTO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7OztBQ3RCN0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL0xlYWRlcmJvYXJkU2VydmljZS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL1Njb3JlQm9hcmRQcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9TY29yZUJvYXJkVmlldy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL1Njb3JlRm9ybVByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9tb2R1bGVzL1Njb3JlRm9ybVZpZXcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9TY29yZU1vZGVsLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvU2NvcmVQcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvbW9kdWxlcy9TY29yZVZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdDb21pYyBTYW5zIE1TJywgJ0NvbWljIFNhbnMnLCBjdXJzaXZlO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW46IDJyZW0gMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbn1cXG5cXG5sYWJlbCxcXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgcGFkZGluZzogMCAzcmVtO1xcbn1cXG5cXG4uaGVhZGluZy1jb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnJlZnJlc2gtYnRuLFxcbi5zY29yZWJvYXJkLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxcbi5yZWZyZXNoLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIGJvcmRlcjogMC4xMjVyZW0gc29saWQgYmxhY2s7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwIDAgcmdiKDAgMCAwKTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5zY29yZWJvYXJkLXRpdGxlIHtcXG4gIG1hcmdpbjogYXV0byAwO1xcbn1cXG5cXG4uc2NvcmUtbGlzdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNjb3JlYm9hcmQge1xcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAwLjJyZW07XFxuICBiYWNrZ3JvdW5kOiBsaWdodHNreWJsdWU7XFxufVxcblxcbi5zY29yZWJvYXJkIGxpOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbi5zY29yZS1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4uc2NvcmUtbmFtZSxcXG4uc2NvcmUtcG9pbnRzIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLnNjb3JlLW5hbWUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5zY29yZS1uYW1lOjphZnRlciB7XFxuICBjb250ZW50OiAnOic7XFxufVxcblxcbi5zY29yZS1wb2ludHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnICc7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uc2NvcmUtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5mb3JtLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnQ29taWMgU2FucyBNUycsICdDb21pYyBTYW5zJywgY3Vyc2l2ZTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luOiAycmVtIDFyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG59XFxuXFxubGFiZWwsXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogM3JlbTtcXG4gIHBhZGRpbmc6IDAgM3JlbTtcXG59XFxuXFxuLmhlYWRpbmctY29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5yZWZyZXNoLWJ0bixcXG4uc2NvcmVib2FyZC10aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmlucHV0W3R5cGU9c3VibWl0XSxcXG4ucmVmcmVzaC1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIGJsYWNrO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwLjI1cmVtIDAuMjVyZW0gMCAwIHJnYigwIDAgMCk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uc2NvcmVib2FyZC10aXRsZSB7XFxuICBtYXJnaW46IGF1dG8gMDtcXG59XFxuXFxuLnNjb3JlLWxpc3QtaXRlbSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zY29yZWJvYXJkIHtcXG4gIGJvcmRlcjogYmxhY2sgc29saWQgMC4ycmVtO1xcbiAgYmFja2dyb3VuZDogbGlnaHRza3libHVlO1xcbn1cXG5cXG4uc2NvcmVib2FyZCBsaTpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4uc2NvcmUtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLnNjb3JlLW5hbWUsXFxuLnNjb3JlLXBvaW50cyB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5zY29yZS1uYW1lIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uc2NvcmUtbmFtZTo6YWZ0ZXIge1xcbiAgY29udGVudDogJzonO1xcbn1cXG5cXG4uc2NvcmUtcG9pbnRzOjpiZWZvcmUge1xcbiAgY29udGVudDogJyAnO1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG59XFxuXFxuLnNjb3JlLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1idG4ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFNjb3JlQm9hcmRQcmVzZW50ZXIgZnJvbSAnLi9tb2R1bGVzL1Njb3JlQm9hcmRQcmVzZW50ZXIuanMnO1xuaW1wb3J0IFNjb3JlRm9ybVByZXNlbnRlciBmcm9tICcuL21vZHVsZXMvU2NvcmVGb3JtUHJlc2VudGVyLmpzJztcblxuKCgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICBjb25zdCBzY29yZWJvYXJkID0gbmV3IFNjb3JlQm9hcmRQcmVzZW50ZXIoKTtcbiAgY29uc3Qgc2NvcmVmb3JtID0gbmV3IFNjb3JlRm9ybVByZXNlbnRlcihzY29yZWJvYXJkKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlYm9hcmQudmlldy51aSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZWZvcm0udmlldy51aSk7XG59KSgpOyIsImltcG9ydCBTY29yZVByZXNlbnRlciBmcm9tICcuL1Njb3JlUHJlc2VudGVyLmpzJztcblxuY2xhc3MgTGVhZGVyQm9hcmRTZXJ2aWNlIHtcbiAgI2Jhc2VVcmw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jYmFzZVVybCA9IG5ldyBVUkwoJy9hcGkvZ2FtZXMvRmh6YVV2aTdWM25GMWZmMGF6MFMvc2NvcmVzJyxcbiAgICAgICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0Jyk7XG4gIH1cblxuICBnZXRTY29yZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2NvcmVQcmVzZW50ZXJzID0gW107XG4gICAgYXdhaXQgZmV0Y2godGhpcy4jYmFzZVVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24ucmVzdWx0LmZvckVhY2goXG4gICAgICAgICh7IHVzZXIsIHNjb3JlIH0pID0+IHNjb3JlUHJlc2VudGVycy5wdXNoKG5ldyBTY29yZVByZXNlbnRlcih1c2VyLCBzY29yZSkpLFxuICAgICAgKSk7XG5cbiAgICByZXR1cm4gc2NvcmVQcmVzZW50ZXJzO1xuICB9XG5cbiAgcG9zdFNjb3JlID0gYXN5bmMgKHNjb3JlTW9kZWwpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuI2Jhc2VVcmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2NvcmVNb2RlbCksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRlckJvYXJkU2VydmljZTtcbiIsImltcG9ydCBTY29yZVByZXNlbnRlciBmcm9tICcuL1Njb3JlUHJlc2VudGVyLmpzJztcbmltcG9ydCBTY29yZUJvYXJkVmlldyBmcm9tICcuL1Njb3JlQm9hcmRWaWV3LmpzJztcbmltcG9ydCBMZWFkZXJCb2FyZFNlcnZpY2UgZnJvbSAnLi9MZWFkZXJib2FyZFNlcnZpY2UuanMnO1xuXG5jbGFzcyBTY29yZUJvYXJkUHJlc2VudGVyIHtcbiAgI21vZGVsO1xuXG4gICN2aWV3O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI21vZGVsID0gbmV3IExlYWRlckJvYXJkU2VydmljZSgpO1xuICAgIHRoaXMuI3ZpZXcgPSBuZXcgU2NvcmVCb2FyZFZpZXcodGhpcyk7XG4gIH1cblxuICBnZXQgdmlldygpIHtcbiAgICByZXR1cm4gdGhpcy4jdmlldztcbiAgfVxuXG4gIGdldCBtb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbW9kZWw7XG4gIH1cblxuICBzY29yZVVpcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB1aXMgPSBbXTtcbiAgICBjb25zdCBwcmVzZW50ZXJzID0gYXdhaXQgdGhpcy4jbW9kZWwuZ2V0U2NvcmVzKCk7XG4gICAgcHJlc2VudGVycy5mb3JFYWNoKChzY29yZVByZXNlbnRlcikgPT4gdWlzLnB1c2goc2NvcmVQcmVzZW50ZXIudmlldy51aSkpO1xuICAgIHJldHVybiB1aXM7XG4gIH1cblxuICBhZGRTY29yZSA9IGFzeW5jIChzY29yZU5hbWUsIHNjb3JlUG9pbnRzKSA9PiB7XG4gICAgY29uc3Qgc2NvcmVQcmVzZW50ZXIgPSBuZXcgU2NvcmVQcmVzZW50ZXIoc2NvcmVOYW1lLCBzY29yZVBvaW50cyk7XG4gICAgYXdhaXQgdGhpcy4jbW9kZWwucG9zdFNjb3JlKHNjb3JlUHJlc2VudGVyLm1vZGVsKTtcbiAgICBhd2FpdCB0aGlzLiN2aWV3LnJlZnJlc2goKTsgLy8gRmV0Y2hpbmcgZGF0YSBmb3IgYmV0dGVyIHVzZXIgZXhwZXJpZW5jZS5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZUJvYXJkUHJlc2VudGVyOyIsImNsYXNzIFNjb3JlQm9hcmRWaWV3IHtcbiAgI3ByZXNlbnRlcjtcblxuICAjbGlzdFVpO1xuXG4gICN1aTtcblxuICBjb25zdHJ1Y3RvcihwcmVzZW50ZXIpIHtcbiAgICB0aGlzLiNwcmVzZW50ZXIgPSBwcmVzZW50ZXI7XG4gICAgdGhpcy4jdWkgPSB0aGlzLiNjcmVhdGVET01FbGVtZW50cygpO1xuICB9XG5cbiAgZ2V0IHVpKCkge1xuICAgIHJldHVybiB0aGlzLiN1aTtcbiAgfVxuXG4gICNjcmVhdGVET01FbGVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzY29yZWJvYXJkLWNvbnQnKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlYWRpbmctY29udCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Njb3JlYm9hcmQtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnUmVjZW50IHNjb3Jlcyc7XG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZWZyZXNoLWJ0bicpO1xuICAgIGJ0bi5pbm5lclRleHQgPSAnUmVmcmVzaCc7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWZyZXNoKTtcbiAgICBoZWFkaW5nLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgdGhpcy4jbGlzdFVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0aGlzLiNsaXN0VWkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzY29yZWJvYXJkJyk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuI2xpc3RVaSk7XG4gICAgcmV0dXJuIHNlY3Rpb247XG4gIH1cblxuICByZWZyZXNoID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVpcyA9IGF3YWl0IHRoaXMuI3ByZXNlbnRlci5zY29yZVVpcygpO1xuICAgIHRoaXMuI2xpc3RVaS5yZXBsYWNlQ2hpbGRyZW4oLi4udWlzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZUJvYXJkVmlldzsiLCJpbXBvcnQgU2NvcmVGb3JtVmlldyBmcm9tICcuL1Njb3JlRm9ybVZpZXcuanMnO1xuXG5jbGFzcyBTY29yZUZvcm1QcmVzZW50ZXIge1xuICAjc2NvcmVCb2FyZDtcblxuICAjdmlldztcblxuICBjb25zdHJ1Y3RvcihzY29yZUJvYXJkUHJlc2VudGVyKSB7XG4gICAgdGhpcy4jdmlldyA9IG5ldyBTY29yZUZvcm1WaWV3KHRoaXMpO1xuICAgIHRoaXMuI3Njb3JlQm9hcmQgPSBzY29yZUJvYXJkUHJlc2VudGVyO1xuICB9XG5cbiAgZ2V0IHZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ZpZXc7XG4gIH1cblxuICBzdWJtaXQgPSAoc2NvcmVOYW1lLCBzY29yZVBvaW50cykgPT4ge1xuICAgIHRoaXMuI3Njb3JlQm9hcmQuYWRkU2NvcmUoc2NvcmVOYW1lLCBzY29yZVBvaW50cyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVGb3JtUHJlc2VudGVyOyIsImNsYXNzIFNjb3JlRm9ybVZpZXcge1xuICAjcHJlc2VudGVyO1xuXG4gICNmb3JtO1xuXG4gICNuYW1lO1xuXG4gICNwb2ludHM7XG5cbiAgI3VpO1xuXG4gIGNvbnN0cnVjdG9yKHByZXNlbnRlcikge1xuICAgIHRoaXMuI3ByZXNlbnRlciA9IHByZXNlbnRlcjtcbiAgICB0aGlzLiN1aSA9IHRoaXMuI2NyZWF0ZURPTUVsZW1lbnRzKCk7XG4gIH1cblxuICBnZXQgdWkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3VpO1xuICB9XG5cbiAgI2NyZWF0ZURPTUVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Njb3JlLWZvcm0tY29udCcpO1xuICAgIHRoaXMuI2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdGhpcy4jZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Njb3JlLWZvcm0nKTtcbiAgICB0aGlzLiNmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuI3N1Ym1pdCk7XG4gICAgdGhpcy4jZm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuI2tleXByZXNzKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRoaXMuI2Zvcm0pO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0tdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnQWRkIHlvdXIgc2NvcmUnO1xuICAgIHRoaXMuI2Zvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGhpcy4jbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy4jbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRoaXMuI25hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIG5hbWUnKTtcbiAgICB0aGlzLiNuYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZCh0aGlzLiNuYW1lKTtcbiAgICB0aGlzLiNmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGhpcy4jcG9pbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aGlzLiNwb2ludHMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB0aGlzLiNwb2ludHMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIHNjb3JlJyk7XG4gICAgdGhpcy4jcG9pbnRzLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBsYWJlbC5hcHBlbmRDaGlsZCh0aGlzLiNwb2ludHMpO1xuICAgIHRoaXMuI2Zvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtLWJ0bicpO1xuICAgIHRoaXMuI2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb247XG4gIH1cblxuICAjc3VibWl0ID0gKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuI3ByZXNlbnRlci5zdWJtaXQodGhpcy4jbmFtZS52YWx1ZSwgdGhpcy4jcG9pbnRzLnZhbHVlKTtcbiAgICB0aGlzLiNyZXNldCgpO1xuICB9XG5cbiAgI2tleXByZXNzID0gKGV2dCkgPT4ge1xuICAgIGlmIChldnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLiNmb3JtLmRpc3BhdGNoRXZlbnQoJ3N1Ym1pdCcpO1xuICAgIH1cbiAgfVxuXG4gICNyZXNldCA9ICgpID0+IHRoaXMuI2Zvcm0ucmVzZXQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVGb3JtVmlldztcbiIsImNsYXNzIFNjb3JlTW9kZWwge1xuICAjbmFtZTtcblxuICAjcG9pbnRzO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHBvaW50cykge1xuICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICAgIHRoaXMuI3BvaW50cyA9IHBvaW50cztcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICB0aGlzLiNuYW1lID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcG9pbnRzKCkge1xuICAgIHJldHVybiB0aGlzLiNwb2ludHM7XG4gIH1cblxuICBzZXQgcG9pbnRzKHZhbHVlKSB7XG4gICAgdGhpcy4jcG9pbnRzID0gdmFsdWU7XG4gIH1cblxuICB0b0pTT04gPSAoKSA9PiAoe1xuICAgIHVzZXI6IHRoaXMuI25hbWUsXG4gICAgc2NvcmU6IHRoaXMuI3BvaW50cyxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVNb2RlbDsiLCJpbXBvcnQgU2NvcmVNb2RlbCBmcm9tICcuL1Njb3JlTW9kZWwuanMnO1xuaW1wb3J0IFNjb3JlVmlldyBmcm9tICcuL1Njb3JlVmlldy5qcyc7XG5cbmNsYXNzIFNjb3JlUHJlc2VudGVyIHtcbiAgI21vZGVsO1xuXG4gICN2aWV3O1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHBvaW50cykge1xuICAgIHRoaXMuI21vZGVsID0gbmV3IFNjb3JlTW9kZWwobmFtZSwgcG9pbnRzKTtcbiAgICB0aGlzLiN2aWV3ID0gbmV3IFNjb3JlVmlldyh0aGlzKTtcbiAgfVxuXG4gIGdldCBtb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbW9kZWw7XG4gIH1cblxuICBnZXQgdmlldygpIHtcbiAgICByZXR1cm4gdGhpcy4jdmlldztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY29yZVByZXNlbnRlcjsiLCJjbGFzcyBTY29yZVZpZXcge1xuICAjcHJlc2VudGVyO1xuXG4gICN1aTtcblxuICBjb25zdHJ1Y3RvcihwcmVzZW50ZXIpIHtcbiAgICB0aGlzLiNwcmVzZW50ZXIgPSBwcmVzZW50ZXI7XG4gICAgdGhpcy4jdWkgPSB0aGlzLiNjcmVhdGVET01FbGVtZW50cygpO1xuICB9XG5cbiAgZ2V0IHVpKCkge1xuICAgIHJldHVybiB0aGlzLiN1aTtcbiAgfVxuXG4gICNjcmVhdGVET01FbGVtZW50cyA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudDtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzY29yZS1jYXJkJyk7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuI3ByZXNlbnRlci5tb2RlbC5uYW1lO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzY29yZS1uYW1lJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSB0aGlzLiNwcmVzZW50ZXIubW9kZWwucG9pbnRzO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzY29yZS1wb2ludHMnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2NvcmUtbGlzdC1pdGVtJyk7XG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICByZXR1cm4gbGlzdEl0ZW07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmVWaWV3OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==