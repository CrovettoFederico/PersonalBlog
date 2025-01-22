/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/componentes/Posts/Post.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/componentes/Posts/Post.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.titulo-miniPost{
    height: 5rem;    
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}

.descripcion-miniPost{
    height: 4rem;    
}

.hide{
    display: none;
    animation: Hide 1s linear forwards;
}

.show{
    display: unset;
    animation: Show 1s linear forwards;
}

.selected-post-inner{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: row;
    align-items: center;
    width: 100%;    
    animation: changeInner 1s linear forwards;
    padding-left: 10%;
    padding-right: 10%;    
}

.selected-post-inner p{
    justify-self: center;
}

.img-miniPost{
    width: auto !important;
    display: inline !important
}

@media (min-width: 768px){
    .selected-post-inner img{
        height: 25rem !important;
    }
}

.selected-post-outer{    
    animation: changeOuter 1s linear forwards;
}



.unselected-post-inner{
    display: unset;
    justify-content: unset;
    flex-wrap: unset;
    align-content: unset;
    flex-direction: unset;
    align-items: unset;
    width: unset;    
    padding-left: unset;
    padding-right: unset;  
    animation: reverseInner 1s linear forwards;
}

@media (min-width: 768px) {
    .unselected-post-inner img{   
        animation: revertImage 1s linear forwards
    }
    
}

.unselected-post-outer{
    animation: reverseOuter 1s linear forwards;
}



@keyframes changeOuter {
    from {
        display:block;
        opacity: 1;
    }
    80%{
        transform: scale(0.2);
        display: contents;
        opacity: 0;
    }
    to {
        display: contents;
        opacity: 1;
    }
}

@keyframes reverseOuter{
    from {
        display: contents;
        opacity: 1;
    }
    60%{
        opacity: 0;
    }
    80%{       
        display:block;
        
    }
    to {
        
        opacity: 1;
    }
}

@keyframes changeInner {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;

    }
}

@keyframes reverseInner {
    from {     
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-content: center;
        flex-direction: row;
        align-items: center;
        width: 100%;    
        padding-left: 10%;
        padding-right: 10%; 


        opacity: 1;
    }
    45%{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-content: center;
        flex-direction: row;
        align-items: center;
        width: 100%;    
        padding-left: 10%;
        padding-right: 10%; 

        opacity: 0;
    }
    60%{
        display: initial;
        justify-content: initial;
        flex-wrap: initial;
        align-content: initial;
        flex-direction: initial;
        align-items: initial;
        width: initial;    
        padding-left: initial;
        padding-right: initial;  
        
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes revertImage{
    from{
        height: 25rem;
        
    }
    60%{
        height: 25rem;
    }
    61%{
        height: 17rem;
    }
    to{
        height: 17rem;
    }
}

@keyframes Hide {
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
}

@keyframes Show {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}`, "",{"version":3,"sources":["webpack://./src/componentes/Posts/Post.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,cAAc;IACd,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,eAAe;IACf,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;IACnB,WAAW;IACX,yCAAyC;IACzC,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB;AACJ;;AAEA;IACI;QACI,wBAAwB;IAC5B;AACJ;;AAEA;IACI,yCAAyC;AAC7C;;;;AAIA;IACI,cAAc;IACd,sBAAsB;IACtB,gBAAgB;IAChB,oBAAoB;IACpB,qBAAqB;IACrB,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,oBAAoB;IACpB,0CAA0C;AAC9C;;AAEA;IACI;QACI;IACJ;;AAEJ;;AAEA;IACI,0CAA0C;AAC9C;;;;AAIA;IACI;QACI,aAAa;QACb,UAAU;IACd;IACA;QACI,qBAAqB;QACrB,iBAAiB;QACjB,UAAU;IACd;IACA;QACI,iBAAiB;QACjB,UAAU;IACd;AACJ;;AAEA;IACI;QACI,iBAAiB;QACjB,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,aAAa;;IAEjB;IACA;;QAEI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;;IAEd;AACJ;;AAEA;IACI;QACI,aAAa;QACb,6BAA6B;QAC7B,eAAe;QACf,qBAAqB;QACrB,mBAAmB;QACnB,mBAAmB;QACnB,WAAW;QACX,iBAAiB;QACjB,kBAAkB;;;QAGlB,UAAU;IACd;IACA;QACI,aAAa;QACb,6BAA6B;QAC7B,eAAe;QACf,qBAAqB;QACrB,mBAAmB;QACnB,mBAAmB;QACnB,WAAW;QACX,iBAAiB;QACjB,kBAAkB;;QAElB,UAAU;IACd;IACA;QACI,gBAAgB;QAChB,wBAAwB;QACxB,kBAAkB;QAClB,sBAAsB;QACtB,uBAAuB;QACvB,oBAAoB;QACpB,cAAc;QACd,qBAAqB;QACrB,sBAAsB;;IAE1B;IACA;QACI,mBAAmB;QACnB,UAAU;IACd;AACJ;;AAEA;IACI;QACI,aAAa;;IAEjB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;AACJ;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ","sourcesContent":[".titulo-miniPost{\r\n    height: 5rem;    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.descripcion-miniPost{\r\n    height: 4rem;    \r\n}\r\n\r\n.hide{\r\n    display: none;\r\n    animation: Hide 1s linear forwards;\r\n}\r\n\r\n.show{\r\n    display: unset;\r\n    animation: Show 1s linear forwards;\r\n}\r\n\r\n.selected-post-inner{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 100%;    \r\n    animation: changeInner 1s linear forwards;\r\n    padding-left: 10%;\r\n    padding-right: 10%;    \r\n}\r\n\r\n.selected-post-inner p{\r\n    justify-self: center;\r\n}\r\n\r\n.img-miniPost{\r\n    width: auto !important;\r\n    display: inline !important\r\n}\r\n\r\n@media (min-width: 768px){\r\n    .selected-post-inner img{\r\n        height: 25rem !important;\r\n    }\r\n}\r\n\r\n.selected-post-outer{    \r\n    animation: changeOuter 1s linear forwards;\r\n}\r\n\r\n\r\n\r\n.unselected-post-inner{\r\n    display: unset;\r\n    justify-content: unset;\r\n    flex-wrap: unset;\r\n    align-content: unset;\r\n    flex-direction: unset;\r\n    align-items: unset;\r\n    width: unset;    \r\n    padding-left: unset;\r\n    padding-right: unset;  \r\n    animation: reverseInner 1s linear forwards;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .unselected-post-inner img{   \r\n        animation: revertImage 1s linear forwards\r\n    }\r\n    \r\n}\r\n\r\n.unselected-post-outer{\r\n    animation: reverseOuter 1s linear forwards;\r\n}\r\n\r\n\r\n\r\n@keyframes changeOuter {\r\n    from {\r\n        display:block;\r\n        opacity: 1;\r\n    }\r\n    80%{\r\n        transform: scale(0.2);\r\n        display: contents;\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        display: contents;\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes reverseOuter{\r\n    from {\r\n        display: contents;\r\n        opacity: 1;\r\n    }\r\n    60%{\r\n        opacity: 0;\r\n    }\r\n    80%{       \r\n        display:block;\r\n        \r\n    }\r\n    to {\r\n        \r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes changeInner {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n\r\n    }\r\n}\r\n\r\n@keyframes reverseInner {\r\n    from {     \r\n        display: flex;\r\n        justify-content: space-around;\r\n        flex-wrap: wrap;\r\n        align-content: center;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        width: 100%;    \r\n        padding-left: 10%;\r\n        padding-right: 10%; \r\n\r\n\r\n        opacity: 1;\r\n    }\r\n    45%{\r\n        display: flex;\r\n        justify-content: space-around;\r\n        flex-wrap: wrap;\r\n        align-content: center;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        width: 100%;    \r\n        padding-left: 10%;\r\n        padding-right: 10%; \r\n\r\n        opacity: 0;\r\n    }\r\n    60%{\r\n        display: initial;\r\n        justify-content: initial;\r\n        flex-wrap: initial;\r\n        align-content: initial;\r\n        flex-direction: initial;\r\n        align-items: initial;\r\n        width: initial;    \r\n        padding-left: initial;\r\n        padding-right: initial;  \r\n        \r\n    }\r\n    to {\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes revertImage{\r\n    from{\r\n        height: 25rem;\r\n        \r\n    }\r\n    60%{\r\n        height: 25rem;\r\n    }\r\n    61%{\r\n        height: 17rem;\r\n    }\r\n    to{\r\n        height: 17rem;\r\n    }\r\n}\r\n\r\n@keyframes Hide {\r\n    from{\r\n        opacity: 1;\r\n    }\r\n    to{\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes Show {\r\n    from{\r\n        opacity: 0;\r\n    }\r\n    to{\r\n        opacity: 1;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function () {
          console.warn(
            "%s(...) is deprecated in plain JavaScript React classes. %s",
            info[0],
            info[1]
          );
        }
      });
    }
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable)
        return null;
      maybeIterable =
        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
        maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
      publicInstance =
        ((publicInstance = publicInstance.constructor) &&
          (publicInstance.displayName || publicInstance.name)) ||
        "ReactClass";
      var warningKey = publicInstance + "." + callerName;
      didWarnStateUpdateForUnmountedComponent[warningKey] ||
        (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ),
        (didWarnStateUpdateForUnmountedComponent[warningKey] = !0));
    }
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = !1;
      } catch (e) {
        JSCompiler_inline_result = !0;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 =
          ("function" === typeof Symbol &&
            Symbol.toStringTag &&
            value[Symbol.toStringTag]) ||
          value.constructor.name ||
          "Object";
        JSCompiler_temp_const.call(
          JSCompiler_inline_result,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          JSCompiler_inline_result$jscomp$0
        );
        return testStringCoercion(value);
      }
    }
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE$2
          ? null
          : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if ("object" === typeof type)
        switch (
          ("number" === typeof type.tag &&
            console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          type.$$typeof)
        ) {
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type ||
              ((type = innerType.displayName || innerType.name || ""),
              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
            return type;
          case REACT_MEMO_TYPE:
            return (
              (innerType = type.displayName || null),
              null !== innerType
                ? innerType
                : getComponentNameFromType(type.type) || "Memo"
            );
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function isValidElementType(type) {
      return "string" === typeof type ||
        "function" === typeof type ||
        type === REACT_FRAGMENT_TYPE ||
        type === REACT_PROFILER_TYPE ||
        type === REACT_STRICT_MODE_TYPE ||
        type === REACT_SUSPENSE_TYPE ||
        type === REACT_SUSPENSE_LIST_TYPE ||
        type === REACT_OFFSCREEN_TYPE ||
        ("object" === typeof type &&
          null !== type &&
          (type.$$typeof === REACT_LAZY_TYPE ||
            type.$$typeof === REACT_MEMO_TYPE ||
            type.$$typeof === REACT_CONTEXT_TYPE ||
            type.$$typeof === REACT_CONSUMER_TYPE ||
            type.$$typeof === REACT_FORWARD_REF_TYPE ||
            type.$$typeof === REACT_CLIENT_REFERENCE$1 ||
            void 0 !== type.getModuleId))
        ? !0
        : !1;
    }
    function disabledLog() {}
    function disableLogs() {
      if (0 === disabledDepth) {
        prevLog = console.log;
        prevInfo = console.info;
        prevWarn = console.warn;
        prevError = console.error;
        prevGroup = console.group;
        prevGroupCollapsed = console.groupCollapsed;
        prevGroupEnd = console.groupEnd;
        var props = {
          configurable: !0,
          enumerable: !0,
          value: disabledLog,
          writable: !0
        };
        Object.defineProperties(console, {
          info: props,
          log: props,
          warn: props,
          error: props,
          group: props,
          groupCollapsed: props,
          groupEnd: props
        });
      }
      disabledDepth++;
    }
    function reenableLogs() {
      disabledDepth--;
      if (0 === disabledDepth) {
        var props = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: assign({}, props, { value: prevLog }),
          info: assign({}, props, { value: prevInfo }),
          warn: assign({}, props, { value: prevWarn }),
          error: assign({}, props, { value: prevError }),
          group: assign({}, props, { value: prevGroup }),
          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
          groupEnd: assign({}, props, { value: prevGroupEnd })
        });
      }
      0 > disabledDepth &&
        console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
    }
    function describeBuiltInComponentFrame(name) {
      if (void 0 === prefix)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = (match && match[1]) || "";
          suffix =
            -1 < x.stack.indexOf("\n    at")
              ? " (<anonymous>)"
              : -1 < x.stack.indexOf("@")
                ? "@unknown:0:0"
                : "";
        }
      return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      var frame = componentFrameCache.get(fn);
      if (void 0 !== frame) return frame;
      reentry = !0;
      frame = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var previousDispatcher = null;
      previousDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = null;
      disableLogs();
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function () {
            try {
              if (construct) {
                var Fake = function () {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function () {
                    throw Error();
                  }
                });
                if ("object" === typeof Reflect && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) &&
                  "function" === typeof Fake.catch &&
                  Fake.catch(function () {});
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack)
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name"
        );
        namePropDescriptor &&
          namePropDescriptor.configurable &&
          Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
        var _RunInRootFrame$Deter =
            RunInRootFrame.DetermineComponentFrameRoot(),
          sampleStack = _RunInRootFrame$Deter[0],
          controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"),
            controlLines = controlStack.split("\n");
          for (
            _RunInRootFrame$Deter = namePropDescriptor = 0;
            namePropDescriptor < sampleLines.length &&
            !sampleLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            );

          )
            namePropDescriptor++;
          for (
            ;
            _RunInRootFrame$Deter < controlLines.length &&
            !controlLines[_RunInRootFrame$Deter].includes(
              "DetermineComponentFrameRoot"
            );

          )
            _RunInRootFrame$Deter++;
          if (
            namePropDescriptor === sampleLines.length ||
            _RunInRootFrame$Deter === controlLines.length
          )
            for (
              namePropDescriptor = sampleLines.length - 1,
                _RunInRootFrame$Deter = controlLines.length - 1;
              1 <= namePropDescriptor &&
              0 <= _RunInRootFrame$Deter &&
              sampleLines[namePropDescriptor] !==
                controlLines[_RunInRootFrame$Deter];

            )
              _RunInRootFrame$Deter--;
          for (
            ;
            1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;
            namePropDescriptor--, _RunInRootFrame$Deter--
          )
            if (
              sampleLines[namePropDescriptor] !==
              controlLines[_RunInRootFrame$Deter]
            ) {
              if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                do
                  if (
                    (namePropDescriptor--,
                    _RunInRootFrame$Deter--,
                    0 > _RunInRootFrame$Deter ||
                      sampleLines[namePropDescriptor] !==
                        controlLines[_RunInRootFrame$Deter])
                  ) {
                    var _frame =
                      "\n" +
                      sampleLines[namePropDescriptor].replace(
                        " at new ",
                        " at "
                      );
                    fn.displayName &&
                      _frame.includes("<anonymous>") &&
                      (_frame = _frame.replace("<anonymous>", fn.displayName));
                    "function" === typeof fn &&
                      componentFrameCache.set(fn, _frame);
                    return _frame;
                  }
                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
              }
              break;
            }
        }
      } finally {
        (reentry = !1),
          (ReactSharedInternals.H = previousDispatcher),
          reenableLogs(),
          (Error.prepareStackTrace = frame);
      }
      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "")
        ? describeBuiltInComponentFrame(sampleLines)
        : "";
      "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
      return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
      if (null == type) return "";
      if ("function" === typeof type) {
        var prototype = type.prototype;
        return describeNativeComponentFrame(
          type,
          !(!prototype || !prototype.isReactComponent)
        );
      }
      if ("string" === typeof type) return describeBuiltInComponentFrame(type);
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if ("object" === typeof type)
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return (type = describeNativeComponentFrame(type.render, !1)), type;
          case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type);
          case REACT_LAZY_TYPE:
            prototype = type._payload;
            type = type._init;
            try {
              return describeUnknownElementTypeFrameInDEV(type(prototype));
            } catch (x) {}
        }
      return "";
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return !1;
      }
      return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown ||
          ((specialPropKeyWarningShown = !0),
          console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
      }
      warnAboutAccessingKey.isReactWarning = !0;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: !0
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] ||
        ((didWarnAboutElementRef[componentName] = !0),
        console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
      self = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        props: props,
        _owner: owner
      };
      null !== (void 0 !== self ? self : null)
        ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
          })
        : Object.defineProperty(type, "ref", { enumerable: !1, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      newKey = ReactElement(
        oldElement.type,
        newKey,
        void 0,
        void 0,
        oldElement._owner,
        oldElement.props
      );
      newKey._store.validated = oldElement._store.validated;
      return newKey;
    }
    function validateChildKeys(node, parentType) {
      if (
        "object" === typeof node &&
        node &&
        node.$$typeof !== REACT_CLIENT_REFERENCE
      )
        if (isArrayImpl(node))
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            isValidElement(child) && validateExplicitKey(child, parentType);
          }
        else if (isValidElement(node))
          node._store && (node._store.validated = 1);
        else if (
          ((i = getIteratorFn(node)),
          "function" === typeof i &&
            i !== node.entries &&
            ((i = i.call(node)), i !== node))
        )
          for (; !(node = i.next()).done; )
            isValidElement(node.value) &&
              validateExplicitKey(node.value, parentType);
    }
    function isValidElement(object) {
      return (
        "object" === typeof object &&
        null !== object &&
        object.$$typeof === REACT_ELEMENT_TYPE
      );
    }
    function validateExplicitKey(element, parentType) {
      if (
        element._store &&
        !element._store.validated &&
        null == element.key &&
        ((element._store.validated = 1),
        (parentType = getCurrentComponentErrorInfo(parentType)),
        !ownerHasKeyUseWarning[parentType])
      ) {
        ownerHasKeyUseWarning[parentType] = !0;
        var childOwner = "";
        element &&
          null != element._owner &&
          element._owner !== getOwner() &&
          ((childOwner = null),
          "number" === typeof element._owner.tag
            ? (childOwner = getComponentNameFromType(element._owner.type))
            : "string" === typeof element._owner.name &&
              (childOwner = element._owner.name),
          (childOwner = " It was passed a child from " + childOwner + "."));
        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
        ReactSharedInternals.getCurrentStack = function () {
          var stack = describeUnknownElementTypeFrameInDEV(element.type);
          prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
          return stack;
        };
        console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          parentType,
          childOwner
        );
        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
      }
    }
    function getCurrentComponentErrorInfo(parentType) {
      var info = "",
        owner = getOwner();
      owner &&
        (owner = getComponentNameFromType(owner.type)) &&
        (info = "\n\nCheck the render method of `" + owner + "`.");
      info ||
        ((parentType = getComponentNameFromType(parentType)) &&
          (info =
            "\n\nCheck the top-level render call using <" + parentType + ">."));
      return info;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return (
        "$" +
        key.replace(/[=:]/g, function (match) {
          return escaperLookup[match];
        })
      );
    }
    function getElementKey(element, index) {
      return "object" === typeof element &&
        null !== element &&
        null != element.key
        ? (checkKeyStringCoercion(element.key), escape("" + element.key))
        : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch (
            ("string" === typeof thenable.status
              ? thenable.then(noop$1, noop$1)
              : ((thenable.status = "pending"),
                thenable.then(
                  function (fulfilledValue) {
                    "pending" === thenable.status &&
                      ((thenable.status = "fulfilled"),
                      (thenable.value = fulfilledValue));
                  },
                  function (error) {
                    "pending" === thenable.status &&
                      ((thenable.status = "rejected"),
                      (thenable.reason = error));
                  }
                )),
            thenable.status)
          ) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = !1;
      if (null === children) invokeCallback = !0;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = !0;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = !0;
                break;
              case REACT_LAZY_TYPE:
                return (
                  (invokeCallback = children._init),
                  mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  )
                );
            }
        }
      if (invokeCallback) {
        invokeCallback = children;
        callback = callback(invokeCallback);
        var childKey =
          "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
        isArrayImpl(callback)
          ? ((escapedPrefix = ""),
            null != childKey &&
              (escapedPrefix =
                childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
            mapIntoArray(callback, array, escapedPrefix, "", function (c) {
              return c;
            }))
          : null != callback &&
            (isValidElement(callback) &&
              (null != callback.key &&
                ((invokeCallback && invokeCallback.key === callback.key) ||
                  checkKeyStringCoercion(callback.key)),
              (escapedPrefix = cloneAndReplaceKey(
                callback,
                escapedPrefix +
                  (null == callback.key ||
                  (invokeCallback && invokeCallback.key === callback.key)
                    ? ""
                    : ("" + callback.key).replace(
                        userProvidedKeyEscapeRegex,
                        "$&/"
                      ) + "/") +
                  childKey
              )),
              "" !== nameSoFar &&
                null != invokeCallback &&
                isValidElement(invokeCallback) &&
                null == invokeCallback.key &&
                invokeCallback._store &&
                !invokeCallback._store.validated &&
                (escapedPrefix._store.validated = 2),
              (callback = escapedPrefix)),
            array.push(callback));
        return 1;
      }
      invokeCallback = 0;
      childKey = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          (nameSoFar = children[i]),
            (type = childKey + getElementKey(nameSoFar, i)),
            (invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            ));
      else if (((i = getIteratorFn(children)), "function" === typeof i))
        for (
          i === children.entries &&
            (didWarnAboutMaps ||
              console.warn(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (didWarnAboutMaps = !0)),
            children = i.call(children),
            i = 0;
          !(nameSoFar = children.next()).done;

        )
          (nameSoFar = nameSoFar.value),
            (type = childKey + getElementKey(nameSoFar, i++)),
            (invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            ));
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === array
              ? "object with keys {" + Object.keys(children).join(", ") + "}"
              : array) +
            "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [],
        count = 0;
      mapIntoArray(children, result, "", "", function (child) {
        return func.call(context, child, count++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function (moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              (payload._status = 1), (payload._result = moduleObject);
          },
          function (error) {
            if (0 === payload._status || -1 === payload._status)
              (payload._status = 2), (payload._result = error);
          }
        );
        -1 === payload._status &&
          ((payload._status = 0), (payload._result = ctor));
      }
      if (1 === payload._status)
        return (
          (ctor = payload._result),
          void 0 === ctor &&
            console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
              ctor
            ),
          "default" in ctor ||
            console.error(
              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
              ctor
            ),
          ctor.default
        );
      throw payload._result;
    }
    function resolveDispatcher() {
      var dispatcher = ReactSharedInternals.H;
      null === dispatcher &&
        console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
      return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
      if (null === enqueueTaskImpl)
        try {
          var requireString = ("require" + Math.random()).slice(0, 7);
          enqueueTaskImpl = (module && module[requireString]).call(
            module,
            "timers"
          ).setImmediate;
        } catch (_err) {
          enqueueTaskImpl = function (callback) {
            !1 === didWarnAboutMessageChannel &&
              ((didWarnAboutMessageChannel = !0),
              "undefined" === typeof MessageChannel &&
                console.error(
                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                ));
            var channel = new MessageChannel();
            channel.port1.onmessage = callback;
            channel.port2.postMessage(void 0);
          };
        }
      return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
      return 1 < errors.length && "function" === typeof AggregateError
        ? new AggregateError(errors)
        : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
      prevActScopeDepth !== actScopeDepth - 1 &&
        console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
      actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
      var queue = ReactSharedInternals.actQueue;
      if (null !== queue)
        if (0 !== queue.length)
          try {
            flushActQueue(queue);
            enqueueTask(function () {
              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
          } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
          }
        else ReactSharedInternals.actQueue = null;
      0 < ReactSharedInternals.thrownErrors.length
        ? ((queue = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          reject(queue))
        : resolve(returnValue);
    }
    function flushActQueue(queue) {
      if (!isFlushing) {
        isFlushing = !0;
        var i = 0;
        try {
          for (; i < queue.length; i++) {
            var callback = queue[i];
            do {
              ReactSharedInternals.didUsePromise = !1;
              var continuation = callback(!1);
              if (null !== continuation) {
                if (ReactSharedInternals.didUsePromise) {
                  queue[i] = callback;
                  queue.splice(0, i);
                  return;
                }
                callback = continuation;
              } else break;
            } while (1);
          }
          queue.length = 0;
        } catch (error) {
          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
        } finally {
          isFlushing = !1;
        }
      }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
      didWarnStateUpdateForUnmountedComponent = {},
      ReactNoopUpdateQueue = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function (publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function (publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function (publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      },
      assign = Object.assign,
      emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function (partialState, callback) {
      if (
        "object" !== typeof partialState &&
        "function" !== typeof partialState &&
        null != partialState
      )
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      },
      fnName;
    for (fnName in deprecatedAPIs)
      deprecatedAPIs.hasOwnProperty(fnName) &&
        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray,
      REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"),
      ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null
      },
      hasOwnProperty = Object.prototype.hasOwnProperty,
      REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"),
      disabledDepth = 0,
      prevLog,
      prevInfo,
      prevWarn,
      prevError,
      prevGroup,
      prevGroupCollapsed,
      prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix,
      suffix,
      reentry = !1;
    var componentFrameCache = new (
      "function" === typeof WeakMap ? WeakMap : Map
    )();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
      specialPropKeyWarningShown,
      didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var ownerHasKeyUseWarning = {},
      didWarnAboutMaps = !1,
      userProvidedKeyEscapeRegex = /\/+/g,
      reportGlobalError =
        "function" === typeof reportError
          ? reportError
          : function (error) {
              if (
                "object" === typeof window &&
                "function" === typeof window.ErrorEvent
              ) {
                var event = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    "object" === typeof error &&
                    null !== error &&
                    "string" === typeof error.message
                      ? String(error.message)
                      : String(error),
                  error: error
                });
                if (!window.dispatchEvent(event)) return;
              } else if (
                "object" === typeof process &&
                "function" === typeof process.emit
              ) {
                process.emit("uncaughtException", error);
                return;
              }
              console.error(error);
            },
      didWarnAboutMessageChannel = !1,
      enqueueTaskImpl = null,
      actScopeDepth = 0,
      didWarnNoAwaitAct = !1,
      isFlushing = !1,
      queueSeveralMicrotasks =
        "function" === typeof queueMicrotask
          ? function (callback) {
              queueMicrotask(function () {
                return queueMicrotask(callback);
              });
            }
          : enqueueTask;
    exports.Children = {
      map: mapChildren,
      forEach: function (children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function () {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function (children) {
        var n = 0;
        mapChildren(children, function () {
          n++;
        });
        return n;
      },
      toArray: function (children) {
        return (
          mapChildren(children, function (child) {
            return child;
          }) || []
        );
      },
      only: function (children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
      ReactSharedInternals;
    exports.act = function (callback) {
      var prevActQueue = ReactSharedInternals.actQueue,
        prevActScopeDepth = actScopeDepth;
      actScopeDepth++;
      var queue = (ReactSharedInternals.actQueue =
          null !== prevActQueue ? prevActQueue : []),
        didAwaitActCall = !1;
      try {
        var result = callback();
      } catch (error) {
        ReactSharedInternals.thrownErrors.push(error);
      }
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw (
          (popActScope(prevActQueue, prevActScopeDepth),
          (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          callback)
        );
      if (
        null !== result &&
        "object" === typeof result &&
        "function" === typeof result.then
      ) {
        var thenable = result;
        queueSeveralMicrotasks(function () {
          didAwaitActCall ||
            didWarnNoAwaitAct ||
            ((didWarnNoAwaitAct = !0),
            console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
        });
        return {
          then: function (resolve, reject) {
            didAwaitActCall = !0;
            thenable.then(
              function (returnValue) {
                popActScope(prevActQueue, prevActScopeDepth);
                if (0 === prevActScopeDepth) {
                  try {
                    flushActQueue(queue),
                      enqueueTask(function () {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                  } catch (error$2) {
                    ReactSharedInternals.thrownErrors.push(error$2);
                  }
                  if (0 < ReactSharedInternals.thrownErrors.length) {
                    var _thrownError = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    );
                    ReactSharedInternals.thrownErrors.length = 0;
                    reject(_thrownError);
                  }
                } else resolve(returnValue);
              },
              function (error) {
                popActScope(prevActQueue, prevActScopeDepth);
                0 < ReactSharedInternals.thrownErrors.length
                  ? ((error = aggregateErrors(
                      ReactSharedInternals.thrownErrors
                    )),
                    (ReactSharedInternals.thrownErrors.length = 0),
                    reject(error))
                  : reject(error);
              }
            );
          }
        };
      }
      var returnValue$jscomp$0 = result;
      popActScope(prevActQueue, prevActScopeDepth);
      0 === prevActScopeDepth &&
        (flushActQueue(queue),
        0 !== queue.length &&
          queueSeveralMicrotasks(function () {
            didAwaitActCall ||
              didWarnNoAwaitAct ||
              ((didWarnNoAwaitAct = !0),
              console.error(
                "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
              ));
          }),
        (ReactSharedInternals.actQueue = null));
      if (0 < ReactSharedInternals.thrownErrors.length)
        throw (
          ((callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
          (ReactSharedInternals.thrownErrors.length = 0),
          callback)
        );
      return {
        then: function (resolve, reject) {
          didAwaitActCall = !0;
          0 === prevActScopeDepth
            ? ((ReactSharedInternals.actQueue = queue),
              enqueueTask(function () {
                return recursivelyFlushAsyncActWork(
                  returnValue$jscomp$0,
                  resolve,
                  reject
                );
              }))
            : resolve(returnValue$jscomp$0);
        }
      };
    };
    exports.cache = function (fn) {
      return function () {
        return fn.apply(null, arguments);
      };
    };
    exports.cloneElement = function (element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " +
            element +
            "."
        );
      var props = assign({}, element.props),
        key = element.key,
        owner = element._owner;
      if (null != config) {
        var JSCompiler_inline_result;
        a: {
          if (
            hasOwnProperty.call(config, "ref") &&
            (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) &&
            JSCompiler_inline_result.isReactWarning
          ) {
            JSCompiler_inline_result = !1;
            break a;
          }
          JSCompiler_inline_result = void 0 !== config.ref;
        }
        JSCompiler_inline_result && (owner = getOwner());
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (key = "" + config.key));
        for (propName in config)
          !hasOwnProperty.call(config, propName) ||
            "key" === propName ||
            "__self" === propName ||
            "__source" === propName ||
            ("ref" === propName && void 0 === config.ref) ||
            (props[propName] = config[propName]);
      }
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        JSCompiler_inline_result = Array(propName);
        for (var i = 0; i < propName; i++)
          JSCompiler_inline_result[i] = arguments[i + 2];
        props.children = JSCompiler_inline_result;
      }
      props = ReactElement(element.type, key, void 0, void 0, owner, props);
      for (key = 2; key < arguments.length; key++)
        validateChildKeys(arguments[key], props.type);
      return props;
    };
    exports.createContext = function (defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      defaultValue._currentRenderer = null;
      defaultValue._currentRenderer2 = null;
      return defaultValue;
    };
    exports.createElement = function (type, config, children) {
      if (isValidElementType(type))
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i], type);
      else {
        i = "";
        if (
          void 0 === type ||
          ("object" === typeof type &&
            null !== type &&
            0 === Object.keys(type).length)
        )
          i +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
        if (null === type) var typeString = "null";
        else
          isArrayImpl(type)
            ? (typeString = "array")
            : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE
              ? ((typeString =
                  "<" +
                  (getComponentNameFromType(type.type) || "Unknown") +
                  " />"),
                (i =
                  " Did you accidentally export a JSX literal instead of a component?"))
              : (typeString = typeof type);
        console.error(
          "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          typeString,
          i
        );
      }
      var propName;
      i = {};
      typeString = null;
      if (null != config)
        for (propName in (didWarnAboutOldJSXRuntime ||
          !("__self" in config) ||
          "key" in config ||
          ((didWarnAboutOldJSXRuntime = !0),
          console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )),
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (typeString = "" + config.key)),
        config))
          hasOwnProperty.call(config, propName) &&
            "key" !== propName &&
            "__self" !== propName &&
            "__source" !== propName &&
            (i[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) i.children = children;
      else if (1 < childrenLength) {
        for (
          var childArray = Array(childrenLength), _i = 0;
          _i < childrenLength;
          _i++
        )
          childArray[_i] = arguments[_i + 2];
        Object.freeze && Object.freeze(childArray);
        i.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in ((childrenLength = type.defaultProps), childrenLength))
          void 0 === i[propName] && (i[propName] = childrenLength[propName]);
      typeString &&
        defineKeyPropWarningGetter(
          i,
          "function" === typeof type
            ? type.displayName || type.name || "Unknown"
            : type
        );
      return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
    };
    exports.createRef = function () {
      var refObject = { current: null };
      Object.seal(refObject);
      return refObject;
    };
    exports.forwardRef = function (render) {
      null != render && render.$$typeof === REACT_MEMO_TYPE
        ? console.error(
            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
          )
        : "function" !== typeof render
          ? console.error(
              "forwardRef requires a render function but was given %s.",
              null === render ? "null" : typeof render
            )
          : 0 !== render.length &&
            2 !== render.length &&
            console.error(
              "forwardRef render functions accept exactly two parameters: props and ref. %s",
              1 === render.length
                ? "Did you forget to use the ref parameter?"
                : "Any additional parameter will be undefined."
            );
      null != render &&
        null != render.defaultProps &&
        console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render: render },
        ownName;
      Object.defineProperty(elementType, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return ownName;
        },
        set: function (name) {
          ownName = name;
          render.name ||
            render.displayName ||
            (Object.defineProperty(render, "name", { value: name }),
            (render.displayName = name));
        }
      });
      return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function (ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    exports.memo = function (type, compare) {
      isValidElementType(type) ||
        console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
      compare = {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: void 0 === compare ? null : compare
      };
      var ownName;
      Object.defineProperty(compare, "displayName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return ownName;
        },
        set: function (name) {
          ownName = name;
          type.name ||
            type.displayName ||
            (Object.defineProperty(type, "name", { value: name }),
            (type.displayName = name));
        }
      });
      return compare;
    };
    exports.startTransition = function (scope) {
      var prevTransition = ReactSharedInternals.T,
        currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      currentTransition._updatedFibers = new Set();
      try {
        var returnValue = scope(),
          onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish &&
          onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue &&
          null !== returnValue &&
          "function" === typeof returnValue.then &&
          returnValue.then(noop, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        null === prevTransition &&
          currentTransition._updatedFibers &&
          ((scope = currentTransition._updatedFibers.size),
          currentTransition._updatedFibers.clear(),
          10 < scope &&
            console.warn(
              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
            )),
          (ReactSharedInternals.T = prevTransition);
      }
    };
    exports.unstable_useCacheRefresh = function () {
      return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function (usable) {
      return resolveDispatcher().use(usable);
    };
    exports.useActionState = function (action, initialState, permalink) {
      return resolveDispatcher().useActionState(
        action,
        initialState,
        permalink
      );
    };
    exports.useCallback = function (callback, deps) {
      return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function (Context) {
      var dispatcher = resolveDispatcher();
      Context.$$typeof === REACT_CONSUMER_TYPE &&
        console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
      return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function (value, formatterFn) {
      return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function (value, initialValue) {
      return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function (create, deps) {
      return resolveDispatcher().useEffect(create, deps);
    };
    exports.useId = function () {
      return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function (ref, create, deps) {
      return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function (create, deps) {
      return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function (create, deps) {
      return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function (create, deps) {
      return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function (passthrough, reducer) {
      return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function (reducer, initialArg, init) {
      return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function (initialValue) {
      return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function (initialState) {
      return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function (
      subscribe,
      getSnapshot,
      getServerSnapshot
    ) {
      return resolveDispatcher().useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    exports.useTransition = function () {
      return resolveDispatcher().useTransition();
    };
    exports.version = "19.0.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./src/componentes/Posts/Post.css":
/*!****************************************!*\
  !*** ./src/componentes/Posts/Post.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Post_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Post.css */ "./node_modules/css-loader/dist/cjs.js!./src/componentes/Posts/Post.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Post_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Post_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Post_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Post_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/Env_Variables.ts":
/*!******************************!*\
  !*** ./src/Env_Variables.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Env_Variables = void 0;
var Env_Variables = /** @class */ (function () {
    function Env_Variables() {
    }
    Env_Variables.Api_Url = "https://personalblog-api.glitch.me/";
    Env_Variables.Get_Posts = "getPosts";
    return Env_Variables;
}());
exports.Env_Variables = Env_Variables;


/***/ }),

/***/ "./src/backend/BackendConnector.ts":
/*!*****************************************!*\
  !*** ./src/backend/BackendConnector.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackendConnector = void 0;
var Env_Variables_1 = __webpack_require__(/*! ../Env_Variables */ "./src/Env_Variables.ts");
var Posts_1 = __webpack_require__(/*! ../models/Posts */ "./src/models/Posts.ts");
var BackendConnector = /** @class */ (function () {
    function BackendConnector() {
    }
    BackendConnector.prototype.getPosts = function () {
        return __awaiter(this, arguments, void 0, function (start, end, newerFirst) {
            var response, json, Posts;
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = 4; }
            if (newerFirst === void 0) { newerFirst = true; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(Env_Variables_1.Env_Variables.Api_Url + Env_Variables_1.Env_Variables.Get_Posts, {
                            body: JSON.stringify({
                                start: start,
                                end: end,
                                newerFirst: newerFirst
                            }),
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        Posts = json.map(function (p) {
                            var _a, _b, _c, _d;
                            return new Posts_1.Post({
                                fotoSrc: p.fotoSrc || null,
                                descripcion: (_a = p.descripcion) !== null && _a !== void 0 ? _a : "",
                                titulo: (_b = p.titulo) !== null && _b !== void 0 ? _b : "",
                                fecha: (_c = p.fecha) !== null && _c !== void 0 ? _c : "",
                                textoBoton: (_d = p.textoBoton) !== null && _d !== void 0 ? _d : "Expandir",
                                contenido: p.contenido
                            });
                        });
                        return [2 /*return*/, Posts];
                }
            });
        });
    };
    return BackendConnector;
}());
exports.BackendConnector = BackendConnector;


/***/ }),

/***/ "./src/componentes/Posts/BigPost.tsx":
/*!*******************************************!*\
  !*** ./src/componentes/Posts/BigPost.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BigPost = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var BigPost = /** @class */ (function (_super) {
    __extends(BigPost, _super);
    function BigPost(props) {
        var _a, _b, _c, _d, _e;
        var _this = _super.call(this, props) || this;
        _this.state = {
            fecha: (_a = props.fecha) !== null && _a !== void 0 ? _a : "12/01/1997",
            titulo: (_b = props.titulo) !== null && _b !== void 0 ? _b : "Titulo",
            descripcion: (_c = props.descripcion) !== null && _c !== void 0 ? _c : "Descripcion",
            textoBoton: (_d = props.textoBoton) !== null && _d !== void 0 ? _d : "Expandir",
            fotoSrc: props.fotoSrc || null,
            contenido: (_e = props.contenido) !== null && _e !== void 0 ? _e : "Contenido"
        };
        return _this;
    }
    BigPost.prototype.render = function () {
        return (React.createElement("article", { className: "post featured" },
            React.createElement("header", { className: "major" },
                React.createElement("span", { className: "date" }, this.state.fecha),
                React.createElement("h2", null,
                    React.createElement("a", null, this.state.titulo)),
                React.createElement("p", null, this.state.descripcion)),
            React.createElement("a", { className: "image main" },
                React.createElement("img", { src: this.state.fotoSrc, alt: "" })),
            React.createElement("p", { className: "post-content" },
                this.state.contenido,
                "asdasdasd")));
    };
    return BigPost;
}(React.Component));
exports.BigPost = BigPost;


/***/ }),

/***/ "./src/componentes/Posts/MiniPost.tsx":
/*!********************************************!*\
  !*** ./src/componentes/Posts/MiniPost.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MiniPost = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! ./Post.css */ "./src/componentes/Posts/Post.css");
var MiniPost = /** @class */ (function (_super) {
    __extends(MiniPost, _super);
    function MiniPost(props) {
        var _a, _b, _c, _d, _e;
        var _this = _super.call(this, props) || this;
        _this.DivRef = React.createRef();
        _this.ButtonRef = React.createRef();
        _this.OpenPost = function () {
            console.log("open post");
            setTimeout(function () {
                var _a, _b;
                _this.setState({ InsideFormat: "selected-post-inner", textoBoton: "Cerrar" });
                (_a = _this.ButtonRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", _this.OpenPost);
                (_b = _this.ButtonRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener("click", _this.ClosePost);
            }, 380);
            _this.setState({ OutsideFormat: "selected-post-outer" });
            setTimeout(function () {
                var _a;
                var rect = (_a = _this.DivRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                // Calcula la posición deseada y ajusta el desplazamiento
                var targetY = scrollTop + rect.top + 40;
                window.scrollTo({
                    top: targetY,
                    behavior: 'smooth',
                });
                _this.setState({ selected: true });
            }, 500);
        };
        _this.ClosePost = function () {
            var _a, _b;
            console.log("close post");
            //this.setState({ InsideFormat : "unselected-post-inner" , textoBoton: "Expandir"})	
            _this.setState({ InsideFormat: "unselected-post-inner", textoBoton: "Expandir" });
            (_a = _this.ButtonRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", _this.ClosePost);
            (_b = _this.ButtonRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener("click", _this.OpenPost);
            _this.setState({ OutsideFormat: "unselected-post-outer" });
            setTimeout(function () {
                var _a;
                var rect = (_a = _this.DivRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                // Calcula la posición deseada y ajusta el desplazamiento
                var targetY = scrollTop + rect.top;
                window.scrollTo({
                    top: targetY,
                    behavior: 'smooth',
                });
                _this.setState({ selected: false });
            }, 500);
        };
        _this.state = {
            fecha: (_a = props.fecha) !== null && _a !== void 0 ? _a : "12/01/1997",
            titulo: (_b = props.titulo) !== null && _b !== void 0 ? _b : "Titulo",
            descripcion: (_c = props.descripcion) !== null && _c !== void 0 ? _c : "Descripcion",
            textoBoton: (_d = props.textoBoton) !== null && _d !== void 0 ? _d : "Expandir",
            fotoSrc: props.fotoSrc || null,
            contenido: (_e = props.contenido) !== null && _e !== void 0 ? _e : "Contenido",
            selected: false
        };
        return _this;
    }
    MiniPost.prototype.componentDidMount = function () {
        var _a;
        (_a = this.ButtonRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.OpenPost);
    };
    //onClick={this.OpenPost}
    MiniPost.prototype.render = function () {
        return (React.createElement("article", { className: this.state.OutsideFormat },
            React.createElement("div", { ref: this.DivRef, className: this.state.InsideFormat },
                React.createElement("header", null,
                    React.createElement("span", { className: "date" }, this.state.fecha),
                    React.createElement("h2", { className: "titulo-miniPost" },
                        React.createElement("a", null, this.state.titulo)),
                    this.state.selected &&
                        (React.createElement("p", { style: { "marginBottom": "0" } },
                            " ",
                            this.state.descripcion))),
                React.createElement("a", { className: "image fit" },
                    React.createElement("img", { className: "img-miniPost", src: this.state.fotoSrc, alt: "" })),
                !this.state.selected &&
                    (React.createElement("p", { className: "descripcion-miniPost" }, this.state.descripcion)),
                this.state.selected &&
                    (React.createElement("p", null, this.state.contenido)),
                React.createElement("ul", { className: "actions special" },
                    React.createElement("li", null,
                        React.createElement("a", { ref: this.ButtonRef, className: "button" }, this.state.textoBoton))))));
    };
    return MiniPost;
}(React.Component));
exports.MiniPost = MiniPost;


/***/ }),

/***/ "./src/controllers/PostController.tsx":
/*!********************************************!*\
  !*** ./src/controllers/PostController.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostController = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var BackendConnector_1 = __webpack_require__(/*! ../backend/BackendConnector */ "./src/backend/BackendConnector.ts");
var BigPost_1 = __webpack_require__(/*! ../componentes/Posts/BigPost */ "./src/componentes/Posts/BigPost.tsx");
var MiniPost_1 = __webpack_require__(/*! ../componentes/Posts/MiniPost */ "./src/componentes/Posts/MiniPost.tsx");
var PostController = /** @class */ (function () {
    function PostController(backend) {
        this.KeyPrefix = "Post-";
        this.postCounter = 0;
        this.BackEnd = backend !== null && backend !== void 0 ? backend : new BackendConnector_1.BackendConnector();
        this.Posts = [];
        this.LastRequestPosts = [];
    }
    PostController.prototype.getPosts = function () {
        return __awaiter(this, arguments, void 0, function (start, end, newerFirst) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = 4; }
            if (newerFirst === void 0) { newerFirst = true; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.BackEnd.getPosts(start, end, newerFirst)];
                    case 1: return [2 /*return*/, (_a.sent()).sort(function (a, b) {
                            var _a, _b;
                            var aDate = new Date((_a = a.fecha) !== null && _a !== void 0 ? _a : "");
                            var bDate = new Date((_b = b.fecha) !== null && _b !== void 0 ? _b : "");
                            return bDate.getTime() - aDate.getTime();
                        })];
                }
            });
        });
    };
    PostController.prototype.getLastPost = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getPosts(0, 1, true)];
                    case 1:
                        _a.LastRequestPosts = _b.sent();
                        this.LastRequestPosts.forEach(function (p) {
                            _this.Posts.push(p);
                            _this.postCounter++;
                        });
                        return [2 /*return*/, React.createElement(BigPost_1.BigPost, __assign({}, this.LastRequestPosts[0], { key: this.KeyPrefix + "0" }))];
                }
            });
        });
    };
    PostController.prototype.getMiniPosts = function () {
        return __awaiter(this, arguments, void 0, function (start, end, newerFirst) {
            var _a;
            var _this = this;
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = 4; }
            if (newerFirst === void 0) { newerFirst = true; }
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getPosts(start, end, newerFirst)];
                    case 1:
                        _a.LastRequestPosts = _b.sent();
                        this.LastRequestPosts.forEach(function (p) {
                            _this.Posts.push(p);
                        });
                        return [2 /*return*/, this.LastRequestPosts.map(function (p, i) {
                                _this.postCounter++;
                                return React.createElement(MiniPost_1.MiniPost, __assign({}, p, { key: _this.KeyPrefix + _this.postCounter }));
                            })];
                }
            });
        });
    };
    return PostController;
}());
exports.PostController = PostController;


/***/ }),

/***/ "./src/models/Posts.ts":
/*!*****************************!*\
  !*** ./src/models/Posts.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(post) {
        var _a, _b, _c, _d, _e, _f;
        this.descripcion = (_a = post === null || post === void 0 ? void 0 : post.descripcion) !== null && _a !== void 0 ? _a : "";
        this.fecha = (_b = post === null || post === void 0 ? void 0 : post.fecha) !== null && _b !== void 0 ? _b : "";
        this.fotoSrc = (_c = post === null || post === void 0 ? void 0 : post.fotoSrc) !== null && _c !== void 0 ? _c : "";
        this.textoBoton = (_d = post === null || post === void 0 ? void 0 : post.textoBoton) !== null && _d !== void 0 ? _d : "Expandir";
        this.titulo = (_e = post === null || post === void 0 ? void 0 : post.titulo) !== null && _e !== void 0 ? _e : "";
        this.contenido = (_f = post === null || post === void 0 ? void 0 : post.contenido) !== null && _f !== void 0 ? _f : "";
    }
    return Post;
}());
exports.Post = Post;


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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/controllers/PostController.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnNcXFBvc3RDb250cm9sbGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUdBQWlHLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxZQUFZLFNBQVMsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksZUFBZSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVks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QUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7Ozs7Ozs7Ozs7Ozs7QUN2TDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTtBQUNiLEtBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvTUFBb007QUFDcE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0Esd0JBQXdCLFdBQVcsZ0JBQWdCO0FBQ25ELHlCQUF5QixXQUFXLGlCQUFpQjtBQUNyRCx5QkFBeUIsV0FBVyxpQkFBaUI7QUFDckQsMEJBQTBCLFdBQVcsa0JBQWtCO0FBQ3ZELDBCQUEwQixXQUFXLGtCQUFrQjtBQUN2RCxtQ0FBbUMsV0FBVywyQkFBMkI7QUFDekUsNkJBQTZCLFdBQVcscUJBQXFCO0FBQzdELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCwrQ0FBK0MsNkJBQTZCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMseUNBQXlDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFD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b0NBQW9DO0FBQ3BDLGtDQUFrQztBQUNsQyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSwyRkFBMkYsT0FBTywwQ0FBMEM7QUFDNUksNkJBQTZCO0FBQzdCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNELHNCQUFzQjs7Ozs7Ozs7Ozs7O0FDL0hUO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELFlBQVk7Ozs7Ozs7VUNmWjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLWN1ei1pbS1ib3JlZC8uL3NyYy9jb21wb25lbnRlcy9Qb3N0cy9Qb3N0LmNzcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWN1ei1pbS1ib3JlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1jdXotaW0tYm9yZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWN1ei1pbS1ib3JlZC8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1jdXotaW0tYm9yZWQvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL3dlYnNpdGUtY3V6LWltLWJvcmVkLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL3dlYnNpdGUtY3V6LWltLWJvcmVkLy4vc3JjL2NvbXBvbmVudGVzL1Bvc3RzL1Bvc3QuY3NzP2I3OGQiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1jdXotaW0tYm9yZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1jdXotaW0tYm9yZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnNpdGUtY3V6LWltLWJvcmVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnNpdGUtY3V6LWltLWJvcmVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnNpdGUtY3V6LWltLWJvcmVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1jdXotaW0tYm9yZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWN1ei1pbS1ib3JlZC8uL3NyYy9FbnZfVmFyaWFibGVzLnRzIiwid2VicGFjazovL3dlYnNpdGUtY3V6LWltLWJvcmVkLy4vc3JjL2JhY2tlbmQvQmFja2VuZENvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly93ZWJzaXRlLWN1ei1pbS1ib3JlZC8uL3NyYy9jb21wb25lbnRlcy9Qb3N0cy9CaWdQb3N0LnRzeCIsIndlYnBhY2s6Ly93ZWJzaXRlLWN1ei1pbS1ib3JlZC8uL3NyYy9jb21wb25lbnRlcy9Qb3N0cy9NaW5pUG9zdC50c3giLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1jdXotaW0tYm9yZWQvLi9zcmMvY29udHJvbGxlcnMvUG9zdENvbnRyb2xsZXIudHN4Iiwid2VicGFjazovL3dlYnNpdGUtY3V6LWltLWJvcmVkLy4vc3JjL21vZGVscy9Qb3N0cy50cyIsIndlYnBhY2s6Ly93ZWJzaXRlLWN1ei1pbS1ib3JlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJzaXRlLWN1ei1pbS1ib3JlZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJzaXRlLWN1ei1pbS1ib3JlZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1jdXotaW0tYm9yZWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJzaXRlLWN1ei1pbS1ib3JlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnNpdGUtY3V6LWltLWJvcmVkL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1jdXotaW0tYm9yZWQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnNpdGUtY3V6LWltLWJvcmVkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1jdXotaW0tYm9yZWQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnNpdGUtY3V6LWltLWJvcmVkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRpdHVsby1taW5pUG9zdHtcclxuICAgIGhlaWdodDogNXJlbTsgICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5kZXNjcmlwY2lvbi1taW5pUG9zdHtcclxuICAgIGhlaWdodDogNHJlbTsgICAgXHJcbn1cclxuXHJcbi5oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGFuaW1hdGlvbjogSGlkZSAxcyBsaW5lYXIgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5zaG93e1xyXG4gICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICBhbmltYXRpb246IFNob3cgMXMgbGluZWFyIGZvcndhcmRzO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtcG9zdC1pbm5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgYW5pbWF0aW9uOiBjaGFuZ2VJbm5lciAxcyBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTsgICAgXHJcbn1cclxuXHJcbi5zZWxlY3RlZC1wb3N0LWlubmVyIHB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmltZy1taW5pUG9zdHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLnNlbGVjdGVkLXBvc3QtaW5uZXIgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnNlbGVjdGVkLXBvc3Qtb3V0ZXJ7ICAgIFxyXG4gICAgYW5pbWF0aW9uOiBjaGFuZ2VPdXRlciAxcyBsaW5lYXIgZm9yd2FyZHM7XHJcbn1cclxuXHJcblxyXG5cclxuLnVuc2VsZWN0ZWQtcG9zdC1pbm5lcntcclxuICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcclxuICAgIGZsZXgtd3JhcDogdW5zZXQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiB1bnNldDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiB1bnNldDtcclxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcclxuICAgIHdpZHRoOiB1bnNldDsgICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7ICBcclxuICAgIGFuaW1hdGlvbjogcmV2ZXJzZUlubmVyIDFzIGxpbmVhciBmb3J3YXJkcztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudW5zZWxlY3RlZC1wb3N0LWlubmVyIGltZ3sgICBcclxuICAgICAgICBhbmltYXRpb246IHJldmVydEltYWdlIDFzIGxpbmVhciBmb3J3YXJkc1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi51bnNlbGVjdGVkLXBvc3Qtb3V0ZXJ7XHJcbiAgICBhbmltYXRpb246IHJldmVyc2VPdXRlciAxcyBsaW5lYXIgZm9yd2FyZHM7XHJcbn1cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyBjaGFuZ2VPdXRlciB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICA4MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByZXZlcnNlT3V0ZXJ7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgNjAle1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICA4MCV7ICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjaGFuZ2VJbm5lciB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJldmVyc2VJbm5lciB7XHJcbiAgICBmcm9tIHsgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTsgXHJcblxyXG5cclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgNDUle1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTsgXHJcblxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICA2MCV7XHJcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XHJcbiAgICAgICAgZmxleC13cmFwOiBpbml0aWFsO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGluaXRpYWw7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGluaXRpYWw7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGluaXRpYWw7XHJcbiAgICAgICAgd2lkdGg6IGluaXRpYWw7ICAgIFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBpbml0aWFsOyAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJldmVydEltYWdle1xyXG4gICAgZnJvbXtcclxuICAgICAgICBoZWlnaHQ6IDI1cmVtO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgNjAle1xyXG4gICAgICAgIGhlaWdodDogMjVyZW07XHJcbiAgICB9XHJcbiAgICA2MSV7XHJcbiAgICAgICAgaGVpZ2h0OiAxN3JlbTtcclxuICAgIH1cclxuICAgIHRve1xyXG4gICAgICAgIGhlaWdodDogMTdyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgSGlkZSB7XHJcbiAgICBmcm9te1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICB0b3tcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIFNob3cge1xyXG4gICAgZnJvbXtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudGVzL1Bvc3RzL1Bvc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7Ozs7QUFJQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJO1FBQ0k7SUFDSjs7QUFFSjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7OztBQUlBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsVUFBVTtJQUNkO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7O0lBRWpCO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTs7SUFFZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjs7O1FBR2xCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksYUFBYTtRQUNiLDZCQUE2QjtRQUM3QixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7O1FBRWxCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixzQkFBc0I7O0lBRTFCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7O0lBRWpCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdHVsby1taW5pUG9zdHtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtOyAgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcGNpb24tbWluaVBvc3R7XFxyXFxuICAgIGhlaWdodDogNHJlbTsgICAgXFxyXFxufVxcclxcblxcclxcbi5oaWRle1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBhbmltYXRpb246IEhpZGUgMXMgbGluZWFyIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3tcXHJcXG4gICAgZGlzcGxheTogdW5zZXQ7XFxyXFxuICAgIGFuaW1hdGlvbjogU2hvdyAxcyBsaW5lYXIgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZC1wb3N0LWlubmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAgICBcXHJcXG4gICAgYW5pbWF0aW9uOiBjaGFuZ2VJbm5lciAxcyBsaW5lYXIgZm9yd2FyZHM7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQtcG9zdC1pbm5lciBwe1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1taW5pUG9zdHtcXHJcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnRcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcXHJcXG4gICAgLnNlbGVjdGVkLXBvc3QtaW5uZXIgaW1ne1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXJlbSAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZC1wb3N0LW91dGVyeyAgICBcXHJcXG4gICAgYW5pbWF0aW9uOiBjaGFuZ2VPdXRlciAxcyBsaW5lYXIgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi51bnNlbGVjdGVkLXBvc3QtaW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IHVuc2V0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xcclxcbiAgICBmbGV4LXdyYXA6IHVuc2V0O1xcclxcbiAgICBhbGlnbi1jb250ZW50OiB1bnNldDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHVuc2V0O1xcclxcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7XFxyXFxuICAgIHdpZHRoOiB1bnNldDsgICAgXFxyXFxuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0OyAgXFxyXFxuICAgIGFuaW1hdGlvbjogcmV2ZXJzZUlubmVyIDFzIGxpbmVhciBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC51bnNlbGVjdGVkLXBvc3QtaW5uZXIgaW1neyAgIFxcclxcbiAgICAgICAgYW5pbWF0aW9uOiByZXZlcnRJbWFnZSAxcyBsaW5lYXIgZm9yd2FyZHNcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnVuc2VsZWN0ZWQtcG9zdC1vdXRlcntcXHJcXG4gICAgYW5pbWF0aW9uOiByZXZlcnNlT3V0ZXIgMXMgbGluZWFyIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZU91dGVyIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICA4MCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxyXFxuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmV2ZXJzZU91dGVye1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICA2MCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDgwJXsgICAgICAgXFxyXFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlSW5uZXIge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJldmVyc2VJbm5lciB7XFxyXFxuICAgIGZyb20geyAgICAgXFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlOyAgICBcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAlOyBcXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgNDUle1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTsgICAgXFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTsgXFxyXFxuXFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIDYwJXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IGluaXRpYWw7XFxyXFxuICAgICAgICBhbGlnbi1jb250ZW50OiBpbml0aWFsO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGluaXRpYWw7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcXHJcXG4gICAgICAgIHdpZHRoOiBpbml0aWFsOyAgICBcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogaW5pdGlhbDtcXHJcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGluaXRpYWw7ICBcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcmV2ZXJ0SW1hZ2V7XFxyXFxuICAgIGZyb217XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1cmVtO1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG4gICAgNjAle1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICA2MSV7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE3cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIHRve1xcclxcbiAgICAgICAgaGVpZ2h0OiAxN3JlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIEhpZGUge1xcclxcbiAgICBmcm9te1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICB0b3tcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBTaG93IHtcXHJcXG4gICAgZnJvbXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG97XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBNZXRhIFBsYXRmb3JtcywgSW5jLiBhbmQgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJlxuICAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIiVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzXCIsXG4gICAgICAgICAgICBpbmZvWzBdLFxuICAgICAgICAgICAgaW5mb1sxXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICAgIGlmIChudWxsID09PSBtYXliZUl0ZXJhYmxlIHx8IFwib2JqZWN0XCIgIT09IHR5cGVvZiBtYXliZUl0ZXJhYmxlKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIG1heWJlSXRlcmFibGUgPVxuICAgICAgICAoTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSkgfHxcbiAgICAgICAgbWF5YmVJdGVyYWJsZVtcIkBAaXRlcmF0b3JcIl07XG4gICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09PSB0eXBlb2YgbWF5YmVJdGVyYWJsZSA/IG1heWJlSXRlcmFibGUgOiBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICAgICAgcHVibGljSW5zdGFuY2UgPVxuICAgICAgICAoKHB1YmxpY0luc3RhbmNlID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3IpICYmXG4gICAgICAgICAgKHB1YmxpY0luc3RhbmNlLmRpc3BsYXlOYW1lIHx8IHB1YmxpY0luc3RhbmNlLm5hbWUpKSB8fFxuICAgICAgICBcIlJlYWN0Q2xhc3NcIjtcbiAgICAgIHZhciB3YXJuaW5nS2V5ID0gcHVibGljSW5zdGFuY2UgKyBcIi5cIiArIGNhbGxlck5hbWU7XG4gICAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gfHxcbiAgICAgICAgKGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiBJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LlwiLFxuICAgICAgICAgIGNhbGxlck5hbWUsXG4gICAgICAgICAgcHVibGljSW5zdGFuY2VcbiAgICAgICAgKSxcbiAgICAgICAgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9ICEwKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuICAgIGZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIFwiXCIgKyB2YWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgICAgdmFyIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCA9ICExO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSAhMDtcbiAgICAgIH1cbiAgICAgIGlmIChKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQpIHtcbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gY29uc29sZTtcbiAgICAgICAgdmFyIEpTQ29tcGlsZXJfdGVtcF9jb25zdCA9IEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdC5lcnJvcjtcbiAgICAgICAgdmFyIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCRqc2NvbXAkMCA9XG4gICAgICAgICAgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIFN5bWJvbCAmJlxuICAgICAgICAgICAgU3ltYm9sLnRvU3RyaW5nVGFnICYmXG4gICAgICAgICAgICB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddKSB8fFxuICAgICAgICAgIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHxcbiAgICAgICAgICBcIk9iamVjdFwiO1xuICAgICAgICBKU0NvbXBpbGVyX3RlbXBfY29uc3QuY2FsbChcbiAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQsXG4gICAgICAgICAgXCJUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSB1c2luZyBpdCBoZXJlLlwiLFxuICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdCRqc2NvbXAkMFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgICAgIGlmIChudWxsID09IHR5cGUpIHJldHVybiBudWxsO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHR5cGUpXG4gICAgICAgIHJldHVybiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DTElFTlRfUkVGRVJFTkNFJDJcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHR5cGUpIHJldHVybiB0eXBlO1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICByZXR1cm4gXCJGcmFnbWVudFwiO1xuICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlBvcnRhbFwiO1xuICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIFwiUHJvZmlsZXJcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlN0cmljdE1vZGVcIjtcbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlN1c3BlbnNlXCI7XG4gICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgIHJldHVybiBcIlN1c3BlbnNlTGlzdFwiO1xuICAgICAgfVxuICAgICAgaWYgKFwib2JqZWN0XCIgPT09IHR5cGVvZiB0eXBlKVxuICAgICAgICBzd2l0Y2ggKFxuICAgICAgICAgIChcIm51bWJlclwiID09PSB0eXBlb2YgdHlwZS50YWcgJiZcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuIFRoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS5cIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB0eXBlLiQkdHlwZW9mKVxuICAgICAgICApIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiAodHlwZS5kaXNwbGF5TmFtZSB8fCBcIkNvbnRleHRcIikgKyBcIi5Qcm92aWRlclwiO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OU1VNRVJfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiAodHlwZS5fY29udGV4dC5kaXNwbGF5TmFtZSB8fCBcIkNvbnRleHRcIikgKyBcIi5Db25zdW1lclwiO1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgIHZhciBpbm5lclR5cGUgPSB0eXBlLnJlbmRlcjtcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgdHlwZSB8fFxuICAgICAgICAgICAgICAoKHR5cGUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgXCJcIiksXG4gICAgICAgICAgICAgICh0eXBlID0gXCJcIiAhPT0gdHlwZSA/IFwiRm9yd2FyZFJlZihcIiArIHR5cGUgKyBcIilcIiA6IFwiRm9yd2FyZFJlZlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIChpbm5lclR5cGUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGwpLFxuICAgICAgICAgICAgICBudWxsICE9PSBpbm5lclR5cGVcbiAgICAgICAgICAgICAgICA/IGlubmVyVHlwZVxuICAgICAgICAgICAgICAgIDogZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgXCJNZW1vXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICBpbm5lclR5cGUgPSB0eXBlLl9wYXlsb2FkO1xuICAgICAgICAgICAgdHlwZSA9IHR5cGUuX2luaXQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUoaW5uZXJUeXBlKSk7XG4gICAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgICAgIHJldHVybiBcInN0cmluZ1wiID09PSB0eXBlb2YgdHlwZSB8fFxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB0eXBlIHx8XG4gICAgICAgIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHxcbiAgICAgICAgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fFxuICAgICAgICB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8XG4gICAgICAgIHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHxcbiAgICAgICAgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8XG4gICAgICAgIHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8XG4gICAgICAgIChcIm9iamVjdFwiID09PSB0eXBlb2YgdHlwZSAmJlxuICAgICAgICAgIG51bGwgIT09IHR5cGUgJiZcbiAgICAgICAgICAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8XG4gICAgICAgICAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHxcbiAgICAgICAgICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fFxuICAgICAgICAgICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OU1VNRVJfVFlQRSB8fFxuICAgICAgICAgICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fFxuICAgICAgICAgICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRSQxIHx8XG4gICAgICAgICAgICB2b2lkIDAgIT09IHR5cGUuZ2V0TW9kdWxlSWQpKVxuICAgICAgICA/ICEwXG4gICAgICAgIDogITE7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cbiAgICBmdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAgICAgIGlmICgwID09PSBkaXNhYmxlZERlcHRoKSB7XG4gICAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kO1xuICAgICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgICAgd3JpdGFibGU6ICEwXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGRpc2FibGVkRGVwdGgrKztcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICAgICAgZGlzYWJsZWREZXB0aC0tO1xuICAgICAgaWYgKDAgPT09IGRpc2FibGVkRGVwdGgpIHtcbiAgICAgICAgdmFyIHByb3BzID0geyBjb25maWd1cmFibGU6ICEwLCBlbnVtZXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHsgdmFsdWU6IHByZXZMb2cgfSksXG4gICAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywgeyB2YWx1ZTogcHJldkluZm8gfSksXG4gICAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywgeyB2YWx1ZTogcHJldldhcm4gfSksXG4gICAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHsgdmFsdWU6IHByZXZFcnJvciB9KSxcbiAgICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywgeyB2YWx1ZTogcHJldkdyb3VwIH0pLFxuICAgICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7IHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWQgfSksXG4gICAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHsgdmFsdWU6IHByZXZHcm91cEVuZCB9KVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIDAgPiBkaXNhYmxlZERlcHRoICYmXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuXCJcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkge1xuICAgICAgaWYgKHZvaWQgMCA9PT0gcHJlZml4KVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICAgIHByZWZpeCA9IChtYXRjaCAmJiBtYXRjaFsxXSkgfHwgXCJcIjtcbiAgICAgICAgICBzdWZmaXggPVxuICAgICAgICAgICAgLTEgPCB4LnN0YWNrLmluZGV4T2YoXCJcXG4gICAgYXRcIilcbiAgICAgICAgICAgICAgPyBcIiAoPGFub255bW91cz4pXCJcbiAgICAgICAgICAgICAgOiAtMSA8IHguc3RhY2suaW5kZXhPZihcIkBcIilcbiAgICAgICAgICAgICAgICA/IFwiQHVua25vd246MDowXCJcbiAgICAgICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIHJldHVybiBcIlxcblwiICsgcHJlZml4ICsgbmFtZSArIHN1ZmZpeDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gICAgICBpZiAoIWZuIHx8IHJlZW50cnkpIHJldHVybiBcIlwiO1xuICAgICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuICAgICAgaWYgKHZvaWQgMCAhPT0gZnJhbWUpIHJldHVybiBmcmFtZTtcbiAgICAgIHJlZW50cnkgPSAhMDtcbiAgICAgIGZyYW1lID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7XG4gICAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHZvaWQgMDtcbiAgICAgIHZhciBwcmV2aW91c0Rpc3BhdGNoZXIgPSBudWxsO1xuICAgICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuSDtcbiAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLkggPSBudWxsO1xuICAgICAgZGlzYWJsZUxvZ3MoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBSdW5JblJvb3RGcmFtZSA9IHtcbiAgICAgICAgICBEZXRlcm1pbmVDb21wb25lbnRGcmFtZVJvb3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsIFwicHJvcHNcIiwge1xuICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT09IHR5cGVvZiBSZWZsZWN0ICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250cm9sID0geDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoeCQwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wgPSB4JDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoeCQxKSB7XG4gICAgICAgICAgICAgICAgICBjb250cm9sID0geCQxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoRmFrZSA9IGZuKCkpICYmXG4gICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBGYWtlLmNhdGNoICYmXG4gICAgICAgICAgICAgICAgICBGYWtlLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgICAgICAgICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiBcInN0cmluZ1wiID09PSB0eXBlb2Ygc2FtcGxlLnN0YWNrKVxuICAgICAgICAgICAgICAgIHJldHVybiBbc2FtcGxlLnN0YWNrLCBjb250cm9sLnN0YWNrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgbnVsbF07XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBSdW5JblJvb3RGcmFtZS5EZXRlcm1pbmVDb21wb25lbnRGcmFtZVJvb3QuZGlzcGxheU5hbWUgPVxuICAgICAgICAgIFwiRGV0ZXJtaW5lQ29tcG9uZW50RnJhbWVSb290XCI7XG4gICAgICAgIHZhciBuYW1lUHJvcERlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgICAgIFJ1bkluUm9vdEZyYW1lLkRldGVybWluZUNvbXBvbmVudEZyYW1lUm9vdCxcbiAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICApO1xuICAgICAgICBuYW1lUHJvcERlc2NyaXB0b3IgJiZcbiAgICAgICAgICBuYW1lUHJvcERlc2NyaXB0b3IuY29uZmlndXJhYmxlICYmXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgUnVuSW5Sb290RnJhbWUuRGV0ZXJtaW5lQ29tcG9uZW50RnJhbWVSb290LFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICB7IHZhbHVlOiBcIkRldGVybWluZUNvbXBvbmVudEZyYW1lUm9vdFwiIH1cbiAgICAgICAgICApO1xuICAgICAgICB2YXIgX1J1bkluUm9vdEZyYW1lJERldGVyID1cbiAgICAgICAgICAgIFJ1bkluUm9vdEZyYW1lLkRldGVybWluZUNvbXBvbmVudEZyYW1lUm9vdCgpLFxuICAgICAgICAgIHNhbXBsZVN0YWNrID0gX1J1bkluUm9vdEZyYW1lJERldGVyWzBdLFxuICAgICAgICAgIGNvbnRyb2xTdGFjayA9IF9SdW5JblJvb3RGcmFtZSREZXRlclsxXTtcbiAgICAgICAgaWYgKHNhbXBsZVN0YWNrICYmIGNvbnRyb2xTdGFjaykge1xuICAgICAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZVN0YWNrLnNwbGl0KFwiXFxuXCIpLFxuICAgICAgICAgICAgY29udHJvbExpbmVzID0gY29udHJvbFN0YWNrLnNwbGl0KFwiXFxuXCIpO1xuICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICBfUnVuSW5Sb290RnJhbWUkRGV0ZXIgPSBuYW1lUHJvcERlc2NyaXB0b3IgPSAwO1xuICAgICAgICAgICAgbmFtZVByb3BEZXNjcmlwdG9yIDwgc2FtcGxlTGluZXMubGVuZ3RoICYmXG4gICAgICAgICAgICAhc2FtcGxlTGluZXNbbmFtZVByb3BEZXNjcmlwdG9yXS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgXCJEZXRlcm1pbmVDb21wb25lbnRGcmFtZVJvb3RcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgIClcbiAgICAgICAgICAgIG5hbWVQcm9wRGVzY3JpcHRvcisrO1xuICAgICAgICAgIGZvciAoXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBfUnVuSW5Sb290RnJhbWUkRGV0ZXIgPCBjb250cm9sTGluZXMubGVuZ3RoICYmXG4gICAgICAgICAgICAhY29udHJvbExpbmVzW19SdW5JblJvb3RGcmFtZSREZXRlcl0uaW5jbHVkZXMoXG4gICAgICAgICAgICAgIFwiRGV0ZXJtaW5lQ29tcG9uZW50RnJhbWVSb290XCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICApXG4gICAgICAgICAgICBfUnVuSW5Sb290RnJhbWUkRGV0ZXIrKztcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBuYW1lUHJvcERlc2NyaXB0b3IgPT09IHNhbXBsZUxpbmVzLmxlbmd0aCB8fFxuICAgICAgICAgICAgX1J1bkluUm9vdEZyYW1lJERldGVyID09PSBjb250cm9sTGluZXMubGVuZ3RoXG4gICAgICAgICAgKVxuICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgbmFtZVByb3BEZXNjcmlwdG9yID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICBfUnVuSW5Sb290RnJhbWUkRGV0ZXIgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgMSA8PSBuYW1lUHJvcERlc2NyaXB0b3IgJiZcbiAgICAgICAgICAgICAgMCA8PSBfUnVuSW5Sb290RnJhbWUkRGV0ZXIgJiZcbiAgICAgICAgICAgICAgc2FtcGxlTGluZXNbbmFtZVByb3BEZXNjcmlwdG9yXSAhPT1cbiAgICAgICAgICAgICAgICBjb250cm9sTGluZXNbX1J1bkluUm9vdEZyYW1lJERldGVyXTtcblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBfUnVuSW5Sb290RnJhbWUkRGV0ZXItLTtcbiAgICAgICAgICBmb3IgKFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgMSA8PSBuYW1lUHJvcERlc2NyaXB0b3IgJiYgMCA8PSBfUnVuSW5Sb290RnJhbWUkRGV0ZXI7XG4gICAgICAgICAgICBuYW1lUHJvcERlc2NyaXB0b3ItLSwgX1J1bkluUm9vdEZyYW1lJERldGVyLS1cbiAgICAgICAgICApXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHNhbXBsZUxpbmVzW25hbWVQcm9wRGVzY3JpcHRvcl0gIT09XG4gICAgICAgICAgICAgIGNvbnRyb2xMaW5lc1tfUnVuSW5Sb290RnJhbWUkRGV0ZXJdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKDEgIT09IG5hbWVQcm9wRGVzY3JpcHRvciB8fCAxICE9PSBfUnVuSW5Sb290RnJhbWUkRGV0ZXIpIHtcbiAgICAgICAgICAgICAgICBkb1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAobmFtZVByb3BEZXNjcmlwdG9yLS0sXG4gICAgICAgICAgICAgICAgICAgIF9SdW5JblJvb3RGcmFtZSREZXRlci0tLFxuICAgICAgICAgICAgICAgICAgICAwID4gX1J1bkluUm9vdEZyYW1lJERldGVyIHx8XG4gICAgICAgICAgICAgICAgICAgICAgc2FtcGxlTGluZXNbbmFtZVByb3BEZXNjcmlwdG9yXSAhPT1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xMaW5lc1tfUnVuSW5Sb290RnJhbWUkRGV0ZXJdKVxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPVxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZUxpbmVzW25hbWVQcm9wRGVzY3JpcHRvcl0ucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIGF0IG5ldyBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIGF0IFwiXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZm4uZGlzcGxheU5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICBfZnJhbWUuaW5jbHVkZXMoXCI8YW5vbnltb3VzPlwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgIChfZnJhbWUgPSBfZnJhbWUucmVwbGFjZShcIjxhbm9ueW1vdXM+XCIsIGZuLmRpc3BsYXlOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGZuICYmXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKDEgPD0gbmFtZVByb3BEZXNjcmlwdG9yICYmIDAgPD0gX1J1bkluUm9vdEZyYW1lJERldGVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgKHJlZW50cnkgPSAhMSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLkggPSBwcmV2aW91c0Rpc3BhdGNoZXIpLFxuICAgICAgICAgIHJlZW5hYmxlTG9ncygpLFxuICAgICAgICAgIChFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IGZyYW1lKTtcbiAgICAgIH1cbiAgICAgIHNhbXBsZUxpbmVzID0gKHNhbXBsZUxpbmVzID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogXCJcIilcbiAgICAgICAgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShzYW1wbGVMaW5lcylcbiAgICAgICAgOiBcIlwiO1xuICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgZm4gJiYgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHNhbXBsZUxpbmVzKTtcbiAgICAgIHJldHVybiBzYW1wbGVMaW5lcztcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUpIHtcbiAgICAgIGlmIChudWxsID09IHR5cGUpIHJldHVybiBcIlwiO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHR5cGUpIHtcbiAgICAgICAgdmFyIHByb3RvdHlwZSA9IHR5cGUucHJvdG90eXBlO1xuICAgICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgICEoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHR5cGUpIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKFwiU3VzcGVuc2VcIik7XG4gICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShcIlN1c3BlbnNlTGlzdFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChcIm9iamVjdFwiID09PSB0eXBlb2YgdHlwZSlcbiAgICAgICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuICh0eXBlID0gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLnJlbmRlciwgITEpKSwgdHlwZTtcbiAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlKTtcbiAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgIHByb3RvdHlwZSA9IHR5cGUuX3BheWxvYWQ7XG4gICAgICAgICAgICB0eXBlID0gdHlwZS5faW5pdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZShwcm90b3R5cGUpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRPd25lcigpIHtcbiAgICAgIHZhciBkaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuQTtcbiAgICAgIHJldHVybiBudWxsID09PSBkaXNwYXRjaGVyID8gbnVsbCA6IGRpc3BhdGNoZXIuZ2V0T3duZXIoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIFwia2V5XCIpKSB7XG4gICAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgXCJrZXlcIikuZ2V0O1xuICAgICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykgcmV0dXJuICExO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gY29uZmlnLmtleTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gICAgICBmdW5jdGlvbiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkoKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duIHx8XG4gICAgICAgICAgKChzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9ICEwKSxcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCIlczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCBpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lIHZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgcHJvcC4gKGh0dHBzOi8vcmVhY3QuZGV2L2xpbmsvc3BlY2lhbC1wcm9wcylcIixcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgKSk7XG4gICAgICB9XG4gICAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSAhMDtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgXCJrZXlcIiwge1xuICAgICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVsZW1lbnRSZWZHZXR0ZXJXaXRoRGVwcmVjYXRpb25XYXJuaW5nKCkge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodGhpcy50eXBlKTtcbiAgICAgIGRpZFdhcm5BYm91dEVsZW1lbnRSZWZbY29tcG9uZW50TmFtZV0gfHxcbiAgICAgICAgKChkaWRXYXJuQWJvdXRFbGVtZW50UmVmW2NvbXBvbmVudE5hbWVdID0gITApLFxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiQWNjZXNzaW5nIGVsZW1lbnQucmVmIHdhcyByZW1vdmVkIGluIFJlYWN0IDE5LiByZWYgaXMgbm93IGEgcmVndWxhciBwcm9wLiBJdCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgSlNYIEVsZW1lbnQgdHlwZSBpbiBhIGZ1dHVyZSByZWxlYXNlLlwiXG4gICAgICAgICkpO1xuICAgICAgY29tcG9uZW50TmFtZSA9IHRoaXMucHJvcHMucmVmO1xuICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gY29tcG9uZW50TmFtZSA/IGNvbXBvbmVudE5hbWUgOiBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICAgICAgc2VsZiA9IHByb3BzLnJlZjtcbiAgICAgIHR5cGUgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIF9vd25lcjogb3duZXJcbiAgICAgIH07XG4gICAgICBudWxsICE9PSAodm9pZCAwICE9PSBzZWxmID8gc2VsZiA6IG51bGwpXG4gICAgICAgID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwicmVmXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICAgICAgZ2V0OiBlbGVtZW50UmVmR2V0dGVyV2l0aERlcHJlY2F0aW9uV2FybmluZ1xuICAgICAgICAgIH0pXG4gICAgICAgIDogT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGUsIFwicmVmXCIsIHsgZW51bWVyYWJsZTogITEsIHZhbHVlOiBudWxsIH0pO1xuICAgICAgdHlwZS5fc3RvcmUgPSB7fTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLl9zdG9yZSwgXCJ2YWxpZGF0ZWRcIiwge1xuICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZSwgXCJfZGVidWdJbmZvXCIsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmZyZWV6ZSAmJiAoT2JqZWN0LmZyZWV6ZSh0eXBlLnByb3BzKSwgT2JqZWN0LmZyZWV6ZSh0eXBlKSk7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICAgICAgbmV3S2V5ID0gUmVhY3RFbGVtZW50KFxuICAgICAgICBvbGRFbGVtZW50LnR5cGUsXG4gICAgICAgIG5ld0tleSxcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIG9sZEVsZW1lbnQuX293bmVyLFxuICAgICAgICBvbGRFbGVtZW50LnByb3BzXG4gICAgICApO1xuICAgICAgbmV3S2V5Ll9zdG9yZS52YWxpZGF0ZWQgPSBvbGRFbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQ7XG4gICAgICByZXR1cm4gbmV3S2V5O1xuICAgIH1cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBub2RlICYmXG4gICAgICAgIG5vZGUgJiZcbiAgICAgICAgbm9kZS4kJHR5cGVvZiAhPT0gUkVBQ1RfQ0xJRU5UX1JFRkVSRU5DRVxuICAgICAgKVxuICAgICAgICBpZiAoaXNBcnJheUltcGwobm9kZSkpXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuICAgICAgICAgICAgaXNWYWxpZEVsZW1lbnQoY2hpbGQpICYmIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpXG4gICAgICAgICAgbm9kZS5fc3RvcmUgJiYgKG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IDEpO1xuICAgICAgICBlbHNlIGlmIChcbiAgICAgICAgICAoKGkgPSBnZXRJdGVyYXRvckZuKG5vZGUpKSxcbiAgICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiBpICYmXG4gICAgICAgICAgICBpICE9PSBub2RlLmVudHJpZXMgJiZcbiAgICAgICAgICAgICgoaSA9IGkuY2FsbChub2RlKSksIGkgIT09IG5vZGUpKVxuICAgICAgICApXG4gICAgICAgICAgZm9yICg7ICEobm9kZSA9IGkubmV4dCgpKS5kb25lOyApXG4gICAgICAgICAgICBpc1ZhbGlkRWxlbWVudChub2RlLnZhbHVlKSAmJlxuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KG5vZGUudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBvYmplY3QgJiZcbiAgICAgICAgbnVsbCAhPT0gb2JqZWN0ICYmXG4gICAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFXG4gICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZWxlbWVudC5fc3RvcmUgJiZcbiAgICAgICAgIWVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCAmJlxuICAgICAgICBudWxsID09IGVsZW1lbnQua2V5ICYmXG4gICAgICAgICgoZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gMSksXG4gICAgICAgIChwYXJlbnRUeXBlID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSksXG4gICAgICAgICFvd25lckhhc0tleVVzZVdhcm5pbmdbcGFyZW50VHlwZV0pXG4gICAgICApIHtcbiAgICAgICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW3BhcmVudFR5cGVdID0gITA7XG4gICAgICAgIHZhciBjaGlsZE93bmVyID0gXCJcIjtcbiAgICAgICAgZWxlbWVudCAmJlxuICAgICAgICAgIG51bGwgIT0gZWxlbWVudC5fb3duZXIgJiZcbiAgICAgICAgICBlbGVtZW50Ll9vd25lciAhPT0gZ2V0T3duZXIoKSAmJlxuICAgICAgICAgICgoY2hpbGRPd25lciA9IG51bGwpLFxuICAgICAgICAgIFwibnVtYmVyXCIgPT09IHR5cGVvZiBlbGVtZW50Ll9vd25lci50YWdcbiAgICAgICAgICAgID8gKGNoaWxkT3duZXIgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkpXG4gICAgICAgICAgICA6IFwic3RyaW5nXCIgPT09IHR5cGVvZiBlbGVtZW50Ll9vd25lci5uYW1lICYmXG4gICAgICAgICAgICAgIChjaGlsZE93bmVyID0gZWxlbWVudC5fb3duZXIubmFtZSksXG4gICAgICAgICAgKGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGNoaWxkT3duZXIgKyBcIi5cIikpO1xuICAgICAgICB2YXIgcHJldkdldEN1cnJlbnRTdGFjayA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLmdldEN1cnJlbnRTdGFjaztcbiAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuZ2V0Q3VycmVudFN0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUpO1xuICAgICAgICAgIHByZXZHZXRDdXJyZW50U3RhY2sgJiYgKHN0YWNrICs9IHByZXZHZXRDdXJyZW50U3RhY2soKSB8fCBcIlwiKTtcbiAgICAgICAgICByZXR1cm4gc3RhY2s7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4lcyVzIFNlZSBodHRwczovL3JlYWN0LmRldi9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLFxuICAgICAgICAgIHBhcmVudFR5cGUsXG4gICAgICAgICAgY2hpbGRPd25lclxuICAgICAgICApO1xuICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy5nZXRDdXJyZW50U3RhY2sgPSBwcmV2R2V0Q3VycmVudFN0YWNrO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gXCJcIixcbiAgICAgICAgb3duZXIgPSBnZXRPd25lcigpO1xuICAgICAgb3duZXIgJiZcbiAgICAgICAgKG93bmVyID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKG93bmVyLnR5cGUpKSAmJlxuICAgICAgICAoaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYFwiICsgb3duZXIgKyBcImAuXCIpO1xuICAgICAgaW5mbyB8fFxuICAgICAgICAoKHBhcmVudFR5cGUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUocGFyZW50VHlwZSkpICYmXG4gICAgICAgICAgKGluZm8gPVxuICAgICAgICAgICAgXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudFR5cGUgKyBcIj4uXCIpKTtcbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gICAgICB2YXIgZXNjYXBlckxvb2t1cCA9IHsgXCI9XCI6IFwiPTBcIiwgXCI6XCI6IFwiPTJcIiB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgXCIkXCIgK1xuICAgICAgICBrZXkucmVwbGFjZSgvWz06XS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICByZXR1cm4gXCJvYmplY3RcIiA9PT0gdHlwZW9mIGVsZW1lbnQgJiZcbiAgICAgICAgbnVsbCAhPT0gZWxlbWVudCAmJlxuICAgICAgICBudWxsICE9IGVsZW1lbnQua2V5XG4gICAgICAgID8gKGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oZWxlbWVudC5rZXkpLCBlc2NhcGUoXCJcIiArIGVsZW1lbnQua2V5KSlcbiAgICAgICAgOiBpbmRleC50b1N0cmluZygzNik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vb3AkMSgpIHt9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZVRoZW5hYmxlKHRoZW5hYmxlKSB7XG4gICAgICBzd2l0Y2ggKHRoZW5hYmxlLnN0YXR1cykge1xuICAgICAgICBjYXNlIFwiZnVsZmlsbGVkXCI6XG4gICAgICAgICAgcmV0dXJuIHRoZW5hYmxlLnZhbHVlO1xuICAgICAgICBjYXNlIFwicmVqZWN0ZWRcIjpcbiAgICAgICAgICB0aHJvdyB0aGVuYWJsZS5yZWFzb247XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3dpdGNoIChcbiAgICAgICAgICAgIChcInN0cmluZ1wiID09PSB0eXBlb2YgdGhlbmFibGUuc3RhdHVzXG4gICAgICAgICAgICAgID8gdGhlbmFibGUudGhlbihub29wJDEsIG5vb3AkMSlcbiAgICAgICAgICAgICAgOiAoKHRoZW5hYmxlLnN0YXR1cyA9IFwicGVuZGluZ1wiKSxcbiAgICAgICAgICAgICAgICB0aGVuYWJsZS50aGVuKFxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGZ1bGZpbGxlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIFwicGVuZGluZ1wiID09PSB0aGVuYWJsZS5zdGF0dXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoKHRoZW5hYmxlLnN0YXR1cyA9IFwiZnVsZmlsbGVkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICh0aGVuYWJsZS52YWx1ZSA9IGZ1bGZpbGxlZFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFwicGVuZGluZ1wiID09PSB0aGVuYWJsZS5zdGF0dXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoKHRoZW5hYmxlLnN0YXR1cyA9IFwicmVqZWN0ZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgKHRoZW5hYmxlLnJlYXNvbiA9IGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICB0aGVuYWJsZS5zdGF0dXMpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjYXNlIFwiZnVsZmlsbGVkXCI6XG4gICAgICAgICAgICAgIHJldHVybiB0aGVuYWJsZS52YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgXCJyZWplY3RlZFwiOlxuICAgICAgICAgICAgICB0aHJvdyB0aGVuYWJsZS5yZWFzb247XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgdGhlbmFibGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGUgfHwgXCJib29sZWFuXCIgPT09IHR5cGUpIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgIHZhciBpbnZva2VDYWxsYmFjayA9ICExO1xuICAgICAgaWYgKG51bGwgPT09IGNoaWxkcmVuKSBpbnZva2VDYWxsYmFjayA9ICEwO1xuICAgICAgZWxzZVxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwiYmlnaW50XCI6XG4gICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gITA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gITA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAoaW52b2tlQ2FsbGJhY2sgPSBjaGlsZHJlbi5faW5pdCksXG4gICAgICAgICAgICAgICAgICBtYXBJbnRvQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgIGludm9rZUNhbGxiYWNrKGNoaWxkcmVuLl9wYXlsb2FkKSxcbiAgICAgICAgICAgICAgICAgICAgYXJyYXksXG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSBjaGlsZHJlbjtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayhpbnZva2VDYWxsYmFjayk7XG4gICAgICAgIHZhciBjaGlsZEtleSA9XG4gICAgICAgICAgXCJcIiA9PT0gbmFtZVNvRmFyID8gXCIuXCIgKyBnZXRFbGVtZW50S2V5KGludm9rZUNhbGxiYWNrLCAwKSA6IG5hbWVTb0ZhcjtcbiAgICAgICAgaXNBcnJheUltcGwoY2FsbGJhY2spXG4gICAgICAgICAgPyAoKGVzY2FwZWRQcmVmaXggPSBcIlwiKSxcbiAgICAgICAgICAgIG51bGwgIT0gY2hpbGRLZXkgJiZcbiAgICAgICAgICAgICAgKGVzY2FwZWRQcmVmaXggPVxuICAgICAgICAgICAgICAgIGNoaWxkS2V5LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsIFwiJCYvXCIpICsgXCIvXCIpLFxuICAgICAgICAgICAgbWFwSW50b0FycmF5KGNhbGxiYWNrLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgXCJcIiwgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICA6IG51bGwgIT0gY2FsbGJhY2sgJiZcbiAgICAgICAgICAgIChpc1ZhbGlkRWxlbWVudChjYWxsYmFjaykgJiZcbiAgICAgICAgICAgICAgKG51bGwgIT0gY2FsbGJhY2sua2V5ICYmXG4gICAgICAgICAgICAgICAgKChpbnZva2VDYWxsYmFjayAmJiBpbnZva2VDYWxsYmFjay5rZXkgPT09IGNhbGxiYWNrLmtleSkgfHxcbiAgICAgICAgICAgICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY2FsbGJhY2sua2V5KSksXG4gICAgICAgICAgICAgIChlc2NhcGVkUHJlZml4ID0gY2xvbmVBbmRSZXBsYWNlS2V5KFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXggK1xuICAgICAgICAgICAgICAgICAgKG51bGwgPT0gY2FsbGJhY2sua2V5IHx8XG4gICAgICAgICAgICAgICAgICAoaW52b2tlQ2FsbGJhY2sgJiYgaW52b2tlQ2FsbGJhY2sua2V5ID09PSBjYWxsYmFjay5rZXkpXG4gICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICA6IChcIlwiICsgY2FsbGJhY2sua2V5KS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiQmL1wiXG4gICAgICAgICAgICAgICAgICAgICAgKSArIFwiL1wiKSArXG4gICAgICAgICAgICAgICAgICBjaGlsZEtleVxuICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgXCJcIiAhPT0gbmFtZVNvRmFyICYmXG4gICAgICAgICAgICAgICAgbnVsbCAhPSBpbnZva2VDYWxsYmFjayAmJlxuICAgICAgICAgICAgICAgIGlzVmFsaWRFbGVtZW50KGludm9rZUNhbGxiYWNrKSAmJlxuICAgICAgICAgICAgICAgIG51bGwgPT0gaW52b2tlQ2FsbGJhY2sua2V5ICYmXG4gICAgICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2suX3N0b3JlICYmXG4gICAgICAgICAgICAgICAgIWludm9rZUNhbGxiYWNrLl9zdG9yZS52YWxpZGF0ZWQgJiZcbiAgICAgICAgICAgICAgICAoZXNjYXBlZFByZWZpeC5fc3RvcmUudmFsaWRhdGVkID0gMiksXG4gICAgICAgICAgICAgIChjYWxsYmFjayA9IGVzY2FwZWRQcmVmaXgpKSxcbiAgICAgICAgICAgIGFycmF5LnB1c2goY2FsbGJhY2spKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpbnZva2VDYWxsYmFjayA9IDA7XG4gICAgICBjaGlsZEtleSA9IFwiXCIgPT09IG5hbWVTb0ZhciA/IFwiLlwiIDogbmFtZVNvRmFyICsgXCI6XCI7XG4gICAgICBpZiAoaXNBcnJheUltcGwoY2hpbGRyZW4pKVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxuICAgICAgICAgIChuYW1lU29GYXIgPSBjaGlsZHJlbltpXSksXG4gICAgICAgICAgICAodHlwZSA9IGNoaWxkS2V5ICsgZ2V0RWxlbWVudEtleShuYW1lU29GYXIsIGkpKSxcbiAgICAgICAgICAgIChpbnZva2VDYWxsYmFjayArPSBtYXBJbnRvQXJyYXkoXG4gICAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgICAgYXJyYXksXG4gICAgICAgICAgICAgIGVzY2FwZWRQcmVmaXgsXG4gICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgICApKTtcbiAgICAgIGVsc2UgaWYgKCgoaSA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pKSwgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgaSkpXG4gICAgICAgIGZvciAoXG4gICAgICAgICAgaSA9PT0gY2hpbGRyZW4uZW50cmllcyAmJlxuICAgICAgICAgICAgKGRpZFdhcm5BYm91dE1hcHMgfHxcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIFwiVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLlwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAoZGlkV2FybkFib3V0TWFwcyA9ICEwKSksXG4gICAgICAgICAgICBjaGlsZHJlbiA9IGkuY2FsbChjaGlsZHJlbiksXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAhKG5hbWVTb0ZhciA9IGNoaWxkcmVuLm5leHQoKSkuZG9uZTtcblxuICAgICAgICApXG4gICAgICAgICAgKG5hbWVTb0ZhciA9IG5hbWVTb0Zhci52YWx1ZSksXG4gICAgICAgICAgICAodHlwZSA9IGNoaWxkS2V5ICsgZ2V0RWxlbWVudEtleShuYW1lU29GYXIsIGkrKykpLFxuICAgICAgICAgICAgKGludm9rZUNhbGxiYWNrICs9IG1hcEludG9BcnJheShcbiAgICAgICAgICAgICAgbmFtZVNvRmFyLFxuICAgICAgICAgICAgICBhcnJheSxcbiAgICAgICAgICAgICAgZXNjYXBlZFByZWZpeCxcbiAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2tcbiAgICAgICAgICAgICkpO1xuICAgICAgZWxzZSBpZiAoXCJvYmplY3RcIiA9PT0gdHlwZSkge1xuICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgY2hpbGRyZW4udGhlbilcbiAgICAgICAgICByZXR1cm4gbWFwSW50b0FycmF5KFxuICAgICAgICAgICAgcmVzb2x2ZVRoZW5hYmxlKGNoaWxkcmVuKSxcbiAgICAgICAgICAgIGFycmF5LFxuICAgICAgICAgICAgZXNjYXBlZFByZWZpeCxcbiAgICAgICAgICAgIG5hbWVTb0ZhcixcbiAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgKTtcbiAgICAgICAgYXJyYXkgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgK1xuICAgICAgICAgICAgKFwiW29iamVjdCBPYmplY3RdXCIgPT09IGFycmF5XG4gICAgICAgICAgICAgID8gXCJvYmplY3Qgd2l0aCBrZXlzIHtcIiArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKFwiLCBcIikgKyBcIn1cIlxuICAgICAgICAgICAgICA6IGFycmF5KSArXG4gICAgICAgICAgICBcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGludm9rZUNhbGxiYWNrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICAgICAgaWYgKG51bGwgPT0gY2hpbGRyZW4pIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIHZhciByZXN1bHQgPSBbXSxcbiAgICAgICAgY291bnQgPSAwO1xuICAgICAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsIFwiXCIsIFwiXCIsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgICAgIGlmICgtMSA9PT0gcGF5bG9hZC5fc3RhdHVzKSB7XG4gICAgICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgICAgICBjdG9yID0gY3RvcigpO1xuICAgICAgICBjdG9yLnRoZW4oXG4gICAgICAgICAgZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKDAgPT09IHBheWxvYWQuX3N0YXR1cyB8fCAtMSA9PT0gcGF5bG9hZC5fc3RhdHVzKVxuICAgICAgICAgICAgICAocGF5bG9hZC5fc3RhdHVzID0gMSksIChwYXlsb2FkLl9yZXN1bHQgPSBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoMCA9PT0gcGF5bG9hZC5fc3RhdHVzIHx8IC0xID09PSBwYXlsb2FkLl9zdGF0dXMpXG4gICAgICAgICAgICAgIChwYXlsb2FkLl9zdGF0dXMgPSAyKSwgKHBheWxvYWQuX3Jlc3VsdCA9IGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIC0xID09PSBwYXlsb2FkLl9zdGF0dXMgJiZcbiAgICAgICAgICAoKHBheWxvYWQuX3N0YXR1cyA9IDApLCAocGF5bG9hZC5fcmVzdWx0ID0gY3RvcikpO1xuICAgICAgfVxuICAgICAgaWYgKDEgPT09IHBheWxvYWQuX3N0YXR1cylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoY3RvciA9IHBheWxvYWQuX3Jlc3VsdCksXG4gICAgICAgICAgdm9pZCAwID09PSBjdG9yICYmXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICBcImxhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuIEluc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9NeUNvbXBvbmVudCcpKVxcblxcbkRpZCB5b3UgYWNjaWRlbnRhbGx5IHB1dCBjdXJseSBicmFjZXMgYXJvdW5kIHRoZSBpbXBvcnQ/XCIsXG4gICAgICAgICAgICAgIGN0b3JcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXCJkZWZhdWx0XCIgaW4gY3RvciB8fFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiBJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gIGNvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vTXlDb21wb25lbnQnKSlcIixcbiAgICAgICAgICAgICAgY3RvclxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBjdG9yLmRlZmF1bHRcbiAgICAgICAgKTtcbiAgICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gICAgICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLkg7XG4gICAgICBudWxsID09PSBkaXNwYXRjaGVyICYmXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdC5kZXYvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCJcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiBkaXNwYXRjaGVyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub29wKCkge31cbiAgICBmdW5jdGlvbiBlbnF1ZXVlVGFzayh0YXNrKSB7XG4gICAgICBpZiAobnVsbCA9PT0gZW5xdWV1ZVRhc2tJbXBsKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gKFwicmVxdWlyZVwiICsgTWF0aC5yYW5kb20oKSkuc2xpY2UoMCwgNyk7XG4gICAgICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gKG1vZHVsZSAmJiBtb2R1bGVbcmVxdWlyZVN0cmluZ10pLmNhbGwoXG4gICAgICAgICAgICBtb2R1bGUsXG4gICAgICAgICAgICBcInRpbWVyc1wiXG4gICAgICAgICAgKS5zZXRJbW1lZGlhdGU7XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICBlbnF1ZXVlVGFza0ltcGwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICExID09PSBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCAmJlxuICAgICAgICAgICAgICAoKGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gITApLFxuICAgICAgICAgICAgICBcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgJiZcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgXCJUaGlzIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBhIE1lc3NhZ2VDaGFubmVsIGltcGxlbWVudGF0aW9uLCBzbyBlbnF1ZXVpbmcgdGFza3MgdmlhIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pIHdpbGwgZmFpbC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3VlcyBpZiB5b3UgZW5jb3VudGVyIHRoaXMgd2FybmluZy5cIlxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKHZvaWQgMCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgcmV0dXJuIGVucXVldWVUYXNrSW1wbCh0YXNrKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWdncmVnYXRlRXJyb3JzKGVycm9ycykge1xuICAgICAgcmV0dXJuIDEgPCBlcnJvcnMubGVuZ3RoICYmIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIEFnZ3JlZ2F0ZUVycm9yXG4gICAgICAgID8gbmV3IEFnZ3JlZ2F0ZUVycm9yKGVycm9ycylcbiAgICAgICAgOiBlcnJvcnNbMF07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBvcEFjdFNjb3BlKHByZXZBY3RRdWV1ZSwgcHJldkFjdFNjb3BlRGVwdGgpIHtcbiAgICAgIHByZXZBY3RTY29wZURlcHRoICE9PSBhY3RTY29wZURlcHRoIC0gMSAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiWW91IHNlZW0gdG8gaGF2ZSBvdmVybGFwcGluZyBhY3QoKSBjYWxscywgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLiBCZSBzdXJlIHRvIGF3YWl0IHByZXZpb3VzIGFjdCgpIGNhbGxzIGJlZm9yZSBtYWtpbmcgYSBuZXcgb25lLiBcIlxuICAgICAgICApO1xuICAgICAgYWN0U2NvcGVEZXB0aCA9IHByZXZBY3RTY29wZURlcHRoO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBxdWV1ZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlO1xuICAgICAgaWYgKG51bGwgIT09IHF1ZXVlKVxuICAgICAgICBpZiAoMCAhPT0gcXVldWUubGVuZ3RoKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgZWxzZSBSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9IG51bGw7XG4gICAgICAwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aFxuICAgICAgICA/ICgocXVldWUgPSBhZ2dyZWdhdGVFcnJvcnMoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzKSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICByZWplY3QocXVldWUpKVxuICAgICAgICA6IHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSB7XG4gICAgICBpZiAoIWlzRmx1c2hpbmcpIHtcbiAgICAgICAgaXNGbHVzaGluZyA9ICEwO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICg7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLmRpZFVzZVByb21pc2UgPSAhMTtcbiAgICAgICAgICAgICAgdmFyIGNvbnRpbnVhdGlvbiA9IGNhbGxiYWNrKCExKTtcbiAgICAgICAgICAgICAgaWYgKG51bGwgIT09IGNvbnRpbnVhdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChSZWFjdFNoYXJlZEludGVybmFscy5kaWRVc2VQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICBxdWV1ZVtpXSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgcXVldWUuc3BsaWNlKDAsIGkpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGNvbnRpbnVhdGlvbjtcbiAgICAgICAgICAgICAgfSBlbHNlIGJyZWFrO1xuICAgICAgICAgICAgfSB3aGlsZSAoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcXVldWUuc3BsaWNlKDAsIGkgKyAxKSwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlzRmx1c2hpbmcgPSAhMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICYmXG4gICAgICBcImZ1bmN0aW9uXCIgPT09XG4gICAgICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ICYmXG4gICAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KEVycm9yKCkpO1xuICAgIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QudHJhbnNpdGlvbmFsLmVsZW1lbnRcIiksXG4gICAgICBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIiksXG4gICAgICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLFxuICAgICAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKSxcbiAgICAgIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik7XG4gICAgU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpO1xuICAgIHZhciBSRUFDVF9DT05TVU1FUl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnN1bWVyXCIpLFxuICAgICAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksXG4gICAgICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLFxuICAgICAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSxcbiAgICAgIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpLFxuICAgICAgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIiksXG4gICAgICBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKSxcbiAgICAgIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKSxcbiAgICAgIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcixcbiAgICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9LFxuICAgICAgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gICAgICAgIGlzTW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgXCJmb3JjZVVwZGF0ZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIFwicmVwbGFjZVN0YXRlXCIpO1xuICAgICAgICB9LFxuICAgICAgICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBcInNldFN0YXRlXCIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXNzaWduID0gT2JqZWN0LmFzc2lnbixcbiAgICAgIGVtcHR5T2JqZWN0ID0ge307XG4gICAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIFwib2JqZWN0XCIgIT09IHR5cGVvZiBwYXJ0aWFsU3RhdGUgJiZcbiAgICAgICAgXCJmdW5jdGlvblwiICE9PSB0eXBlb2YgcGFydGlhbFN0YXRlICYmXG4gICAgICAgIG51bGwgIT0gcGFydGlhbFN0YXRlXG4gICAgICApXG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIFwidGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCJcbiAgICAgICAgKTtcbiAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgXCJzZXRTdGF0ZVwiKTtcbiAgICB9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssIFwiZm9yY2VVcGRhdGVcIik7XG4gICAgfTtcbiAgICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgICAgIGlzTW91bnRlZDogW1xuICAgICAgICAgIFwiaXNNb3VudGVkXCIsXG4gICAgICAgICAgXCJJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiBjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy5cIlxuICAgICAgICBdLFxuICAgICAgICByZXBsYWNlU3RhdGU6IFtcbiAgICAgICAgICBcInJlcGxhY2VTdGF0ZVwiLFxuICAgICAgICAgIFwiUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS5cIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgZm5OYW1lO1xuICAgIGZvciAoZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKVxuICAgICAgZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSAmJlxuICAgICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICBDb21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICAgIGRlcHJlY2F0ZWRBUElzID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbiAgICBkZXByZWNhdGVkQVBJcy5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7XG4gICAgYXNzaWduKGRlcHJlY2F0ZWRBUElzLCBDb21wb25lbnQucHJvdG90eXBlKTtcbiAgICBkZXByZWNhdGVkQVBJcy5pc1B1cmVSZWFjdENvbXBvbmVudCA9ICEwO1xuICAgIHZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXksXG4gICAgICBSRUFDVF9DTElFTlRfUkVGRVJFTkNFJDIgPSBTeW1ib2wuZm9yKFwicmVhY3QuY2xpZW50LnJlZmVyZW5jZVwiKSxcbiAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICAgICAgICBIOiBudWxsLFxuICAgICAgICBBOiBudWxsLFxuICAgICAgICBUOiBudWxsLFxuICAgICAgICBTOiBudWxsLFxuICAgICAgICBhY3RRdWV1ZTogbnVsbCxcbiAgICAgICAgaXNCYXRjaGluZ0xlZ2FjeTogITEsXG4gICAgICAgIGRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlOiAhMSxcbiAgICAgICAgZGlkVXNlUHJvbWlzZTogITEsXG4gICAgICAgIHRocm93bkVycm9yczogW10sXG4gICAgICAgIGdldEN1cnJlbnRTdGFjazogbnVsbFxuICAgICAgfSxcbiAgICAgIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgIFJFQUNUX0NMSUVOVF9SRUZFUkVOQ0UkMSA9IFN5bWJvbC5mb3IoXCJyZWFjdC5jbGllbnQucmVmZXJlbmNlXCIpLFxuICAgICAgZGlzYWJsZWREZXB0aCA9IDAsXG4gICAgICBwcmV2TG9nLFxuICAgICAgcHJldkluZm8sXG4gICAgICBwcmV2V2FybixcbiAgICAgIHByZXZFcnJvcixcbiAgICAgIHByZXZHcm91cCxcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCxcbiAgICAgIHByZXZHcm91cEVuZDtcbiAgICBkaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSAhMDtcbiAgICB2YXIgcHJlZml4LFxuICAgICAgc3VmZml4LFxuICAgICAgcmVlbnRyeSA9ICExO1xuICAgIHZhciBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IChcbiAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIFdlYWtNYXAgPyBXZWFrTWFwIDogTWFwXG4gICAgKSgpO1xuICAgIHZhciBSRUFDVF9DTElFTlRfUkVGRVJFTkNFID0gU3ltYm9sLmZvcihcInJlYWN0LmNsaWVudC5yZWZlcmVuY2VcIiksXG4gICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bixcbiAgICAgIGRpZFdhcm5BYm91dE9sZEpTWFJ1bnRpbWU7XG4gICAgdmFyIGRpZFdhcm5BYm91dEVsZW1lbnRSZWYgPSB7fTtcbiAgICB2YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge30sXG4gICAgICBkaWRXYXJuQWJvdXRNYXBzID0gITEsXG4gICAgICB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2csXG4gICAgICByZXBvcnRHbG9iYWxFcnJvciA9XG4gICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHJlcG9ydEVycm9yXG4gICAgICAgICAgPyByZXBvcnRFcnJvclxuICAgICAgICAgIDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2Ygd2luZG93ICYmXG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2Ygd2luZG93LkVycm9yRXZlbnRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IHdpbmRvdy5FcnJvckV2ZW50KFwiZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgYnViYmxlczogITAsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvciAmJlxuICAgICAgICAgICAgICAgICAgICBudWxsICE9PSBlcnJvciAmJlxuICAgICAgICAgICAgICAgICAgICBcInN0cmluZ1wiID09PSB0eXBlb2YgZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgID8gU3RyaW5nKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgOiBTdHJpbmcoZXJyb3IpLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCkpIHJldHVybjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgcHJvY2VzcyAmJlxuICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHByb2Nlc3MuZW1pdFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVtaXQoXCJ1bmNhdWdodEV4Y2VwdGlvblwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gITEsXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBudWxsLFxuICAgICAgYWN0U2NvcGVEZXB0aCA9IDAsXG4gICAgICBkaWRXYXJuTm9Bd2FpdEFjdCA9ICExLFxuICAgICAgaXNGbHVzaGluZyA9ICExLFxuICAgICAgcXVldWVTZXZlcmFsTWljcm90YXNrcyA9XG4gICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHF1ZXVlTWljcm90YXNrXG4gICAgICAgICAgPyBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxdWV1ZU1pY3JvdGFzayhjYWxsYmFjayk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDogZW5xdWV1ZVRhc2s7XG4gICAgZXhwb3J0cy5DaGlsZHJlbiA9IHtcbiAgICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiAoY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICAgICAgICBtYXBDaGlsZHJlbihcbiAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9yRWFjaENvbnRleHRcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBjb3VudDogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBuKys7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbjtcbiAgICAgIH0sXG4gICAgICB0b0FycmF5OiBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgfSkgfHwgW11cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBvbmx5OiBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgfVxuICAgIH07XG4gICAgZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG4gICAgZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG4gICAgZXhwb3J0cy5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG4gICAgZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbiAgICBleHBvcnRzLlN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuICAgIGV4cG9ydHMuU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuICAgIGV4cG9ydHMuX19DTElFTlRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfV0FSTl9VU0VSU19USEVZX0NBTk5PVF9VUEdSQURFID1cbiAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuICAgIGV4cG9ydHMuYWN0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgcHJldkFjdFF1ZXVlID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuYWN0UXVldWUsXG4gICAgICAgIHByZXZBY3RTY29wZURlcHRoID0gYWN0U2NvcGVEZXB0aDtcbiAgICAgIGFjdFNjb3BlRGVwdGgrKztcbiAgICAgIHZhciBxdWV1ZSA9IChSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9XG4gICAgICAgICAgbnVsbCAhPT0gcHJldkFjdFF1ZXVlID8gcHJldkFjdFF1ZXVlIDogW10pLFxuICAgICAgICBkaWRBd2FpdEFjdENhbGwgPSAhMTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjaygpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgfVxuICAgICAgaWYgKDAgPCBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoKVxuICAgICAgICB0aHJvdyAoXG4gICAgICAgICAgKHBvcEFjdFNjb3BlKHByZXZBY3RRdWV1ZSwgcHJldkFjdFNjb3BlRGVwdGgpLFxuICAgICAgICAgIChjYWxsYmFjayA9IGFnZ3JlZ2F0ZUVycm9ycyhSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMpKSxcbiAgICAgICAgICAoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCA9IDApLFxuICAgICAgICAgIGNhbGxiYWNrKVxuICAgICAgICApO1xuICAgICAgaWYgKFxuICAgICAgICBudWxsICE9PSByZXN1bHQgJiZcbiAgICAgICAgXCJvYmplY3RcIiA9PT0gdHlwZW9mIHJlc3VsdCAmJlxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiByZXN1bHQudGhlblxuICAgICAgKSB7XG4gICAgICAgIHZhciB0aGVuYWJsZSA9IHJlc3VsdDtcbiAgICAgICAgcXVldWVTZXZlcmFsTWljcm90YXNrcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGlkQXdhaXRBY3RDYWxsIHx8XG4gICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCB8fFxuICAgICAgICAgICAgKChkaWRXYXJuTm9Bd2FpdEFjdCA9ICEwKSxcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiWW91IGNhbGxlZCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aXRob3V0IGF3YWl0LiBUaGlzIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCB0ZXN0aW5nIGJlaGF2aW91ciwgaW50ZXJsZWF2aW5nIG11bHRpcGxlIGFjdCBjYWxscyBhbmQgbWl4aW5nIHRoZWlyIHNjb3Blcy4gWW91IHNob3VsZCAtIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pO1wiXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgZGlkQXdhaXRBY3RDYWxsID0gITA7XG4gICAgICAgICAgICB0aGVuYWJsZS50aGVuKFxuICAgICAgICAgICAgICBmdW5jdGlvbiAocmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcHJldkFjdFNjb3BlRGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpLFxuICAgICAgICAgICAgICAgICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IkMikge1xuICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMucHVzaChlcnJvciQyKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICgwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3Rocm93bkVycm9yID0gYWdncmVnYXRlRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9yc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBSZWFjdFNoYXJlZEludGVybmFscy50aHJvd25FcnJvcnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KF90aHJvd25FcnJvcik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgICAgICAwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyAoKGVycm9yID0gYWdncmVnYXRlRXJyb3JzKFxuICAgICAgICAgICAgICAgICAgICAgIFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9yc1xuICAgICAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKSlcbiAgICAgICAgICAgICAgICAgIDogcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIgcmV0dXJuVmFsdWUkanNjb21wJDAgPSByZXN1bHQ7XG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0UXVldWUsIHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgIDAgPT09IHByZXZBY3RTY29wZURlcHRoICYmXG4gICAgICAgIChmbHVzaEFjdFF1ZXVlKHF1ZXVlKSxcbiAgICAgICAgMCAhPT0gcXVldWUubGVuZ3RoICYmXG4gICAgICAgICAgcXVldWVTZXZlcmFsTWljcm90YXNrcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaWRBd2FpdEFjdENhbGwgfHxcbiAgICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgfHxcbiAgICAgICAgICAgICAgKChkaWRXYXJuTm9Bd2FpdEFjdCA9ICEwKSxcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICBcIkEgY29tcG9uZW50IHN1c3BlbmRlZCBpbnNpZGUgYW4gYGFjdGAgc2NvcGUsIGJ1dCB0aGUgYGFjdGAgY2FsbCB3YXMgbm90IGF3YWl0ZWQuIFdoZW4gdGVzdGluZyBSZWFjdCBjb21wb25lbnRzIHRoYXQgZGVwZW5kIG9uIGFzeW5jaHJvbm91cyBkYXRhLCB5b3UgbXVzdCBhd2FpdCB0aGUgcmVzdWx0OlxcblxcbmF3YWl0IGFjdCgoKSA9PiAuLi4pXCJcbiAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfSksXG4gICAgICAgIChSZWFjdFNoYXJlZEludGVybmFscy5hY3RRdWV1ZSA9IG51bGwpKTtcbiAgICAgIGlmICgwIDwgUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzLmxlbmd0aClcbiAgICAgICAgdGhyb3cgKFxuICAgICAgICAgICgoY2FsbGJhY2sgPSBhZ2dyZWdhdGVFcnJvcnMoUmVhY3RTaGFyZWRJbnRlcm5hbHMudGhyb3duRXJyb3JzKSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLnRocm93bkVycm9ycy5sZW5ndGggPSAwKSxcbiAgICAgICAgICBjYWxsYmFjaylcbiAgICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBkaWRBd2FpdEFjdENhbGwgPSAhMDtcbiAgICAgICAgICAwID09PSBwcmV2QWN0U2NvcGVEZXB0aFxuICAgICAgICAgICAgPyAoKFJlYWN0U2hhcmVkSW50ZXJuYWxzLmFjdFF1ZXVlID0gcXVldWUpLFxuICAgICAgICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsoXG4gICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSRqc2NvbXAkMCxcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIDogcmVzb2x2ZShyZXR1cm5WYWx1ZSRqc2NvbXAkMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleHBvcnRzLmNhY2hlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBleHBvcnRzLmNsb25lRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gICAgICBpZiAobnVsbCA9PT0gZWxlbWVudCB8fCB2b2lkIDAgPT09IGVsZW1lbnQpXG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIFwiVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArXG4gICAgICAgICAgICBlbGVtZW50ICtcbiAgICAgICAgICAgIFwiLlwiXG4gICAgICAgICk7XG4gICAgICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpLFxuICAgICAgICBrZXkgPSBlbGVtZW50LmtleSxcbiAgICAgICAgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIGlmIChudWxsICE9IGNvbmZpZykge1xuICAgICAgICB2YXIgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0O1xuICAgICAgICBhOiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIFwicmVmXCIpICYmXG4gICAgICAgICAgICAoSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICBcInJlZlwiXG4gICAgICAgICAgICApLmdldCkgJiZcbiAgICAgICAgICAgIEpTQ29tcGlsZXJfaW5saW5lX3Jlc3VsdC5pc1JlYWN0V2FybmluZ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gITE7XG4gICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQgPSB2b2lkIDAgIT09IGNvbmZpZy5yZWY7XG4gICAgICAgIH1cbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ICYmIChvd25lciA9IGdldE93bmVyKCkpO1xuICAgICAgICBoYXNWYWxpZEtleShjb25maWcpICYmXG4gICAgICAgICAgKGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSksIChrZXkgPSBcIlwiICsgY29uZmlnLmtleSkpO1xuICAgICAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZylcbiAgICAgICAgICAhaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSB8fFxuICAgICAgICAgICAgXCJrZXlcIiA9PT0gcHJvcE5hbWUgfHxcbiAgICAgICAgICAgIFwiX19zZWxmXCIgPT09IHByb3BOYW1lIHx8XG4gICAgICAgICAgICBcIl9fc291cmNlXCIgPT09IHByb3BOYW1lIHx8XG4gICAgICAgICAgICAoXCJyZWZcIiA9PT0gcHJvcE5hbWUgJiYgdm9pZCAwID09PSBjb25maWcucmVmKSB8fFxuICAgICAgICAgICAgKHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV0pO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BOYW1lID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgICBpZiAoMSA9PT0gcHJvcE5hbWUpIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICBlbHNlIGlmICgxIDwgcHJvcE5hbWUpIHtcbiAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0ID0gQXJyYXkocHJvcE5hbWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BOYW1lOyBpKyspXG4gICAgICAgICAgSlNDb21waWxlcl9pbmxpbmVfcmVzdWx0W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBKU0NvbXBpbGVyX2lubGluZV9yZXN1bHQ7XG4gICAgICB9XG4gICAgICBwcm9wcyA9IFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgdm9pZCAwLCB2b2lkIDAsIG93bmVyLCBwcm9wcyk7XG4gICAgICBmb3IgKGtleSA9IDI7IGtleSA8IGFyZ3VtZW50cy5sZW5ndGg7IGtleSsrKVxuICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNba2V5XSwgcHJvcHMudHlwZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbiAgICBleHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBmdW5jdGlvbiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgX3RocmVhZENvdW50OiAwLFxuICAgICAgICBQcm92aWRlcjogbnVsbCxcbiAgICAgICAgQ29uc3VtZXI6IG51bGxcbiAgICAgIH07XG4gICAgICBkZWZhdWx0VmFsdWUuUHJvdmlkZXIgPSBkZWZhdWx0VmFsdWU7XG4gICAgICBkZWZhdWx0VmFsdWUuQ29uc3VtZXIgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05TVU1FUl9UWVBFLFxuICAgICAgICBfY29udGV4dDogZGVmYXVsdFZhbHVlXG4gICAgICB9O1xuICAgICAgZGVmYXVsdFZhbHVlLl9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgICAgZGVmYXVsdFZhbHVlLl9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfTtcbiAgICBleHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSlcbiAgICAgICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBpID0gXCJcIjtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZvaWQgMCA9PT0gdHlwZSB8fFxuICAgICAgICAgIChcIm9iamVjdFwiID09PSB0eXBlb2YgdHlwZSAmJlxuICAgICAgICAgICAgbnVsbCAhPT0gdHlwZSAmJlxuICAgICAgICAgICAgMCA9PT0gT2JqZWN0LmtleXModHlwZSkubGVuZ3RoKVxuICAgICAgICApXG4gICAgICAgICAgaSArPVxuICAgICAgICAgICAgXCIgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgICBpZiAobnVsbCA9PT0gdHlwZSkgdmFyIHR5cGVTdHJpbmcgPSBcIm51bGxcIjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGlzQXJyYXlJbXBsKHR5cGUpXG4gICAgICAgICAgICA/ICh0eXBlU3RyaW5nID0gXCJhcnJheVwiKVxuICAgICAgICAgICAgOiB2b2lkIDAgIT09IHR5cGUgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFXG4gICAgICAgICAgICAgID8gKCh0eXBlU3RyaW5nID1cbiAgICAgICAgICAgICAgICAgIFwiPFwiICtcbiAgICAgICAgICAgICAgICAgIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCBcIlVua25vd25cIikgK1xuICAgICAgICAgICAgICAgICAgXCIgLz5cIiksXG4gICAgICAgICAgICAgICAgKGkgPVxuICAgICAgICAgICAgICAgICAgXCIgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD9cIikpXG4gICAgICAgICAgICAgIDogKHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgXCJSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciBidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlIGNvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzXCIsXG4gICAgICAgICAgdHlwZVN0cmluZyxcbiAgICAgICAgICBpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcE5hbWU7XG4gICAgICBpID0ge307XG4gICAgICB0eXBlU3RyaW5nID0gbnVsbDtcbiAgICAgIGlmIChudWxsICE9IGNvbmZpZylcbiAgICAgICAgZm9yIChwcm9wTmFtZSBpbiAoZGlkV2FybkFib3V0T2xkSlNYUnVudGltZSB8fFxuICAgICAgICAgICEoXCJfX3NlbGZcIiBpbiBjb25maWcpIHx8XG4gICAgICAgICAgXCJrZXlcIiBpbiBjb25maWcgfHxcbiAgICAgICAgICAoKGRpZFdhcm5BYm91dE9sZEpTWFJ1bnRpbWUgPSAhMCksXG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgXCJZb3VyIGFwcCAob3Igb25lIG9mIGl0cyBkZXBlbmRlbmNpZXMpIGlzIHVzaW5nIGFuIG91dGRhdGVkIEpTWCB0cmFuc2Zvcm0uIFVwZGF0ZSB0byB0aGUgbW9kZXJuIEpTWCB0cmFuc2Zvcm0gZm9yIGZhc3RlciBwZXJmb3JtYW5jZTogaHR0cHM6Ly9yZWFjdC5kZXYvbGluay9uZXctanN4LXRyYW5zZm9ybVwiXG4gICAgICAgICAgKSksXG4gICAgICAgIGhhc1ZhbGlkS2V5KGNvbmZpZykgJiZcbiAgICAgICAgICAoY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KSwgKHR5cGVTdHJpbmcgPSBcIlwiICsgY29uZmlnLmtleSkpLFxuICAgICAgICBjb25maWcpKVxuICAgICAgICAgIGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiZcbiAgICAgICAgICAgIFwia2V5XCIgIT09IHByb3BOYW1lICYmXG4gICAgICAgICAgICBcIl9fc2VsZlwiICE9PSBwcm9wTmFtZSAmJlxuICAgICAgICAgICAgXCJfX3NvdXJjZVwiICE9PSBwcm9wTmFtZSAmJlxuICAgICAgICAgICAgKGlbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXSk7XG4gICAgICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgICAgIGlmICgxID09PSBjaGlsZHJlbkxlbmd0aCkgaS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgZWxzZSBpZiAoMSA8IGNoaWxkcmVuTGVuZ3RoKSB7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCksIF9pID0gMDtcbiAgICAgICAgICBfaSA8IGNoaWxkcmVuTGVuZ3RoO1xuICAgICAgICAgIF9pKytcbiAgICAgICAgKVxuICAgICAgICAgIGNoaWxkQXJyYXlbX2ldID0gYXJndW1lbnRzW19pICsgMl07XG4gICAgICAgIE9iamVjdC5mcmVlemUgJiYgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgICAgaS5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcylcbiAgICAgICAgZm9yIChwcm9wTmFtZSBpbiAoKGNoaWxkcmVuTGVuZ3RoID0gdHlwZS5kZWZhdWx0UHJvcHMpLCBjaGlsZHJlbkxlbmd0aCkpXG4gICAgICAgICAgdm9pZCAwID09PSBpW3Byb3BOYW1lXSAmJiAoaVtwcm9wTmFtZV0gPSBjaGlsZHJlbkxlbmd0aFtwcm9wTmFtZV0pO1xuICAgICAgdHlwZVN0cmluZyAmJlxuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihcbiAgICAgICAgICBpLFxuICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIHR5cGVcbiAgICAgICAgICAgID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgXCJVbmtub3duXCJcbiAgICAgICAgICAgIDogdHlwZVxuICAgICAgICApO1xuICAgICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCB0eXBlU3RyaW5nLCB2b2lkIDAsIHZvaWQgMCwgZ2V0T3duZXIoKSwgaSk7XG4gICAgfTtcbiAgICBleHBvcnRzLmNyZWF0ZVJlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZWZPYmplY3QgPSB7IGN1cnJlbnQ6IG51bGwgfTtcbiAgICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gICAgICByZXR1cm4gcmVmT2JqZWN0O1xuICAgIH07XG4gICAgZXhwb3J0cy5mb3J3YXJkUmVmID0gZnVuY3Rpb24gKHJlbmRlcikge1xuICAgICAgbnVsbCAhPSByZW5kZXIgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEVcbiAgICAgICAgPyBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCJmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCBjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgbWVtbyhmb3J3YXJkUmVmKC4uLikpLlwiXG4gICAgICAgICAgKVxuICAgICAgICA6IFwiZnVuY3Rpb25cIiAhPT0gdHlwZW9mIHJlbmRlclxuICAgICAgICAgID8gY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuXCIsXG4gICAgICAgICAgICAgIG51bGwgPT09IHJlbmRlciA/IFwibnVsbFwiIDogdHlwZW9mIHJlbmRlclxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogMCAhPT0gcmVuZGVyLmxlbmd0aCAmJlxuICAgICAgICAgICAgMiAhPT0gcmVuZGVyLmxlbmd0aCAmJlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgXCJmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzXCIsXG4gICAgICAgICAgICAgIDEgPT09IHJlbmRlci5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IFwiRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyP1wiXG4gICAgICAgICAgICAgICAgOiBcIkFueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC5cIlxuICAgICAgICAgICAgKTtcbiAgICAgIG51bGwgIT0gcmVuZGVyICYmXG4gICAgICAgIG51bGwgIT0gcmVuZGVyLmRlZmF1bHRQcm9wcyAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IGRlZmF1bHRQcm9wcy4gRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD9cIlxuICAgICAgICApO1xuICAgICAgdmFyIGVsZW1lbnRUeXBlID0geyAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSwgcmVuZGVyOiByZW5kZXIgfSxcbiAgICAgICAgb3duTmFtZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgXCJkaXNwbGF5TmFtZVwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIG93bk5hbWUgPSBuYW1lO1xuICAgICAgICAgIHJlbmRlci5uYW1lIHx8XG4gICAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgfHxcbiAgICAgICAgICAgIChPYmplY3QuZGVmaW5lUHJvcGVydHkocmVuZGVyLCBcIm5hbWVcIiwgeyB2YWx1ZTogbmFtZSB9KSxcbiAgICAgICAgICAgIChyZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGVsZW1lbnRUeXBlO1xuICAgIH07XG4gICAgZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuICAgIGV4cG9ydHMubGF6eSA9IGZ1bmN0aW9uIChjdG9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgICAgICBfcGF5bG9hZDogeyBfc3RhdHVzOiAtMSwgX3Jlc3VsdDogY3RvciB9LFxuICAgICAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gICAgICB9O1xuICAgIH07XG4gICAgZXhwb3J0cy5tZW1vID0gZnVuY3Rpb24gKHR5cGUsIGNvbXBhcmUpIHtcbiAgICAgIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB8fFxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwibWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgcmVjZWl2ZWQ6ICVzXCIsXG4gICAgICAgICAgbnVsbCA9PT0gdHlwZSA/IFwibnVsbFwiIDogdHlwZW9mIHR5cGVcbiAgICAgICAgKTtcbiAgICAgIGNvbXBhcmUgPSB7XG4gICAgICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGNvbXBhcmU6IHZvaWQgMCA9PT0gY29tcGFyZSA/IG51bGwgOiBjb21wYXJlXG4gICAgICB9O1xuICAgICAgdmFyIG93bk5hbWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29tcGFyZSwgXCJkaXNwbGF5TmFtZVwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6ICExLFxuICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIG93bk5hbWUgPSBuYW1lO1xuICAgICAgICAgIHR5cGUubmFtZSB8fFxuICAgICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSB8fFxuICAgICAgICAgICAgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLCBcIm5hbWVcIiwgeyB2YWx1ZTogbmFtZSB9KSxcbiAgICAgICAgICAgICh0eXBlLmRpc3BsYXlOYW1lID0gbmFtZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb21wYXJlO1xuICAgIH07XG4gICAgZXhwb3J0cy5zdGFydFRyYW5zaXRpb24gPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgIHZhciBwcmV2VHJhbnNpdGlvbiA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlQsXG4gICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uID0ge307XG4gICAgICBSZWFjdFNoYXJlZEludGVybmFscy5UID0gY3VycmVudFRyYW5zaXRpb247XG4gICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycyA9IG5ldyBTZXQoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHNjb3BlKCksXG4gICAgICAgICAgb25TdGFydFRyYW5zaXRpb25GaW5pc2ggPSBSZWFjdFNoYXJlZEludGVybmFscy5TO1xuICAgICAgICBudWxsICE9PSBvblN0YXJ0VHJhbnNpdGlvbkZpbmlzaCAmJlxuICAgICAgICAgIG9uU3RhcnRUcmFuc2l0aW9uRmluaXNoKGN1cnJlbnRUcmFuc2l0aW9uLCByZXR1cm5WYWx1ZSk7XG4gICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiByZXR1cm5WYWx1ZSAmJlxuICAgICAgICAgIG51bGwgIT09IHJldHVyblZhbHVlICYmXG4gICAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlb2YgcmV0dXJuVmFsdWUudGhlbiAmJlxuICAgICAgICAgIHJldHVyblZhbHVlLnRoZW4obm9vcCwgcmVwb3J0R2xvYmFsRXJyb3IpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVwb3J0R2xvYmFsRXJyb3IoZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgbnVsbCA9PT0gcHJldlRyYW5zaXRpb24gJiZcbiAgICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycyAmJlxuICAgICAgICAgICgoc2NvcGUgPSBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5zaXplKSxcbiAgICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5jbGVhcigpLFxuICAgICAgICAgIDEwIDwgc2NvcGUgJiZcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJEZXRlY3RlZCBhIGxhcmdlIG51bWJlciBvZiB1cGRhdGVzIGluc2lkZSBzdGFydFRyYW5zaXRpb24uIElmIHRoaXMgaXMgZHVlIHRvIGEgc3Vic2NyaXB0aW9uIHBsZWFzZSByZS13cml0ZSBpdCB0byB1c2UgUmVhY3QgcHJvdmlkZWQgaG9va3MuIE90aGVyd2lzZSBjb25jdXJyZW50IG1vZGUgZ3VhcmFudGVlcyBhcmUgb2ZmIHRoZSB0YWJsZS5cIlxuICAgICAgICAgICAgKSksXG4gICAgICAgICAgKFJlYWN0U2hhcmVkSW50ZXJuYWxzLlQgPSBwcmV2VHJhbnNpdGlvbik7XG4gICAgICB9XG4gICAgfTtcbiAgICBleHBvcnRzLnVuc3RhYmxlX3VzZUNhY2hlUmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUNhY2hlUmVmcmVzaCgpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2UgPSBmdW5jdGlvbiAodXNhYmxlKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2UodXNhYmxlKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlQWN0aW9uU3RhdGUgPSBmdW5jdGlvbiAoYWN0aW9uLCBpbml0aWFsU3RhdGUsIHBlcm1hbGluaykge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlQWN0aW9uU3RhdGUoXG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBwZXJtYWxpbmtcbiAgICAgICk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUNhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZXBzKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUNvbnRleHQgPSBmdW5jdGlvbiAoQ29udGV4dCkge1xuICAgICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgICAgQ29udGV4dC4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OU1VNRVJfVFlQRSAmJlxuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIFwiQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgY2F1c2UgYnVncy4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkP1wiXG4gICAgICAgICk7XG4gICAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VEZWZlcnJlZFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBpbml0aWFsVmFsdWUpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZURlZmVycmVkVmFsdWUodmFsdWUsIGluaXRpYWxWYWx1ZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUVmZmVjdCA9IGZ1bmN0aW9uIChjcmVhdGUsIGRlcHMpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUlkKCk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSBmdW5jdGlvbiAocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3QgPSBmdW5jdGlvbiAoY3JlYXRlLCBkZXBzKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKTtcbiAgICB9O1xuICAgIGV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gZnVuY3Rpb24gKGNyZWF0ZSwgZGVwcykge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZU1lbW8gPSBmdW5jdGlvbiAoY3JlYXRlLCBkZXBzKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZURpc3BhdGNoZXIoKS51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZU9wdGltaXN0aWMgPSBmdW5jdGlvbiAocGFzc3Rocm91Z2gsIHJlZHVjZXIpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZU9wdGltaXN0aWMocGFzc3Rocm91Z2gsIHJlZHVjZXIpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VSZWR1Y2VyID0gZnVuY3Rpb24gKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVJlZiA9IGZ1bmN0aW9uIChpbml0aWFsVmFsdWUpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZVJlZihpbml0aWFsVmFsdWUpO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VTdGF0ZSA9IGZ1bmN0aW9uIChpbml0aWFsU3RhdGUpIHtcbiAgICAgIHJldHVybiByZXNvbHZlRGlzcGF0Y2hlcigpLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gICAgfTtcbiAgICBleHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlID0gZnVuY3Rpb24gKFxuICAgICAgc3Vic2NyaWJlLFxuICAgICAgZ2V0U25hcHNob3QsXG4gICAgICBnZXRTZXJ2ZXJTbmFwc2hvdFxuICAgICkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlU3luY0V4dGVybmFsU3RvcmUoXG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgZ2V0U25hcHNob3QsXG4gICAgICAgIGdldFNlcnZlclNuYXBzaG90XG4gICAgICApO1xuICAgIH07XG4gICAgZXhwb3J0cy51c2VUcmFuc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmVEaXNwYXRjaGVyKCkudXNlVHJhbnNpdGlvbigpO1xuICAgIH07XG4gICAgZXhwb3J0cy52ZXJzaW9uID0gXCIxOS4wLjBcIjtcbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICYmXG4gICAgICBcImZ1bmN0aW9uXCIgPT09XG4gICAgICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgJiZcbiAgICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChFcnJvcigpKTtcbiAgfSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUG9zdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Qb3N0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVudl9WYXJpYWJsZXMgPSB2b2lkIDA7XG52YXIgRW52X1ZhcmlhYmxlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbnZfVmFyaWFibGVzKCkge1xuICAgIH1cbiAgICBFbnZfVmFyaWFibGVzLkFwaV9VcmwgPSBcImh0dHBzOi8vcGVyc29uYWxibG9nLWFwaS5nbGl0Y2gubWUvXCI7XG4gICAgRW52X1ZhcmlhYmxlcy5HZXRfUG9zdHMgPSBcImdldFBvc3RzXCI7XG4gICAgcmV0dXJuIEVudl9WYXJpYWJsZXM7XG59KCkpO1xuZXhwb3J0cy5FbnZfVmFyaWFibGVzID0gRW52X1ZhcmlhYmxlcztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICAgIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQmFja2VuZENvbm5lY3RvciA9IHZvaWQgMDtcbnZhciBFbnZfVmFyaWFibGVzXzEgPSByZXF1aXJlKFwiLi4vRW52X1ZhcmlhYmxlc1wiKTtcbnZhciBQb3N0c18xID0gcmVxdWlyZShcIi4uL21vZGVscy9Qb3N0c1wiKTtcbnZhciBCYWNrZW5kQ29ubmVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJhY2tlbmRDb25uZWN0b3IoKSB7XG4gICAgfVxuICAgIEJhY2tlbmRDb25uZWN0b3IucHJvdG90eXBlLmdldFBvc3RzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgbmV3ZXJGaXJzdCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBqc29uLCBQb3N0cztcbiAgICAgICAgICAgIGlmIChzdGFydCA9PT0gdm9pZCAwKSB7IHN0YXJ0ID0gMDsgfVxuICAgICAgICAgICAgaWYgKGVuZCA9PT0gdm9pZCAwKSB7IGVuZCA9IDQ7IH1cbiAgICAgICAgICAgIGlmIChuZXdlckZpcnN0ID09PSB2b2lkIDApIHsgbmV3ZXJGaXJzdCA9IHRydWU7IH1cbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2goRW52X1ZhcmlhYmxlc18xLkVudl9WYXJpYWJsZXMuQXBpX1VybCArIEVudl9WYXJpYWJsZXNfMS5FbnZfVmFyaWFibGVzLkdldF9Qb3N0cywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3ZXJGaXJzdDogbmV3ZXJGaXJzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlc3BvbnNlLmpzb24oKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0cyA9IGpzb24ubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUG9zdHNfMS5Qb3N0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm90b1NyYzogcC5mb3RvU3JjIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXBjaW9uOiAoX2EgPSBwLmRlc2NyaXBjaW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXR1bG86IChfYiA9IHAudGl0dWxvKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWNoYTogKF9jID0gcC5mZWNoYSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dG9Cb3RvbjogKF9kID0gcC50ZXh0b0JvdG9uKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBcIkV4cGFuZGlyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbmlkbzogcC5jb250ZW5pZG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFBvc3RzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQmFja2VuZENvbm5lY3Rvcjtcbn0oKSk7XG5leHBvcnRzLkJhY2tlbmRDb25uZWN0b3IgPSBCYWNrZW5kQ29ubmVjdG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5CaWdQb3N0ID0gdm9pZCAwO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEJpZ1Bvc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJpZ1Bvc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmlnUG9zdChwcm9wcykge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmZWNoYTogKF9hID0gcHJvcHMuZmVjaGEpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwiMTIvMDEvMTk5N1wiLFxuICAgICAgICAgICAgdGl0dWxvOiAoX2IgPSBwcm9wcy50aXR1bG8pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiVGl0dWxvXCIsXG4gICAgICAgICAgICBkZXNjcmlwY2lvbjogKF9jID0gcHJvcHMuZGVzY3JpcGNpb24pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFwiRGVzY3JpcGNpb25cIixcbiAgICAgICAgICAgIHRleHRvQm90b246IChfZCA9IHByb3BzLnRleHRvQm90b24pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IFwiRXhwYW5kaXJcIixcbiAgICAgICAgICAgIGZvdG9TcmM6IHByb3BzLmZvdG9TcmMgfHwgbnVsbCxcbiAgICAgICAgICAgIGNvbnRlbmlkbzogKF9lID0gcHJvcHMuY29udGVuaWRvKSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiBcIkNvbnRlbmlkb1wiXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQmlnUG9zdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIsIHsgY2xhc3NOYW1lOiBcInBvc3QgZmVhdHVyZWRcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCB7IGNsYXNzTmFtZTogXCJtYWpvclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiZGF0ZVwiIH0sIHRoaXMuc3RhdGUuZmVjaGEpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCB0aGlzLnN0YXRlLnRpdHVsbykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIHRoaXMuc3RhdGUuZGVzY3JpcGNpb24pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImltYWdlIG1haW5cIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHRoaXMuc3RhdGUuZm90b1NyYywgYWx0OiBcIlwiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3NOYW1lOiBcInBvc3QtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb250ZW5pZG8sXG4gICAgICAgICAgICAgICAgXCJhc2Rhc2Rhc2RcIikpKTtcbiAgICB9O1xuICAgIHJldHVybiBCaWdQb3N0O1xufShSZWFjdC5Db21wb25lbnQpKTtcbmV4cG9ydHMuQmlnUG9zdCA9IEJpZ1Bvc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1pbmlQb3N0ID0gdm9pZCAwO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xucmVxdWlyZShcIi4vUG9zdC5jc3NcIik7XG52YXIgTWluaVBvc3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1pbmlQb3N0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1pbmlQb3N0KHByb3BzKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5EaXZSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgX3RoaXMuQnV0dG9uUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIF90aGlzLk9wZW5Qb3N0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVuIHBvc3RcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgSW5zaWRlRm9ybWF0OiBcInNlbGVjdGVkLXBvc3QtaW5uZXJcIiwgdGV4dG9Cb3RvbjogXCJDZXJyYXJcIiB9KTtcbiAgICAgICAgICAgICAgICAoX2EgPSBfdGhpcy5CdXR0b25SZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfdGhpcy5PcGVuUG9zdCk7XG4gICAgICAgICAgICAgICAgKF9iID0gX3RoaXMuQnV0dG9uUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3RoaXMuQ2xvc2VQb3N0KTtcbiAgICAgICAgICAgIH0sIDM4MCk7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IE91dHNpZGVGb3JtYXQ6IFwic2VsZWN0ZWQtcG9zdC1vdXRlclwiIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIHZhciByZWN0ID0gKF9hID0gX3RoaXMuRGl2UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYSBsYSBwb3NpY2nDs24gZGVzZWFkYSB5IGFqdXN0YSBlbCBkZXNwbGF6YW1pZW50b1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRZID0gc2Nyb2xsVG9wICsgcmVjdC50b3AgKyA0MDtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldFksXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuQ2xvc2VQb3N0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2UgcG9zdFwiKTtcbiAgICAgICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7IEluc2lkZUZvcm1hdCA6IFwidW5zZWxlY3RlZC1wb3N0LWlubmVyXCIgLCB0ZXh0b0JvdG9uOiBcIkV4cGFuZGlyXCJ9KVx0XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IEluc2lkZUZvcm1hdDogXCJ1bnNlbGVjdGVkLXBvc3QtaW5uZXJcIiwgdGV4dG9Cb3RvbjogXCJFeHBhbmRpclwiIH0pO1xuICAgICAgICAgICAgKF9hID0gX3RoaXMuQnV0dG9uUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3RoaXMuQ2xvc2VQb3N0KTtcbiAgICAgICAgICAgIChfYiA9IF90aGlzLkJ1dHRvblJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF90aGlzLk9wZW5Qb3N0KTtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgT3V0c2lkZUZvcm1hdDogXCJ1bnNlbGVjdGVkLXBvc3Qtb3V0ZXJcIiB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IChfYSA9IF90aGlzLkRpdlJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIC8vIENhbGN1bGEgbGEgcG9zaWNpw7NuIGRlc2VhZGEgeSBhanVzdGEgZWwgZGVzcGxhemFtaWVudG9cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0WSA9IHNjcm9sbFRvcCArIHJlY3QudG9wO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0WSxcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmZWNoYTogKF9hID0gcHJvcHMuZmVjaGEpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwiMTIvMDEvMTk5N1wiLFxuICAgICAgICAgICAgdGl0dWxvOiAoX2IgPSBwcm9wcy50aXR1bG8pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiVGl0dWxvXCIsXG4gICAgICAgICAgICBkZXNjcmlwY2lvbjogKF9jID0gcHJvcHMuZGVzY3JpcGNpb24pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFwiRGVzY3JpcGNpb25cIixcbiAgICAgICAgICAgIHRleHRvQm90b246IChfZCA9IHByb3BzLnRleHRvQm90b24pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IFwiRXhwYW5kaXJcIixcbiAgICAgICAgICAgIGZvdG9TcmM6IHByb3BzLmZvdG9TcmMgfHwgbnVsbCxcbiAgICAgICAgICAgIGNvbnRlbmlkbzogKF9lID0gcHJvcHMuY29udGVuaWRvKSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiBcIkNvbnRlbmlkb1wiLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWluaVBvc3QucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuQnV0dG9uUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5PcGVuUG9zdCk7XG4gICAgfTtcbiAgICAvL29uQ2xpY2s9e3RoaXMuT3BlblBvc3R9XG4gICAgTWluaVBvc3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiLCB7IGNsYXNzTmFtZTogdGhpcy5zdGF0ZS5PdXRzaWRlRm9ybWF0IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiB0aGlzLkRpdlJlZiwgY2xhc3NOYW1lOiB0aGlzLnN0YXRlLkluc2lkZUZvcm1hdCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiZGF0ZVwiIH0sIHRoaXMuc3RhdGUuZmVjaGEpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6IFwidGl0dWxvLW1pbmlQb3N0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIHRoaXMuc3RhdGUudGl0dWxvKSksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IFwibWFyZ2luQm90dG9tXCI6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRlc2NyaXBjaW9uKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImltYWdlIGZpdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6IFwiaW1nLW1pbmlQb3N0XCIsIHNyYzogdGhpcy5zdGF0ZS5mb3RvU3JjLCBhbHQ6IFwiXCIgfSkpLFxuICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLnNlbGVjdGVkICYmXG4gICAgICAgICAgICAgICAgICAgIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogXCJkZXNjcmlwY2lvbi1taW5pUG9zdFwiIH0sIHRoaXMuc3RhdGUuZGVzY3JpcGNpb24pKSxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkICYmXG4gICAgICAgICAgICAgICAgICAgIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCB0aGlzLnN0YXRlLmNvbnRlbmlkbykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogXCJhY3Rpb25zIHNwZWNpYWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgcmVmOiB0aGlzLkJ1dHRvblJlZiwgY2xhc3NOYW1lOiBcImJ1dHRvblwiIH0sIHRoaXMuc3RhdGUudGV4dG9Cb3RvbikpKSkpKTtcbiAgICB9O1xuICAgIHJldHVybiBNaW5pUG9zdDtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5leHBvcnRzLk1pbmlQb3N0ID0gTWluaVBvc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3N0Q29udHJvbGxlciA9IHZvaWQgMDtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBCYWNrZW5kQ29ubmVjdG9yXzEgPSByZXF1aXJlKFwiLi4vYmFja2VuZC9CYWNrZW5kQ29ubmVjdG9yXCIpO1xudmFyIEJpZ1Bvc3RfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRlcy9Qb3N0cy9CaWdQb3N0XCIpO1xudmFyIE1pbmlQb3N0XzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50ZXMvUG9zdHMvTWluaVBvc3RcIik7XG52YXIgUG9zdENvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUG9zdENvbnRyb2xsZXIoYmFja2VuZCkge1xuICAgICAgICB0aGlzLktleVByZWZpeCA9IFwiUG9zdC1cIjtcbiAgICAgICAgdGhpcy5wb3N0Q291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuQmFja0VuZCA9IGJhY2tlbmQgIT09IG51bGwgJiYgYmFja2VuZCAhPT0gdm9pZCAwID8gYmFja2VuZCA6IG5ldyBCYWNrZW5kQ29ubmVjdG9yXzEuQmFja2VuZENvbm5lY3RvcigpO1xuICAgICAgICB0aGlzLlBvc3RzID0gW107XG4gICAgICAgIHRoaXMuTGFzdFJlcXVlc3RQb3N0cyA9IFtdO1xuICAgIH1cbiAgICBQb3N0Q29udHJvbGxlci5wcm90b3R5cGUuZ2V0UG9zdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uIChzdGFydCwgZW5kLCBuZXdlckZpcnN0KSB7XG4gICAgICAgICAgICBpZiAoc3RhcnQgPT09IHZvaWQgMCkgeyBzdGFydCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChlbmQgPT09IHZvaWQgMCkgeyBlbmQgPSA0OyB9XG4gICAgICAgICAgICBpZiAobmV3ZXJGaXJzdCA9PT0gdm9pZCAwKSB7IG5ld2VyRmlyc3QgPSB0cnVlOyB9XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuQmFja0VuZC5nZXRQb3N0cyhzdGFydCwgZW5kLCBuZXdlckZpcnN0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIChfYS5zZW50KCkpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhRGF0ZSA9IG5ldyBEYXRlKChfYSA9IGEuZmVjaGEpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiRGF0ZSA9IG5ldyBEYXRlKChfYiA9IGIuZmVjaGEpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiRGF0ZS5nZXRUaW1lKCkgLSBhRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUG9zdENvbnRyb2xsZXIucHJvdG90eXBlLmdldExhc3RQb3N0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRQb3N0cygwLCAxLCB0cnVlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLkxhc3RSZXF1ZXN0UG9zdHMgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkxhc3RSZXF1ZXN0UG9zdHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLlBvc3RzLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucG9zdENvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmlnUG9zdF8xLkJpZ1Bvc3QsIF9fYXNzaWduKHt9LCB0aGlzLkxhc3RSZXF1ZXN0UG9zdHNbMF0sIHsga2V5OiB0aGlzLktleVByZWZpeCArIFwiMFwiIH0pKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUG9zdENvbnRyb2xsZXIucHJvdG90eXBlLmdldE1pbmlQb3N0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIG5ld2VyRmlyc3QpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoc3RhcnQgPT09IHZvaWQgMCkgeyBzdGFydCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChlbmQgPT09IHZvaWQgMCkgeyBlbmQgPSA0OyB9XG4gICAgICAgICAgICBpZiAobmV3ZXJGaXJzdCA9PT0gdm9pZCAwKSB7IG5ld2VyRmlyc3QgPSB0cnVlOyB9XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmdldFBvc3RzKHN0YXJ0LCBlbmQsIG5ld2VyRmlyc3QpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EuTGFzdFJlcXVlc3RQb3N0cyA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTGFzdFJlcXVlc3RQb3N0cy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuUG9zdHMucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuTGFzdFJlcXVlc3RQb3N0cy5tYXAoZnVuY3Rpb24gKHAsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucG9zdENvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWluaVBvc3RfMS5NaW5pUG9zdCwgX19hc3NpZ24oe30sIHAsIHsga2V5OiBfdGhpcy5LZXlQcmVmaXggKyBfdGhpcy5wb3N0Q291bnRlciB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBQb3N0Q29udHJvbGxlcjtcbn0oKSk7XG5leHBvcnRzLlBvc3RDb250cm9sbGVyID0gUG9zdENvbnRyb2xsZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUG9zdCA9IHZvaWQgMDtcbnZhciBQb3N0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBvc3QocG9zdCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICAgICAgdGhpcy5kZXNjcmlwY2lvbiA9IChfYSA9IHBvc3QgPT09IG51bGwgfHwgcG9zdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9zdC5kZXNjcmlwY2lvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogXCJcIjtcbiAgICAgICAgdGhpcy5mZWNoYSA9IChfYiA9IHBvc3QgPT09IG51bGwgfHwgcG9zdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9zdC5mZWNoYSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICAgICAgdGhpcy5mb3RvU3JjID0gKF9jID0gcG9zdCA9PT0gbnVsbCB8fCBwb3N0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3N0LmZvdG9TcmMpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFwiXCI7XG4gICAgICAgIHRoaXMudGV4dG9Cb3RvbiA9IChfZCA9IHBvc3QgPT09IG51bGwgfHwgcG9zdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9zdC50ZXh0b0JvdG9uKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBcIkV4cGFuZGlyXCI7XG4gICAgICAgIHRoaXMudGl0dWxvID0gKF9lID0gcG9zdCA9PT0gbnVsbCB8fCBwb3N0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3N0LnRpdHVsbykgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogXCJcIjtcbiAgICAgICAgdGhpcy5jb250ZW5pZG8gPSAoX2YgPSBwb3N0ID09PSBudWxsIHx8IHBvc3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvc3QuY29udGVuaWRvKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gUG9zdDtcbn0oKSk7XG5leHBvcnRzLlBvc3QgPSBQb3N0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29udHJvbGxlcnMvUG9zdENvbnRyb2xsZXIudHN4XCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9